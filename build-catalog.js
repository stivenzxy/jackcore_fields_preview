#!/usr/bin/env node
/**
 * Regenerates catalog.data.js from the forms generator component catalog.
 *
 * Usage:
 *   node build-catalog.js http://<generator-api-host>/components
 *   node build-catalog.js ./components.json
 *
 * The source is the same catalog the generator seeds into Mongo
 * (tools/db/{variables,elements}/*.json in tramites_internos_backend_forms_generator_api).
 * Status and renderer notes below are maintained by hand: they describe what the
 * office renderer (features/dynamic-form) actually reads for each type.
 */
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, 'catalog.data.js');

const FORMJS = { text:'textfield', textarea:'textarea', number:'number', digit:'number', currency:'number', email:'textfield', tel:'textfield', datepicker:'datetime', datetimepicker:'datetime', checkbox:'checkbox', checkboxList:'checklist', radioList:'radio', select:'select', selectMultiple:'taglist', editor:'textfield', 'file-upload':'filepicker', viewerFile:'textfield', location:'textfield', recaptcha:'textfield', resultCalc:'textfield', resultTable:'textfield', submit:'button', 'button-element':'button', 'open-modal':'textfield', 'dynamic-section':'textfield', 'dynamic-table-field':'textfield', markdown:'text', downloadTemplate:'textfield' };
const OFFICE_KEY = { 'file-upload':'uploadFile' };
const STATUS = {
  supported: ['text','textarea','number','digit','currency','email','tel','datepicker','datetimepicker','checkbox','checkboxList','radioList','select','selectMultiple','editor','file-upload','viewerFile','location','resultCalc','submit','markdown','downloadTemplate','button-element','open-modal','dynamic-section','dynamic-table-field'],
  mock: ['recaptcha','resultTable'],
  unsupported: [],
};
const NOTES = {
  text: 'El office lee general.label, description y readonly. mask, keepMask, thousandSeparator, decimalDigits y decimalMarker se configuran en el generador pero el plugin de texto no los aplica. prefix y suffix se leen desde appearance, no desde general.',
  textarea: 'Soporte completo: label, description, readonly y rows.',
  number: 'No existe entrada number en el mapa de componentes del office; cae al plugin de texto con type=number. Funciona, pero sin formato numérico.',
  digit: 'prefix, suffix y decimalDigits se aplican. thousandSeparator, mask, keepMask y decimalMarker se ignoran.',
  currency: 'prefix, suffix, thousandSeparator y decimalDigits se aplican. mask, keepMask y decimalMarker se ignoran. min y max sí llegan a validate.',
  email: 'No se valida el formato de email: el validador solo aplica con validationType="email", que el generador no emite. Solo se aplica required.',
  tel: 'phoneFormat solo cambia el placeholder, no valida el formato. minLength, maxLength y pattern sí aplican.',
  datepicker: 'readonly no se aplica (el plugin lee fieldInfo.general.readonly, que siempre es undefined). Valor en formato fecha.',
  datetimepicker: 'Es un selector de hora (subtype time), no de fecha y hora. Mismo problema de readonly que datepicker.',
  checkbox: 'Soporte completo: label, description y readonly.',
  checkboxList: 'values se renombra a options ({label, value}). numColumns no se pasa al plugin. Además del valor, emite la clave <key>_value con las etiquetas.',
  radioList: 'options y numColumns se aplican. Emite también <key>_value con la etiqueta seleccionada.',
  select: 'options, urlDynamic, typeUrl y relatedTo funcionan (comportamiento DynamicOptions). searchable se ignora porque el plugin lee isSearchable. externalScope y contextValues se ignoran.',
  selectMultiple: 'Igual que select (opciones estáticas o dinámicas), sin búsqueda.',
  editor: 'El plugin lee label, placeholder, readonly, rows y required/maxLength, aunque el generador solo expone downloadTemplate, que se ignora.',
  'file-upload': 'Se renombra a uploadFile en el office. readonly=false muestra la caja de carga; readonly=true muestra el visor del archivo. allowExtensions se ignora: el validador lee validate/properties.',
  viewerFile: 'Lee label, description, sourceKey y behavior.showFileName. buttonText, emptyText, previewInline y allowDownload se ignoran.',
  location: 'Dos inputs numéricos (Latitud, Longitud) más un mapa Leaflet con OSM. Guarda la cadena "lat,long" en EPSG:9377 (metros). Problemas conocidos: en readonly sin valor rellena grados WGS84 que no pasan la validación, y al reabrir el mapa no reconvierte las coordenadas.',
  recaptcha: 'Mockup: muestra la configuración como texto y un checkbox "No soy un robot". No integra Google reCAPTCHA.',
  resultCalc: 'Campo de solo lectura. La ecuación se lee desde properties.equation, general.equation o attributes.general.equation.',
  resultTable: 'Mockup: tabla fija (Producto A / Producto B) más un total de solo lectura. lastColumnResult y tableIdentity no se usan.',
  submit: 'Lee label, disabled, appearance.buttonStyle, appearance.size, configuration.action y statusControl. confirmMessage, loadingText y resetOnSend se ignoran.',
  'button-element': 'Botón genérico (ButtonElementComponent). Lee general.label y disabled, appearance.buttonStyle, size e icon, y configuration.type/action/actionIdentifier para disparar la acción. behavior.confirmMessage y validateBeforeAction se aplican antes de ejecutar.',
  'open-modal': 'Botón que abre un modal (OpenModalComponent). Lee button.buttonText y buttonStyle para el botón, y modal.modalTitle, modalContent, modalSize y modalComponent para el contenido del diálogo.',
  'dynamic-section': 'Sección repetible (DynamicSectionComponent). Lee configuration.titleSection (admite ${index}), level, limitSections, addButtonText, removeButtonText, collapsible y collapsed; los campos internos se agrupan bajo groupSection. En el JSON del formulario también puede venir como marcadores startDynamicSection / endDynamicSection.',
  'dynamic-table-field': 'Tabla con filas repetibles (DynamicTableFieldComponent). Lee columns.columns ({label, value}) para las cabeceras, configuration.nameIndexColumn, minRows, maxRows, addRowText y removeRowText. El valor es un arreglo de filas con una clave por columna.',
  markdown: 'Lee content.text (o general.text / text) y properties.readVariable. dynamic.readVariable, allowHtml, enableLinks y theme se ignoran.',
  downloadTemplate: 'Con readonly muestra el visor de plantilla usando general.templateName. El grupo template (templateName, fileUrl, allowDownload, allowPrint) se ignora.',
};
const SAMPLE = {
  text: { general: { label: 'Nombres', description: 'Ingrese su nombre completo' }, validations: { required: true, minLength: 3, maxLength: 200 } },
  textarea: { general: { label: 'Observaciones', description: 'Describa la solicitud', rows: 4 }, validations: { required: false, maxLength: 1000 } },
  number: { general: { label: 'Cantidad', description: 'Solo números enteros' }, validations: { required: true } },
  digit: { general: { label: 'Número de documento', description: 'Sin puntos ni espacios' }, validations: { required: true, minLength: 6, maxLength: 12 } },
  currency: { general: { label: 'Valor del trámite', description: 'Valor en pesos', prefix: '$' }, validations: { required: true, min: 0 } },
  email: { general: { label: 'Correo electrónico', description: 'nombre@dominio.com' }, validations: { required: true } },
  tel: { general: { label: 'Teléfono de contacto', description: '+57 300 000 0000' }, validations: { required: true, phoneFormat: 'colombia' } },
  datepicker: { general: { label: 'Fecha de radicación', dateLabel: 'Fecha', description: 'Seleccione una fecha' }, validations: { required: true } },
  datetimepicker: { general: { label: 'Hora de la cita', timeLabel: 'Hora', description: 'Seleccione una hora' }, validations: { required: false } },
  checkbox: { general: { label: 'Acepto los términos y condiciones', description: 'Debe aceptar para continuar' }, validations: { required: true } },
  checkboxList: { general: { label: 'Servicios requeridos', description: 'Seleccione uno o varios', values: [ { label: 'Acueducto', value: 'acueducto' }, { label: 'Alcantarillado', value: 'alcantarillado' }, { label: 'Aseo', value: 'aseo' } ], numColumns: 1 }, validations: { required: true } },
  radioList: { general: { label: 'Tipo de persona', description: 'Seleccione una opción', values: [ { label: 'Natural', value: 'natural' }, { label: 'Jurídica', value: 'juridica' } ], numColumns: 2 }, validations: { required: true } },
  select: { general: { label: 'Tipo de documento', description: 'Seleccione', searchable: true, values: [ { label: 'Cédula de ciudadanía', value: 'CC' }, { label: 'Cédula de extranjería', value: 'CE' }, { label: 'Pasaporte', value: 'PA' } ] }, validations: { required: true } },
  selectMultiple: { general: { label: 'Municipios', description: 'Seleccione uno o varios', values: [ { label: 'Bogotá', value: '11001' }, { label: 'Medellín', value: '05001' }, { label: 'Cali', value: '76001' } ] }, validations: { required: false } },
  editor: { general: { label: 'Contenido del documento', downloadTemplate: false } },
  'file-upload': { general: { label: 'Documento de identidad', description: 'PDF o imagen, máximo 5 MB', allowExtensions: 'pdf,jpg,png' }, validations: { required: true } },
  viewerFile: { general: { label: 'Documento radicado', sourceKey: 'documentoIdentidad', description: 'Archivo cargado por el solicitante', buttonText: 'Ver archivo', emptyText: 'Sin archivo' }, behavior: { previewInline: true, allowDownload: true, showFileName: true } },
  location: { general: { label: 'Ubicación del predio', description: 'Seleccione el punto en el mapa' }, validations: { required: true } },
  recaptcha: { general: { siteKey: '6Lc_xxxxxxxxxxxxxxxxxxxxxxxx', version: 'v2', size: 'normal' }, validations: { required: true } },
  resultCalc: { general: { label: 'Total a pagar', description: 'Se calcula automáticamente', equation: '{valorTramite} * 1.19' } },
  resultTable: { general: { label: 'Resumen de liquidación', description: 'Totales por concepto', lastColumnResult: true, tableIdentity: 'liquidacion' } },
  submit: { general: { label: 'Enviar solicitud', description: '', disabled: false }, configuration: { action: 'submit', actionIdentifier: 'radicar', validateBeforeSubmit: true, resetOnSend: false }, appearance: { buttonStyle: 'primary', size: 'medium' }, behavior: { confirmMessage: '¿Desea enviar la solicitud?', loadingText: 'Enviando...' } },
  'button-element': { general: { label: 'Calcular', disabled: false }, configuration: { type: 'calculate', action: 'calculate', actionIdentifier: 'calc' }, appearance: { buttonStyle: 'info', size: 'medium', icon: '' }, behavior: { confirmMessage: '', validateBeforeAction: false } },
  'open-modal': { general: { label: 'Ayuda', disabled: false }, button: { buttonText: 'Ver ayuda', buttonStyle: 'info' }, modal: { modalTitle: 'Instrucciones', modalContent: 'Diligencie todos los campos marcados con *', modalSize: 'md', modalComponent: '' } },
  'dynamic-section': { general: { label: 'Predios', description: 'Agregue uno o más predios' }, configuration: { titleSection: 'Predio ${index}', groupSection: 'predios', level: 1, limitSections: 5, addButtonText: 'Agregar predio', removeButtonText: 'Eliminar', collapsible: true, collapsed: false }, validations: { required: true } },
  'dynamic-table-field': { general: { label: 'Fuentes de agua', description: 'Registre cada fuente' }, configuration: { addRowText: 'Agregar fila', removeRowText: 'Eliminar', minRows: 1, maxRows: 10, nameIndexColumn: '#' }, columns: { columns: [ { label: 'Número', value: 'numero' }, { label: 'Volumen (L)', value: 'volumen' }, { label: 'Tiempo (s)', value: 'tiempo' } ] }, validations: { required: true } },
  markdown: { general: { label: 'Instrucciones' }, content: { text: '## Instrucciones\n\nDiligencie los campos marcados con **asterisco**.' }, dynamic: { readVariable: '', allowHtml: false, enableLinks: true }, appearance: { theme: 'default' } },
  downloadTemplate: { general: { label: 'Plantilla de solicitud', description: 'Descargue y diligencie la plantilla', readonly: true }, template: { templateName: 'solicitud-concesion', fileUrl: '', allowDownload: true, allowPrint: false } },
};
// Only these validation keys are copied by the generator into `validate`;
// the full validation group is kept under `attributes.validation`.
const VALIDATE_KEYS = ['required', 'min', 'max', 'minLength', 'maxLength', 'pattern'];
const slug = s => s.replace(/[^a-z0-9]+/gi, '_');

