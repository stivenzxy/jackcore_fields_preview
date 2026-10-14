/* Campos dinámicos — static preview site for the office renderer.
   Plain ES2020, no build step. Reads window.FIELD_CATALOG from catalog.data.js. */
(function () {
  'use strict';

  const CATALOG = Array.isArray(window.FIELD_CATALOG) ? window.FIELD_CATALOG : [];

  const GROUP_LABELS = {
    input: 'Campos de entrada',
    action: 'Acciones',
    display: 'Visualización',
    presentation: 'Presentación',
    container: 'Contenedores',
    complex: 'Complejos',
    editor: 'Editor',
    security: 'Seguridad',
    calculation: 'Cálculo',
    output: 'Salida'
  };
  const GROUP_ORDER = Object.keys(GROUP_LABELS);
  const STATUS_LABELS = { supported: 'Soportado', mock: 'Mockup', unsupported: 'No soportado' };
  const STATUS_ORDER = ['all', 'supported', 'mock', 'unsupported'];
  const FORM_ROUTE = 'form';
  const UNSUPPORTED_BANNER = 'Este tipo cae al input de texto en el office';
  const MOCK_BANNER = 'El office muestra un mockup, no la integración real';
  const VALIDATE_NOTE = 'Solo required, min, max, minLength, maxLength y pattern se copian a `validate`; el resto queda en `attributes.validation`.';

  const state = { selected: null, query: '', status: 'all' };
  let uidCounter = 0;

  /* ---------------------------------------------------------------- DOM helpers */

  function el(tag, attrs, ...children) {
    const node = document.createElement(tag);
    if (attrs) {
      for (const [key, value] of Object.entries(attrs)) {
        if (value == null || value === false) continue;
        if (key === 'class') node.className = value;
        else if (key === 'text') node.textContent = value;
        else if (key.startsWith('on')) node.addEventListener(key.slice(2), value);
        else if (value === true) node.setAttribute(key, '');
        else node.setAttribute(key, String(value));
      }
    }
    for (const child of children.flat(Infinity)) {
      if (child == null || child === false) continue;
      node.append(child instanceof Node ? child : document.createTextNode(String(child)));
    }
    return node;
  }

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function uid(prefix) {
    uidCounter += 1;
    return `${prefix}-${uidCounter}`;
  }

  function isEmptyValue(value) {
    if (value == null || value === false || value === '') return true;
    if (Array.isArray(value)) return value.length === 0;
    return false;
  }

  function formatDefault(value) {
    if (value === null || value === undefined) return '—';
    if (typeof value === 'boolean') return String(value);
    if (typeof value === 'object') return JSON.stringify(value);
    if (value === '') return '""';
    return String(value);
  }

  function buttonClass(style, size) {
    const styles = { primary: 'btn-primary', success: 'btn-success', info: 'btn-info', warning: 'btn-warning', danger: 'btn-danger', secondary: 'btn-secondary' };
    const sizes = { small: 'btn-sm', large: 'btn-lg' };
    return ['btn', styles[style] || 'btn-primary', sizes[size] || ''].join(' ').trim();
  }

  function copyText(text, button) {
    const done = () => { const prev = button.textContent; button.textContent = 'Copiado'; setTimeout(() => { button.textContent = prev; }, 1400); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
    } else {
      fallbackCopy(text, done);
    }
  }

  function fallbackCopy(text, done) {
    const area = el('textarea', { style: 'position:fixed;opacity:0', 'aria-hidden': 'true' });
    area.value = text;
    document.body.append(area);
    area.select();
    try { document.execCommand('copy'); } catch (_) { /* ignore */ }
    area.remove();
    done();
  }

  /* ---------------------------------------------------------------- Modal */

  function openModal({ title, body, size }) {
    const root = document.getElementById('modal-root');
    root.innerHTML = '';
    const widths = { sm: 420, md: 640, lg: 860, xl: 1040 };
    const close = () => { root.hidden = true; root.innerHTML = ''; document.removeEventListener('keydown', onKey); };
    const onKey = (event) => { if (event.key === 'Escape') close(); };
    const modal = el('div', { class: 'modal', role: 'dialog', 'aria-modal': 'true', 'aria-label': title, style: `max-width:${widths[size] || 640}px` },
      el('div', { class: 'modal-head' }, el('span', { text: title }), el('button', { type: 'button', class: 'btn btn-ghost btn-sm', onclick: close, 'aria-label': 'Cerrar' }, '✕')),
      el('div', { class: 'modal-body' }, body),
      el('div', { class: 'modal-foot' }, el('button', { type: 'button', class: 'btn', onclick: close }, 'Cerrar'))
    );
    root.append(el('div', { class: 'modal-backdrop', onclick: close }), modal);
    root.hidden = false;
    document.addEventListener('keydown', onKey);
    const first = modal.querySelector('button');
    if (first) first.focus();
    return close;
  }

  /* ---------------------------------------------------------------- Markdown (tiny) */

  function inlineMarkdown(escaped, enableLinks) {
    let out = escaped
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/(^|[^*])\*([^*\n]+)\*/g, '$1<em>$2</em>')
      .replace(/(^|[^_])_([^_\n]+)_/g, '$1<em>$2</em>');
    out = out.replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, (_, label, href) =>
      enableLinks ? `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>` : label);
    return out;
  }

  function renderMarkdown(source, enableLinks) {
    const blocks = String(source || '').replace(/\r\n/g, '\n').split(/\n{2,}/);
    const html = blocks.map((block) => {
      const lines = block.split('\n').filter((line) => line.trim() !== '');
      if (!lines.length) return '';
      const heading = lines[0].match(/^(#{1,3})\s+(.*)$/);
      if (heading && lines.length === 1) {
        return `<h${heading[1].length}>${inlineMarkdown(escapeHtml(heading[2]), enableLinks)}</h${heading[1].length}>`;
      }
      if (lines.every((line) => /^\s*[-*]\s+/.test(line))) {
        const items = lines.map((line) => `<li>${inlineMarkdown(escapeHtml(line.replace(/^\s*[-*]\s+/, '')), enableLinks)}</li>`);
        return `<ul>${items.join('')}</ul>`;
      }
      return `<p>${inlineMarkdown(escapeHtml(lines.join(' ')), enableLinks)}</p>`;
    });
    const container = el('div', { class: 'md' });
    container.innerHTML = html.join('');
    return container;
  }

  /* ---------------------------------------------------------------- Preview building blocks */

  function labelNode(ctx, forId) {
    const tag = forId ? 'label' : 'div';
    return el(tag, { class: 'field-label', for: forId || null },
      ctx.general.label || ctx.entry.label,
      ctx.validate.required ? el('span', { class: 'req', 'aria-hidden': 'true' }, '*') : null);
  }

  function helperNode(text) {
    return text ? el('div', { class: 'field-help', text }) : null;
  }

  function noteNode(text) {
    return text ? el('div', { class: 'field-note', text }) : null;
  }

  function optionGrid(ctx, inputType, columns) {
    const name = uid('opt');
    const inputs = [];
    const grid = el('div', { class: `options-grid${ctx.readonly ? ' disabled' : ''}`, style: `grid-template-columns: repeat(${columns}, minmax(0, 1fr))`, role: 'group', 'aria-label': ctx.general.label || '' });
    (ctx.general.options || []).forEach((option) => {
      const id = uid('o');
      const input = el('input', { type: inputType, id, name, value: option.value, disabled: ctx.readonly });
      inputs.push(input);
      grid.append(el('div', { class: 'check-row' }, input, el('label', { for: id, text: option.label })));
    });
    return { grid, inputs };
  }

  function textInput(ctx, type, extra) {
    return el('input', Object.assign({
      type, id: ctx.id, class: 'control', placeholder: ctx.general.description || '', disabled: ctx.readonly,
      minlength: ctx.validate.minLength, maxlength: ctx.validate.maxLength, min: ctx.validate.min, max: ctx.validate.max
    }, extra || {}));
  }

  function withAdornments(ctx, input) {
    const prefix = ctx.general.prefix, suffix = ctx.general.suffix;
    if (!prefix && !suffix) return input;
    return el('div', { class: 'input-group' },
      prefix ? el('span', { class: 'adorn', text: prefix }) : null,
      input,
      suffix ? el('span', { class: 'adorn suffix', text: suffix }) : null);
  }

  function formatCurrency(raw, ctx) {
    const marker = ctx.general.decimalMarker || '.';
    const thousands = marker === '.' ? ',' : '.';
    const digits = Number.isInteger(ctx.general.decimalDigits) ? ctx.general.decimalDigits : 2;
    const normalized = String(raw).replace(new RegExp(`\\${thousands}`, 'g'), '').replace(marker, '.').replace(/[^0-9.-]/g, '');
    const number = Number(normalized);
    if (raw === '' || Number.isNaN(number)) return { text: '', value: null };
    const [intPart, decPart] = number.toFixed(digits).split('.');
    const grouped = ctx.general.thousandSeparator === false ? intPart : intPart.replace(/\B(?=(\d{3})+(?!\d))/g, thousands);
    return { text: decPart ? `${grouped}${marker}${decPart}` : grouped, value: number };
  }

  function fileCard(name, subtitle, buttonText, ctx) {
    return el('div', { class: 'file-card' },
      el('div', { class: 'icon', text: 'PDF' }),
      el('div', { class: 'meta' }, el('div', { class: 'name', text: name }), el('div', { class: 'sub', text: subtitle })),
      el('button', { type: 'button', class: 'btn btn-sm', onclick: () => openModal({ title: name, body: el('p', { text: 'Visor de archivo (simulado).' }) }) }, buttonText));
  }

  function makeMapModal(onPick) {
    const map = el('div', { class: 'map-placeholder', role: 'button', tabindex: '0', 'aria-label': 'Mapa de ejemplo' },
      el('div', { class: 'map-hint', text: 'Haga clic para ubicar el punto (mapa simulado, EPSG:9377)' }));
    let pin = null;
    map.addEventListener('click', (event) => {
      const rect = map.getBoundingClientRect();
      const fx = (event.clientX - rect.left) / rect.width, fy = (event.clientY - rect.top) / rect.height;
      if (!pin) { pin = el('div', { class: 'map-pin' }); map.append(pin); }
      pin.style.left = `${fx * 100}%`; pin.style.top = `${fy * 100}%`;
      onPick(Math.round(4700000 + (0.5 - fy) * 200000), Math.round(2100000 + (fx - 0.5) * 200000));
    });
    return map;
  }

  /* ---------------------------------------------------------------- Preview renderers (type → function) */

  function previewTextLike(type, extra) {
    return (ctx) => {
      const input = textInput(ctx, type, extra);
      const notes = ctx.entry.type === 'text' ? noteNode('prefix/suffix/mask no aplican en office') : null;
      return { control: input, extra: notes, getValue: () => (type === 'number' ? (input.value === '' ? null : Number(input.value)) : input.value) };
    };
  }

  function previewDigit(ctx) {
    const input = textInput(ctx, 'number', { inputmode: 'numeric', step: '1' });
    return { control: withAdornments(ctx, input), getValue: () => (input.value === '' ? null : Number(input.value)) };
  }

  function previewCurrency(ctx) {
    const input = textInput(ctx, 'text', { inputmode: 'decimal' });
    let numeric = null;
    input.addEventListener('blur', () => { const result = formatCurrency(input.value, ctx); input.value = result.text; numeric = result.value; });
    input.addEventListener('input', () => { numeric = formatCurrency(input.value, ctx).value; });
    return { control: withAdornments(ctx, input), getValue: () => numeric };
  }

  function previewTextarea(ctx) {
    const area = el('textarea', { id: ctx.id, class: 'control', rows: ctx.general.rows || 3, placeholder: ctx.general.description || '', disabled: ctx.readonly, maxlength: ctx.validate.maxLength });
    return { control: area, getValue: () => area.value };
  }

  function previewDate(inputType) {
    return (ctx) => {
      const input = el('input', { type: inputType, id: ctx.id, class: 'control', disabled: ctx.readonly });
      return { control: input, helperBelow: true, getValue: () => input.value };
    };
  }

  function previewCheckbox(ctx) {
    const input = el('input', { type: 'checkbox', id: ctx.id, disabled: ctx.readonly });
    const row = el('div', { class: 'check-row' }, input, el('label', { for: ctx.id }, ctx.general.label, ctx.validate.required ? el('span', { class: 'req' }, '*') : null));
    return { control: row, noLabel: true, helperBelow: true, getValue: () => input.checked };
  }

  function previewCheckboxList(ctx) {
    const { grid, inputs } = optionGrid(ctx, 'checkbox', 1);
    const note = ctx.general.numColumns > 1 ? noteNode(`numColumns=${ctx.general.numColumns} se ignora en office (siempre 1 columna)`) : null;
    return { control: grid, extra: note, helperBelow: true, getValue: () => inputs.filter((i) => i.checked).map((i) => i.value) };
  }

  function previewRadioList(ctx) {
    const { grid, inputs } = optionGrid(ctx, 'radio', Math.max(1, Number(ctx.general.numColumns) || 1));
    return { control: grid, helperBelow: true, getValue: () => { const hit = inputs.find((i) => i.checked); return hit ? hit.value : null; } };
  }

  function previewSelect(ctx) {
    const select = el('select', { id: ctx.id, class: 'control', disabled: ctx.readonly },
      el('option', { value: '', text: ctx.general.description || 'Seleccione' }),
      (ctx.general.options || []).map((o) => el('option', { value: o.value, text: o.label })));
    const wrap = el('div', { class: 'select-wrap' }, select, ctx.general.searchable ? el('span', { class: 'search-hint', 'aria-hidden': 'true' }, '🔍') : null);
    const note = ctx.general.searchable ? noteNode('searchable=true: el office ignora la búsqueda') : null;
    return { control: wrap, extra: note, getValue: () => select.value || null };
  }

  function previewSelectMultiple(ctx) {
    const { grid, inputs } = optionGrid(ctx, 'checkbox', 1);
    const chips = el('div', { class: 'chips-selected' });
    const refresh = () => {
      chips.innerHTML = '';
      const selected = inputs.filter((i) => i.checked);
      if (!selected.length) chips.append(el('span', { class: 'empty', text: ctx.general.description || 'Sin selección' }));
      selected.forEach((i) => chips.append(el('span', { class: 'chip-sel', text: i.labels[0].textContent })));
    };
    inputs.forEach((i) => i.addEventListener('change', refresh));
    refresh();
    const box = el('div', { class: `multi-box${ctx.readonly ? ' disabled' : ''}` }, chips, grid);
    return { control: box, getValue: () => inputs.filter((i) => i.checked).map((i) => i.value) };
  }

  function previewEditor(ctx) {
    const toolbar = el('div', { class: 'rte-toolbar', 'aria-hidden': 'true' },
      ['B', 'I', 'U', '• Lista', '1. Lista'].map((t, i) => el('button', { type: 'button', tabindex: '-1', style: i === 0 ? 'font-weight:700' : i === 1 ? 'font-style:italic' : i === 2 ? 'text-decoration:underline' : '' }, t)));
    const area = el('div', { class: 'rte-area', id: ctx.id, contenteditable: ctx.readonly ? 'false' : 'true', role: 'textbox', 'aria-multiline': 'true', 'aria-label': ctx.general.label || ctx.entry.label });
    return { control: el('div', {}, toolbar, area), labelFor: false, getValue: () => area.innerHTML };
  }

  function previewFileUpload(ctx) {
    if (ctx.readonly) {
      return { control: fileCard('documento.pdf', 'Archivo cargado', 'Ver', ctx), helperBelow: true, getValue: () => 'documento.pdf' };
    }
    const file = el('input', { type: 'file', id: ctx.id, class: 'sr-only', accept: (ctx.general.allowExtensions || '').split(',').filter(Boolean).map((e) => `.${e.trim()}`).join(',') });
    const name = el('div', { class: 'file-name' });
    file.addEventListener('change', () => { name.textContent = file.files[0] ? file.files[0].name : ''; });
    const zone = el('label', { class: 'dropzone', for: ctx.id },
      el('div', { text: 'Arrastre o seleccione un archivo' }), name,
      ctx.general.allowExtensions ? el('div', { class: 'ext', text: `Permitidos: ${ctx.general.allowExtensions}` }) : null, file);
    return { control: zone, labelFor: false, helperBelow: true, getValue: () => (file.files[0] ? file.files[0].name : null) };
  }

  function previewViewerFile(ctx) {
    const card = fileCard(`sourceKey: ${ctx.general.sourceKey || '—'}`, ctx.general.emptyText || 'Sin archivo', ctx.general.buttonText || 'Ver archivo', ctx);
    return { control: card, labelFor: false, helperBelow: true, getValue: () => null };
  }

  function previewLocation(ctx) {
    const lat = el('input', { type: 'number', id: `${ctx.id}-lat`, class: 'control', placeholder: 'Latitud', disabled: ctx.readonly });
    const lng = el('input', { type: 'number', id: `${ctx.id}-lng`, class: 'control', placeholder: 'Longitud', disabled: ctx.readonly });
    const pick = el('button', { type: 'button', class: 'btn', disabled: ctx.readonly, onclick: () => {
      const close = openModal({ title: 'Seleccionar en el mapa', size: 'lg', body: makeMapModal((y, x) => { lat.value = y; lng.value = x; setTimeout(close, 250); }) });
    } }, 'Seleccionar en el mapa');
    const control = el('div', { style: 'display:grid;gap:10px' },
      el('div', { class: 'coords' },
        el('div', { class: 'field' }, el('label', { class: 'field-label', for: lat.id, text: 'Latitud' }), lat),
        el('div', { class: 'field' }, el('label', { class: 'field-label', for: lng.id, text: 'Longitud' }), lng)),
      el('div', {}, pick));
    return { control, labelFor: false, helperBelow: true, extra: noteNode('Valor guardado como "lat,long" en EPSG:9377'), getValue: () => (lat.value && lng.value ? `${lat.value},${lng.value}` : null) };
  }

  function previewRecaptcha(ctx) {
    const input = el('input', { type: 'checkbox', id: ctx.id, disabled: ctx.readonly });
    const box = el('div', { class: 'recaptcha-box' },
      el('div', { class: 'check-row' }, input, el('label', { for: ctx.id, text: 'No soy un robot' })),
      el('div', { class: 'brand' }, 'reCAPTCHA', el('br'), `siteKey: ${ctx.general.siteKey || '—'}`, el('br'), `${ctx.general.version || 'v2'} · ${ctx.general.size || 'normal'}`));
    return { control: box, noLabel: true, getValue: () => input.checked };
  }

  function previewResultCalc(ctx) {
    const input = el('input', { type: 'text', id: ctx.id, class: 'control', readonly: true, placeholder: `= ${ctx.general.equation || ''}` });
    return { control: input, helperBelow: true, getValue: () => null };
  }

  function previewResultTable(ctx) {
    const rows = [['Producto A', '$10.00'], ['Producto B', '$25.00']];
    const table = el('table', { class: 'result', 'aria-label': ctx.general.label || 'Tabla de resultados' },
      el('thead', {}, el('tr', {}, el('th', { text: 'Concepto' }), el('th', { text: 'Valor' }))),
      el('tbody', {}, rows.map(([c, v]) => el('tr', {}, el('td', { text: c }), el('td', { text: v }))), el('tr', { class: 'total' }, el('td', { text: 'Total' }), el('td', { text: '$35.00' }))));
    return { control: table, labelFor: false, helperBelow: true, getValue: () => ({ total: 35 }) };
  }

  function previewSubmit(ctx) {
    const appearance = ctx.example.appearance || {};
    const button = el('button', { type: 'button', class: buttonClass(appearance.buttonStyle, appearance.size), disabled: ctx.general.disabled, onclick: () => { if (ctx.onSubmit) ctx.onSubmit(); } }, ctx.general.label || 'Enviar');
    return { control: el('div', {}, button), noLabel: true, getValue: () => undefined };
  }

  function previewMarkdown(ctx) {
    const content = ctx.example.content || {};
    const dynamic = ctx.example.dynamic || {};
    return { control: renderMarkdown(content.text || content.content || '', dynamic.enableLinks !== false), noLabel: true, getValue: () => undefined };
  }

  function previewDownloadTemplate(ctx) {
    const template = ctx.example.template || {};
    const card = el('div', { class: 'file-card doc-card' },
      el('div', { class: 'icon', text: 'DOC' }),
      el('div', { class: 'meta' }, el('div', { class: 'name', text: template.templateName || 'plantilla' }), el('div', { class: 'sub', text: ctx.general.description || '' })),
      el('button', { type: 'button', class: 'btn btn-primary btn-sm', disabled: template.allowDownload === false }, 'Descargar plantilla'));
    return { control: card, labelFor: false, getValue: () => undefined };
  }

  /* Previews for the element/container types (button, modal, dynamic section, dynamic table). */

  function sketchButtonElement(ctx) {
    const appearance = ctx.example.appearance || {};
    return el('button', { type: 'button', class: buttonClass(appearance.buttonStyle, appearance.size) }, ctx.general.label || 'Botón');
  }

  function sketchOpenModal(ctx) {
    const button = ctx.example.button || {}, modal = ctx.example.modal || {};
    return el('button', { type: 'button', class: buttonClass(button.buttonStyle), onclick: () => openModal({ title: modal.modalTitle || 'Modal', size: modal.modalSize, body: el('p', { text: modal.modalContent || '' }) }) }, button.buttonText || 'Abrir');
  }

  function sketchDynamicSection(ctx) {
    const config = ctx.example.configuration || {};
    const title = (config.titleSection || 'Sección ${index}').replace('${index}', '1');
    const inputId = uid('dyn');
    return el('div', { style: 'display:grid;gap:10px' },
      el('div', { class: 'dyn-section' },
        el('div', { class: 'dyn-section-head' }, el('span', { text: title }), el('button', { type: 'button', class: 'btn btn-sm' }, config.removeButtonText || 'Eliminar')),
        el('div', { class: 'dyn-section-body' }, el('div', { class: 'field' }, el('label', { class: 'field-label', for: inputId, text: 'Campo del predio' }), el('input', { type: 'text', id: inputId, class: 'control', placeholder: 'Texto' })))),
      el('div', {}, el('button', { type: 'button', class: 'btn btn-primary btn-sm' }, config.addButtonText || 'Agregar')));
  }

  function sketchDynamicTable(ctx) {
    const config = ctx.example.configuration || {};
    const columns = ((ctx.example.columns || {}).columns || []);
    const table = el('table', { class: 'dyn' },
      el('thead', {}, el('tr', {}, el('th', { text: config.nameIndexColumn || '#' }), columns.map((c) => el('th', { text: c.label })))),
      el('tbody', {}, el('tr', {}, el('td', { class: 'idx', text: '1' }), columns.map((c) => el('td', {}, el('input', { type: 'text', class: 'control', 'aria-label': c.label }))))));
    return el('div', { style: 'display:grid;gap:10px' }, el('div', { class: 'table-wrap' }, table), el('div', {}, el('button', { type: 'button', class: 'btn btn-primary btn-sm' }, config.addRowText || 'Agregar fila')));
  }

  const SKETCHES = { 'button-element': sketchButtonElement, 'open-modal': sketchOpenModal, 'dynamic-section': sketchDynamicSection, 'dynamic-table-field': sketchDynamicTable };

  function previewFallback(ctx) {
    const input = textInput(ctx, 'text');
    const sketch = SKETCHES[ctx.entry.type];
    const extra = sketch ? el('div', { class: 'sketch' }, el('div', { class: 'sketch-title', text: 'Cómo debería verse' }), sketch(ctx)) : null;
    return { control: input, extra, getValue: () => input.value };
  }

  const PREVIEWS = {
    text: previewTextLike('text'),
    email: previewTextLike('email'),
    tel: previewTextLike('tel'),
    number: previewTextLike('number'),
    digit: previewDigit,
    currency: previewCurrency,
    textarea: previewTextarea,
    datepicker: previewDate('date'),
    datetimepicker: previewDate('time'),
    checkbox: previewCheckbox,
    checkboxList: previewCheckboxList,
    radioList: previewRadioList,
    select: previewSelect,
    selectMultiple: previewSelectMultiple,
    editor: previewEditor,
    'file-upload': previewFileUpload,
    viewerFile: previewViewerFile,
    location: previewLocation,
    recaptcha: previewRecaptcha,
    resultCalc: previewResultCalc,
    resultTable: previewResultTable,
    submit: previewSubmit,
    'button-element': (ctx) => ({ control: el('div', {}, sketchButtonElement(ctx)), noLabel: true, getValue: () => undefined }),
    'open-modal': (ctx) => ({ control: el('div', {}, sketchOpenModal(ctx)), noLabel: true, getValue: () => undefined }),
    'dynamic-section': (ctx) => ({ control: sketchDynamicSection(ctx), labelFor: false, helperBelow: true, getValue: () => [] }),
    'dynamic-table-field': (ctx) => ({ control: sketchDynamicTable(ctx), labelFor: false, helperBelow: true, getValue: () => [] }),
    markdown: previewMarkdown,
    downloadTemplate: previewDownloadTemplate
  };

  /* renderPreview(entry, state) → DOM element exposing getValue() and setTouched(). */
  function renderPreview(entry, options) {
    const opts = options || {};
    const example = entry.example || {};
    const general = example.general || {};
    const readonly = opts.readonly != null ? !!opts.readonly : !!(general.readonly || example.readonly);
    const ctx = { entry, example, general, validate: example.validate || {}, readonly, id: uid('f'), key: example.key, onSubmit: opts.onSubmit };
    const renderer = (entry.status === 'unsupported' ? null : PREVIEWS[entry.type]) || previewFallback;
    const part = renderer(ctx);
    const showLabel = !part.noLabel;
    const bindLabel = showLabel && part.labelFor !== false;
    const helperText = part.helperBelow ? general.description : '';
    const error = el('div', { class: 'field-error', hidden: true, text: 'Este campo es requerido' });

    const root = el('div', { class: 'field', 'data-type': entry.type },
      showLabel ? labelNode(ctx, bindLabel ? ctx.id : null) : null,
      part.control, helperNode(helperText), part.extra, error);

    root.getValue = part.getValue;
    root.setTouched = (touched) => {
      const invalid = touched && ctx.validate.required && isEmptyValue(part.getValue());
      root.classList.toggle('invalid', !!invalid);
      error.hidden = !invalid;
    };
    root.addEventListener('change', () => { if (!error.hidden) root.setTouched(true); });
    return root;
  }

  /* ---------------------------------------------------------------- Component page */

  function statusPill(status) {
    return el('span', { class: `pill pill-${status}`, text: STATUS_LABELS[status] || status });
  }

  function badge(label, value) {
    return el('span', { class: 'badge' }, `${label}: `, el('code', { text: value }));
  }

  function hasProp(entry, name) {
    return entry.groups.some((g) => g.props.some((p) => p.name === name));
  }

  function previewSection(entry) {
    const section = el('section', { class: 'section' }, el('h2', { class: 'section-title', text: 'Vista previa' }));
    const card = el('div', { class: `card ${entry.status !== 'supported' ? `card-${entry.status}` : ''}` });
    if (entry.status === 'unsupported') card.append(el('div', { class: 'banner banner-unsupported', text: UNSUPPORTED_BANNER }));
    if (entry.status === 'mock') card.append(el('div', { class: 'banner banner-mock', text: MOCK_BANNER }));

    const general = (entry.example && entry.example.general) || {};
    const local = { readonly: !!general.readonly, touched: false };
    const readonlyToggle = hasProp(entry, 'readonly') || entry.status === 'unsupported';
    const validationToggle = hasProp(entry, 'required');
    const body = el('div', { class: 'preview-body' });

    const draw = () => {
      body.innerHTML = '';
      const node = renderPreview(entry, { readonly: local.readonly });
      body.append(node);
      node.setTouched(local.touched);
    };

    if (readonlyToggle || validationToggle) {
      const toolbar = el('div', { class: 'preview-toolbar' });
      if (readonlyToggle) {
        const box = el('input', { type: 'checkbox', checked: local.readonly, onchange: (e) => { local.readonly = e.target.checked; draw(); } });
        toolbar.append(el('label', {}, box, 'Solo lectura'));
      }
      if (validationToggle) {
        const box = el('input', { type: 'checkbox', onchange: (e) => { local.touched = e.target.checked; body.firstChild.setTouched(local.touched); } });
        toolbar.append(el('label', {}, box, 'Mostrar validación'));
      }
      card.append(toolbar);
    }
    card.append(body);
    draw();
    section.append(card);
    return section;
  }

  function notesSection(entry) {
    const kind = entry.status === 'supported' ? 'info' : entry.status;
    return el('section', { class: 'section' },
      el('h2', { class: 'section-title', text: 'Notas del renderer (office)' }),
      el('div', { class: `callout callout-${kind}`, text: entry.rendererNotes || 'Sin notas.' }));
  }

  function propsTable(group) {
    const rows = group.props.map((prop) => el('tr', {},
      el('td', {}, el('code', { text: prop.name })),
      el('td', { text: prop.label || '' }),
      el('td', {}, el('span', { class: 'control-tag', text: prop.control || '—' }),
        Array.isArray(prop.options) && prop.options.length ? el('div', { class: 'opt-chips' }, prop.options.map((o) => el('span', { class: 'opt-chip', text: typeof o === 'object' ? JSON.stringify(o) : String(o) }))) : null),
      el('td', {}, el('code', { text: formatDefault(prop.default) })),
      el('td', { class: 'muted', text: prop.helper || '' })));
    return el('div', { class: 'table-wrap' }, el('table', { class: 'props' },
      el('thead', {}, el('tr', {}, ['Propiedad', 'Etiqueta', 'Control', 'Por defecto', 'Descripción'].map((h) => el('th', { text: h })))),
      el('tbody', {}, rows)));
  }

  function propsSection(entry) {
    const section = el('section', { class: 'section' }, el('h2', { class: 'section-title', text: 'Propiedades (generador)' }));
    entry.groups.forEach((group) => {
      const isValidation = group.name === 'validations';
      section.append(el('div', { class: 'group-block' },
        el('h3', { class: 'group-title' }, group.label || group.name, el('code', { class: 'tag', text: isValidation ? 'validate' : group.name })),
        isValidation ? el('div', { class: 'callout callout-note', text: VALIDATE_NOTE }) : null,
        propsTable(group)));
    });
    return section;
  }

  function minimalExample(example) {
    const general = example.general || {};
    return { label: example.label, key: example.key, type: example.type, typeComponent: example.typeComponent,
      general: { label: general.label, description: general.description }, validate: example.validate || {},
      layout: { row: (example.layout || {}).row }, id: example.id };
  }

  function codeBlock(json, small) {
    const text = JSON.stringify(json, null, 2);
    const button = el('button', { type: 'button', class: 'btn btn-sm copy-btn', onclick: () => copyText(text, button) }, 'Copiar');
    return el('div', { class: `code-block${small ? ' small' : ''}` }, button, el('pre', {}, el('code', { text })));
  }

  function jsonSection(entry) {
    return el('section', { class: 'section' },
      el('h2', { class: 'section-title', text: 'JSON de ejemplo' }),
      codeBlock(entry.example, false),
      el('h3', { class: 'subheading', text: 'Mínimo requerido' }),
      codeBlock(minimalExample(entry.example || {}), true));
  }

  function renderComponent(entry) {
    const header = el('header', { class: 'page-header' },
      el('h1', { text: entry.label }),
      el('div', { class: 'badges' },
        badge('typeComponent', entry.type),
        badge('type (form-js)', entry.formJsType || '—'),
        entry.officeKey && entry.officeKey !== entry.type ? badge('clave office', entry.officeKey) : null,
        statusPill(entry.status)));
    return [header, previewSection(entry), notesSection(entry), propsSection(entry), jsonSection(entry)];
  }

  /* ---------------------------------------------------------------- Full form view */

  function formEntries() {
    const visible = CATALOG.filter((e) => e.status === 'supported' || e.status === 'mock');
    const inputs = visible.filter((e) => e.groupType === 'input');
    const others = visible.filter((e) => e.groupType !== 'input' && e.type !== 'submit');
    const submit = visible.filter((e) => e.type === 'submit');
    return inputs.concat(others, submit);
  }

  function renderFormView() {
    const previews = [];
    const output = el('div', { class: 'code-block', hidden: true });
    const stack = el('div', { class: 'form-stack' });

    const collect = () => {
      const values = {};
      previews.forEach(({ entry, node }) => {
        node.setTouched(true);
        const value = node.getValue();
        if (value !== undefined) values[entry.example.key] = value;
      });
      output.innerHTML = '';
      output.hidden = false;
      output.append(codeBlock(values, false));
      output.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    };

    formEntries().forEach((entry) => {
      const node = renderPreview(entry, { onSubmit: collect });
      previews.push({ entry, node });
      const row = el('div', { class: 'form-row' },
        el('div', { class: 'form-row-meta' }, el('span', { class: `dot dot-${entry.status}` }), entry.type, entry.example.key ? `· key: ${entry.example.key}` : null),
        node);
      if (entry.type === 'submit') row.classList.add('form-submit-row');
      stack.append(row);
    });

    const header = el('header', { class: 'page-header' },
      el('h1', { text: 'Formulario completo' }),
      el('p', { class: 'field-help', text: `Todos los componentes soportados y mockup apilados en una sola fila cada uno (${previews.length} campos). Al enviar se marcan como tocados y se muestran los valores.` }));
    const card = el('div', { class: 'card' }, el('div', { class: 'preview-body' }, stack));
    const result = el('section', { class: 'section' }, el('h2', { class: 'section-title', text: 'Valores actuales' }), output);
    document.title = 'Formulario completo · Campos dinámicos';
    return [header, el('section', { class: 'section' }, el('h2', { class: 'section-title', text: 'Vista previa' }), card), result];
  }

  /* ---------------------------------------------------------------- Sidebar */

  function matches(entry) {
    if (state.status !== 'all' && entry.status !== state.status) return false;
    if (!state.query) return true;
    const q = state.query.toLowerCase();
    return [entry.type, entry.label, entry.groupType, GROUP_LABELS[entry.groupType]].some((v) => String(v || '').toLowerCase().includes(q));
  }

  function filteredEntries() {
    return CATALOG.filter(matches);
  }

  function renderChips() {
    const container = document.getElementById('status-chips');
    container.innerHTML = '';
    STATUS_ORDER.forEach((status) => {
      const count = status === 'all' ? CATALOG.length : CATALOG.filter((e) => e.status === status).length;
      if (count === 0) return;
      container.append(el('button', { type: 'button', class: 'chip', 'aria-pressed': String(state.status === status), onclick: () => { state.status = status; renderSidebar(); } },
        status === 'all' ? 'Todos' : STATUS_LABELS[status], el('span', { class: 'count', text: count })));
    });
  }

  function navItem(entry) {
    return el('button', { type: 'button', class: 'nav-item', 'data-route': entry.type, 'aria-current': String(state.selected === entry.type), onclick: () => select(entry.type) },
      el('span', { class: `dot dot-${entry.status}`, title: STATUS_LABELS[entry.status] }),
      el('span', {}, el('span', { class: 'label', text: entry.label }), el('span', { class: 'type', text: entry.type })));
  }

  function renderNav() {
    const nav = document.getElementById('nav');
    nav.innerHTML = '';
    nav.append(el('button', { type: 'button', class: 'nav-item form-link', 'data-route': FORM_ROUTE, 'aria-current': String(state.selected === FORM_ROUTE), onclick: () => select(FORM_ROUTE) },
      el('span', { class: 'label', text: 'Formulario completo' })));
    const entries = filteredEntries();
    if (!entries.length) { nav.append(el('div', { class: 'nav-empty', text: 'Sin resultados para el filtro actual.' })); return; }
    const groups = [...new Set(entries.map((e) => e.groupType))].sort((a, b) => GROUP_ORDER.indexOf(a) - GROUP_ORDER.indexOf(b));
    groups.forEach((group) => {
      nav.append(el('div', { class: 'nav-group-label', text: GROUP_LABELS[group] || group }));
      entries.filter((e) => e.groupType === group).forEach((e) => nav.append(navItem(e)));
    });
  }

  function renderSidebar() {
    document.getElementById('sidebar-count').textContent = `${CATALOG.length} componentes`;
    renderChips();
    renderNav();
  }

  /* ---------------------------------------------------------------- Routing + main render */

  function renderMain() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    if (state.selected === FORM_ROUTE) { content.append(...renderFormView()); return; }
    const entry = CATALOG.find((e) => e.type === state.selected);
    if (!entry) { content.append(el('p', { class: 'nav-empty', text: 'Componente no encontrado.' })); return; }
    content.append(...renderComponent(entry));
    document.title = `${entry.label} · Campos dinámicos`;
  }

  function select(route, options) {
    state.selected = route;
    const hash = `#${route}`;
    if (location.hash !== hash) {
      if (options && options.replace) history.replaceState(null, '', hash); else location.hash = route;
    }
    renderNav();
    renderMain();
    document.getElementById('sidebar-body').classList.remove('open');
    document.getElementById('sidebar-toggle').setAttribute('aria-expanded', 'false');
    document.getElementById('main').scrollTo({ top: 0 });
    window.scrollTo({ top: 0 });
  }

  function routeFromHash() {
    const hash = decodeURIComponent(location.hash.replace(/^#/, ''));
    if (hash === FORM_ROUTE || CATALOG.some((e) => e.type === hash)) return hash;
    const first = CATALOG.find((e) => e.status === 'supported') || CATALOG[0];
    return first ? first.type : FORM_ROUTE;
  }

  function moveSelection(delta) {
    const routes = [FORM_ROUTE].concat(filteredEntries().map((e) => e.type));
    const index = routes.indexOf(state.selected);
    const next = Math.min(routes.length - 1, Math.max(0, (index < 0 ? 0 : index) + delta));
    if (routes[next] && routes[next] !== state.selected) {
      select(routes[next]);
      const button = document.querySelector(`.nav-item[data-route="${CSS.escape(routes[next])}"]`);
      if (button) button.scrollIntoView({ block: 'nearest' });
    }
  }

  function isTypingTarget(target) {
    if (!target || !(target instanceof Element)) return false;
    return target.closest('input, textarea, select, [contenteditable="true"], .modal') !== null;
  }

  function bindEvents() {
    document.getElementById('search').addEventListener('input', (event) => { state.query = event.target.value.trim(); renderNav(); });
    document.getElementById('sidebar-toggle').addEventListener('click', (event) => {
      const body = document.getElementById('sidebar-body');
      const open = body.classList.toggle('open');
      event.currentTarget.setAttribute('aria-expanded', String(open));
    });
    window.addEventListener('hashchange', () => { const route = routeFromHash(); if (route !== state.selected) select(route, { replace: true }); });
    document.addEventListener('keydown', (event) => {
      if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') return;
      if (isTypingTarget(event.target)) return;
      event.preventDefault();
      moveSelection(event.key === 'ArrowDown' ? 1 : -1);
    });
  }

  function init() {
    if (!CATALOG.length) {
      document.getElementById('content').append(el('p', { class: 'nav-empty', text: 'No se encontró window.FIELD_CATALOG.' }));
      return;
    }
    renderSidebar();
    bindEvents();
    select(routeFromHash(), { replace: true });
  }

  document.addEventListener('DOMContentLoaded', init);
})();