async function loadSource(source) {
  if (/^https?:\/\//.test(source)) {
    const res = await fetch(source);
    if (!res.ok) throw new Error(`GET ${source} -> ${res.status}`);
    return res.json();
  }
  return JSON.parse(fs.readFileSync(path.resolve(source), 'utf8'));
}

function buildEntry(c, i) {
  const groups = (c.schema.groups || []).map(g => ({
    name: g.name, label: g.label,
    props: (g.components || []).map(x => {
      const p = x.props || {};
      return {
        name: p.name, label: p.label, control: x.type, helper: p.helperText || '',
        default: p.defaultValue ?? null, placeholder: p.placeholder || '',
        options: Array.isArray(p.options) ? p.options.map(o => (o && typeof o === 'object') ? (o.value ?? o.label) : o) : undefined,
      };
    }),
  }));
  const sample = SAMPLE[c.type] || {};
  const attrs = {};
  for (const g of groups) {
    const obj = {};
    for (const p of g.props) obj[p.name] = p.default;
    Object.assign(obj, sample[g.name] || {});
    attrs[g.name] = obj;
  }
  // The generator renames `values` to `options` when it serializes a field.
  if (attrs.general && attrs.general.values) { attrs.general.options = attrs.general.values; delete attrs.general.values; }
  const validation = attrs.validations || {};
  const validate = {};
  for (const k of VALIDATE_KEYS) if (validation[k] !== undefined && validation[k] !== null && validation[k] !== '') validate[k] = validation[k];
  const { validations, ...rest } = attrs;
  const key = slug((sample.general && sample.general.label) || c.labelComponent).replace(/^_+|_+$/g, '');
  const example = {
    label: (sample.general && sample.general.label) || c.labelComponent,
    key,
    type: FORMJS[c.type], typeComponent: c.type,
    idVariable: '6a29cd082cafb0b6956' + String(1000 + i),
    ...rest,
    validate,
    layout: { row: 'Row_' + slug(c.type).toLowerCase() },
    id: 'Field_' + slug(c.type).toLowerCase(),
    attributes: { ...rest, validation },
    properties: {}, disabled: false, readonly: !!(attrs.general && attrs.general.readonly),
  };
  const status = Object.keys(STATUS).find(k => STATUS[k].includes(c.type)) || 'unsupported';
  return { type: c.type, label: c.labelComponent, groupType: c.groupType, formJsType: FORMJS[c.type] || 'textfield', officeKey: OFFICE_KEY[c.type] || c.type, status, rendererNotes: NOTES[c.type] || '', groups, example };
}

async function main() {
  const source = process.argv[2];
  if (!source) { console.error('Usage: node build-catalog.js <url|file>'); process.exit(1); }
  const raw = await loadSource(source);
  const arr = Array.isArray(raw) ? raw : Object.values(raw).find(Array.isArray);
  const catalog = arr.map(buildEntry);
  const unknown = catalog.filter(c => !NOTES[c.type]).map(c => c.type);
  if (unknown.length) console.warn('Types without status/notes (defaulted to unsupported):', unknown.join(', '));
  const header = '// Auto-generated from GET /components of the forms generator API, cross-checked\n// against what the office renderer (dynamic-form) actually reads.\n// Regenerate with build-catalog.js instead of editing by hand.\n';
  fs.writeFileSync(OUT, header + 'window.FIELD_CATALOG = ' + JSON.stringify(catalog, null, 2) + ';\n');
  console.log(`${catalog.length} types written to ${OUT}`);
}

main().catch(e => { console.error(e); process.exit(1); });
