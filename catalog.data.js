// Auto-generated from GET /components of the forms generator API, cross-checked
// against what the office renderer (dynamic-form) actually reads.
// Regenerate with build-catalog.js instead of editing by hand.
window.FIELD_CATALOG = [
  {
    "type": "checkbox",
    "label": "Checkbox Simple",
    "groupType": "input",
    "formJsType": "checkbox",
    "officeKey": "checkbox",
    "status": "supported",
    "rendererNotes": "Soporte completo: label, description y readonly.",
    "groups": [
      {
        "name": "general",
        "label": "General",
        "props": [
          {
            "name": "label",
            "label": "Etiqueta del campo",
            "control": "text",
            "helper": "Texto que aparecerá junto al checkbox",
            "default": null,
            "placeholder": "Ejm: Acepto los términos y condiciones"
          },
          {
            "name": "description",
            "label": "Descripción del campo",
            "control": "text",
            "helper": "Texto explicativo adicional",
            "default": "",
            "placeholder": "Ejm: Debe aceptar para continuar"
          },
          {
            "name": "readonly",
            "label": "Solo lectura",
            "control": "checkbox",
            "helper": "Si está marcado, no se puede cambiar el estado",
            "default": false,
            "placeholder": ""
          }
        ]
      },
      {
        "name": "validations",
        "label": "Validaciones",
        "props": [
          {
            "name": "required",
            "label": "Campo requerido",
            "control": "checkbox",
            "helper": "El checkbox debe estar marcado obligatoriamente",
            "default": false,
            "placeholder": ""
          }
        ]
      }
    ],
    "example": {
      "label": "Acepto los términos y condiciones",
      "key": "Acepto_los_t_rminos_y_condiciones",
      "type": "checkbox",
      "typeComponent": "checkbox",
      "idVariable": "6a29cd082cafb0b69561000",
      "general": {
        "label": "Acepto los términos y condiciones",
        "description": "Debe aceptar para continuar",
        "readonly": false
      },
      "validate": {
        "required": true
      },
      "layout": {
        "row": "Row_checkbox"
      },
      "id": "Field_checkbox",
      "attributes": {
        "general": {
          "label": "Acepto los términos y condiciones",
          "description": "Debe aceptar para continuar",
          "readonly": false
        },
        "validation": {
          "required": true
        }
      },
      "properties": {},
      "disabled": false,
      "readonly": false
    }
  },
  {
    "type": "checkboxList",
    "label": "Lista de Checkboxes",
    "groupType": "input",
    "formJsType": "checklist",
    "officeKey": "checkboxList",
    "status": "supported",
    "rendererNotes": "values se renombra a options ({label, value}). numColumns no se pasa al plugin. Además del valor, emite la clave <key>_value con las etiquetas.",
    "groups": [
      {
        "name": "general",
        "label": "General",
        "props": [
          {
            "name": "label",
            "label": "Etiqueta del campo",
            "control": "text",
            "helper": "Nombre descriptivo que verá el usuario",
            "default": null,
            "placeholder": "Ejm: Seleccione sus intereses"
          },
          {
            "name": "description",
            "label": "Descripción del campo",
            "control": "text",
            "helper": "Texto explicativo adicional",
            "default": "",
            "placeholder": "Ejm: Puede seleccionar múltiples opciones"
          },
          {
            "name": "readonly",
            "label": "Solo lectura",
            "control": "checkbox",
            "helper": "Si está marcado, no se pueden cambiar las opciones",
            "default": false,
            "placeholder": ""
          },
          {
            "name": "values",
            "label": "Opciones disponibles",
            "control": "options",
            "helper": "Configure las opciones que aparecerán como checkboxes",
            "default": null,
            "placeholder": ""
          },
          {
            "name": "numColumns",
            "label": "Número de columnas",
            "control": "number",
            "helper": "Cantidad de columnas para organizar las opciones",
            "default": 1,
            "placeholder": "Ejm: 3"
          }
        ]
      },
      {
        "name": "validations",
        "label": "Validaciones",
        "props": [
          {
            "name": "required",
            "label": "Campo requerido",
            "control": "checkbox",
            "helper": "Debe seleccionarse al menos una opción",
            "default": false,
            "placeholder": ""
          }
        ]
      }
    ],
    "example": {
      "label": "Servicios requeridos",
      "key": "Servicios_requeridos",
      "type": "checklist",
      "typeComponent": "checkboxList",
      "idVariable": "6a29cd082cafb0b69561001",
      "general": {
        "label": "Servicios requeridos",
        "description": "Seleccione uno o varios",
        "readonly": false,
        "numColumns": 1,
        "options": [
          {
            "label": "Acueducto",
            "value": "acueducto"
          },
          {
            "label": "Alcantarillado",
            "value": "alcantarillado"
          },
          {
            "label": "Aseo",
            "value": "aseo"
          }
        ]
      },
      "validate": {
        "required": true
      },
      "layout": {
        "row": "Row_checkboxlist"
      },
      "id": "Field_checkboxlist",
      "attributes": {
        "general": {
          "label": "Servicios requeridos",
          "description": "Seleccione uno o varios",
          "readonly": false,
          "numColumns": 1,
          "options": [
            {
              "label": "Acueducto",
              "value": "acueducto"
            },
            {
              "label": "Alcantarillado",
              "value": "alcantarillado"
            },
            {
              "label": "Aseo",
              "value": "aseo"
            }
          ]
        },
        "validation": {
          "required": true
        }
      },
      "properties": {},
      "disabled": false,
      "readonly": false
    }
  },
  {
    "type": "currency",
    "label": "Moneda",
    "groupType": "input",
    "formJsType": "number",
    "officeKey": "currency",
    "status": "supported",
    "rendererNotes": "prefix, suffix, thousandSeparator y decimalDigits se aplican. mask, keepMask y decimalMarker se ignoran. min y max sí llegan a validate.",
    "groups": [
      {
        "name": "general",
        "label": "General",
        "props": [
          {
            "name": "label",
            "label": "Etiqueta del campo",
            "control": "text",
            "helper": "Nombre descriptivo que verá el usuario",
            "default": null,
            "placeholder": "Ejm: Precio del producto"
          },
          {
            "name": "description",
            "label": "Descripción del campo",
            "control": "text",
            "helper": "Texto que aparecerá como placeholder",
            "default": "",
            "placeholder": "Ejm: Ingrese el precio en pesos"
          },
          {
            "name": "readonly",
            "label": "Solo lectura",
            "control": "checkbox",
            "helper": "Si está marcado, el campo no se puede editar",
            "default": false,
            "placeholder": ""
          },
          {
            "name": "suffix",
            "label": "Sufijo",
            "control": "text",
            "helper": "Texto que aparece al final del campo",
            "default": "",
            "placeholder": "Ejm: COP, USD, EUR"
          },
          {
            "name": "prefix",
            "label": "Prefijo",
            "control": "text",
            "helper": "Texto que aparece al inicio del campo",
            "default": "$",
            "placeholder": "Ejm: $, €, £"
          },
          {
            "name": "thousandSeparator",
            "label": "Separador de miles",
            "control": "checkbox",
            "helper": "Agregar separador de miles (1,000.00)",
            "default": true,
            "placeholder": ""
          },
          {
            "name": "mask",
            "label": "Máscara de entrada",
            "control": "text",
            "helper": "Patrón para el formato del campo",
            "default": "",
            "placeholder": "Ejm: 999,999.99"
          },
          {
            "name": "keepMask",
            "label": "Mantener máscara",
            "control": "checkbox",
            "helper": "Conservar la máscara en el valor final",
            "default": false,
            "placeholder": ""
          },
          {
            "name": "decimalDigits",
            "label": "Dígitos decimales",
            "control": "number",
            "helper": "Número de decimales para la moneda",
            "default": 2,
            "placeholder": "Ejm: 2"
          },
          {
            "name": "decimalMarker",
            "label": "Marcador decimal",
            "control": "text",
            "helper": "Símbolo para separar decimales",
            "default": ".",
            "placeholder": "Ejm: . o ,"
          }
        ]
      },
      {
        "name": "validations",
        "label": "Validaciones",
        "props": [
          {
            "name": "required",
            "label": "Campo requerido",
            "control": "checkbox",
            "helper": "El campo debe completarse obligatoriamente",
            "default": false,
            "placeholder": ""
          },
          {
            "name": "min",
            "label": "Valor mínimo",
            "control": "number",
            "helper": "Monto mínimo permitido",
            "default": null,
            "placeholder": "Ejm: 0"
          },
          {
            "name": "max",
            "label": "Valor máximo",
            "control": "number",
            "helper": "Monto máximo permitido",
            "default": null,
            "placeholder": "Ejm: 1000000"
          },
          {
            "name": "pattern",
            "label": "Patrón de validación",
            "control": "text",
            "helper": "Expresión regular para validar el formato",
            "default": "",
            "placeholder": "Ejm: ^\\d+(\\.\\d{1,2})?$"
          }
        ]
      }
    ],
    "example": {
      "label": "Valor del trámite",
      "key": "Valor_del_tr_mite",
      "type": "number",
      "typeComponent": "currency",
      "idVariable": "6a29cd082cafb0b69561002",
      "general": {
        "label": "Valor del trámite",
        "description": "Valor en pesos",
        "readonly": false,
        "suffix": "",
        "prefix": "$",
        "thousandSeparator": true,
        "mask": "",
        "keepMask": false,
        "decimalDigits": 2,
        "decimalMarker": "."
      },
      "validate": {
        "required": true,
        "min": 0
      },
      "layout": {
        "row": "Row_currency"
      },
      "id": "Field_currency",
      "attributes": {
        "general": {
          "label": "Valor del trámite",
          "description": "Valor en pesos",
          "readonly": false,
          "suffix": "",
          "prefix": "$",
          "thousandSeparator": true,
          "mask": "",
          "keepMask": false,
          "decimalDigits": 2,
          "decimalMarker": "."
        },
        "validation": {
          "required": true,
          "min": 0,
          "max": null,
          "pattern": ""
        }
      },
      "properties": {},
      "disabled": false,
      "readonly": false
    }
  },
  {
    "type": "datepicker",
    "label": "Fecha",
    "groupType": "input",
    "formJsType": "datetime",
    "officeKey": "datepicker",
    "status": "supported",
    "rendererNotes": "readonly no se aplica (el plugin lee fieldInfo.general.readonly, que siempre es undefined). Valor en formato fecha.",
    "groups": [
      {
        "name": "general",
        "label": "General",
        "props": [
          {
            "name": "label",
            "label": "Etiqueta del campo",
            "control": "text",
            "helper": "Nombre descriptivo que verá el usuario",
            "default": null,
            "placeholder": "Ejm: Fecha de nacimiento"
          },
          {
            "name": "dateLabel",
            "label": "Etiqueta específica de fecha",
            "control": "text",
            "helper": "Etiqueta alternativa específica para fecha (opcional)",
            "default": "",
            "placeholder": "Ejm: Seleccione la fecha"
          },
          {
            "name": "description",
            "label": "Descripción del campo",
            "control": "text",
            "helper": "Texto que aparecerá como placeholder",
            "default": "",
            "placeholder": "Ejm: Seleccione su fecha de nacimiento"
          },
          {
            "name": "readonly",
            "label": "Solo lectura",
            "control": "checkbox",
            "helper": "Si está marcado, el campo no se puede editar",
            "default": false,
            "placeholder": ""
          }
        ]
      },
      {
        "name": "validations",
        "label": "Validaciones",
        "props": [
          {
            "name": "required",
            "label": "Campo requerido",
            "control": "checkbox",
            "helper": "Debe seleccionarse una fecha obligatoriamente",
            "default": false,
            "placeholder": ""
          }
        ]
      }
    ],
    "example": {
      "label": "Fecha de radicación",
      "key": "Fecha_de_radicaci_n",
      "type": "datetime",
      "typeComponent": "datepicker",
      "idVariable": "6a29cd082cafb0b69561003",
      "general": {
        "label": "Fecha de radicación",
        "dateLabel": "Fecha",
        "description": "Seleccione una fecha",
        "readonly": false
      },
      "validate": {
        "required": true
      },
      "layout": {
        "row": "Row_datepicker"
      },
      "id": "Field_datepicker",
      "attributes": {
        "general": {
          "label": "Fecha de radicación",
          "dateLabel": "Fecha",
          "description": "Seleccione una fecha",
          "readonly": false
        },
        "validation": {
          "required": true
        }
      },
      "properties": {},
      "disabled": false,
      "readonly": false
    }
  },
  {
    "type": "datetimepicker",
    "label": "Hora",
    "groupType": "input",
    "formJsType": "datetime",
    "officeKey": "datetimepicker",
    "status": "supported",
    "rendererNotes": "Es un selector de hora (subtype time), no de fecha y hora. Mismo problema de readonly que datepicker.",
    "groups": [
      {
        "name": "general",
        "label": "General",
        "props": [
          {
            "name": "label",
            "label": "Etiqueta del campo",
            "control": "text",
            "helper": "Nombre descriptivo que verá el usuario",
            "default": null,
            "placeholder": "Ejm: Fecha y hora de la cita"
          },
          {
            "name": "timeLabel",
            "label": "Etiqueta específica de fecha y hora",
            "control": "text",
            "helper": "Etiqueta alternativa específica para fecha y hora (opcional)",
            "default": "",
            "placeholder": "Ejm: Seleccione fecha y hora"
          },
          {
            "name": "description",
            "label": "Descripción del campo",
            "control": "text",
            "helper": "Texto que aparecerá como placeholder",
            "default": "",
            "placeholder": "Ejm: Seleccione la fecha y hora de su cita"
          },
          {
            "name": "readonly",
            "label": "Solo lectura",
            "control": "checkbox",
            "helper": "Si está marcado, el campo no se puede editar",
            "default": false,
            "placeholder": ""
          }
        ]
      },
      {
        "name": "validations",
        "label": "Validaciones",
        "props": [
          {
            "name": "required",
            "label": "Campo requerido",
            "control": "checkbox",
            "helper": "Debe seleccionarse una fecha y hora obligatoriamente",
            "default": false,
            "placeholder": ""
          }
        ]
      }
    ],
    "example": {
      "label": "Hora de la cita",
      "key": "Hora_de_la_cita",
      "type": "datetime",
      "typeComponent": "datetimepicker",
      "idVariable": "6a29cd082cafb0b69561004",
      "general": {
        "label": "Hora de la cita",
        "timeLabel": "Hora",
        "description": "Seleccione una hora",
        "readonly": false
      },
      "validate": {
        "required": false
      },
      "layout": {
        "row": "Row_datetimepicker"
      },
      "id": "Field_datetimepicker",
      "attributes": {
        "general": {
          "label": "Hora de la cita",
          "timeLabel": "Hora",
          "description": "Seleccione una hora",
          "readonly": false
        },
        "validation": {
          "required": false
        }
      },
      "properties": {},
      "disabled": false,
      "readonly": false
    }
  },
  {
    "type": "digit",
    "label": "Dígito",
    "groupType": "input",
    "formJsType": "number",
    "officeKey": "digit",
    "status": "supported",
    "rendererNotes": "prefix, suffix y decimalDigits se aplican. thousandSeparator, mask, keepMask y decimalMarker se ignoran.",
    "groups": [
      {
        "name": "general",
        "label": "General",
        "props": [
          {
            "name": "label",
            "label": "Etiqueta del campo",
            "control": "text",
            "helper": "Nombre descriptivo que verá el usuario",
            "default": null,
            "placeholder": "Ejm: Código numérico"
          },
          {
            "name": "description",
            "label": "Descripción del campo",
            "control": "text",
            "helper": "Texto que aparecerá como placeholder",
            "default": "",
            "placeholder": "Ejm: Ingrese el código de 6 dígitos"
          },
          {
            "name": "readonly",
            "label": "Solo lectura",
            "control": "checkbox",
            "helper": "Si está marcado, el campo no se puede editar",
            "default": false,
            "placeholder": ""
          },
          {
            "name": "suffix",
            "label": "Sufijo",
            "control": "text",
            "helper": "Texto que aparece al final del campo",
            "default": "",
            "placeholder": "Ejm: dígito, código"
          },
          {
            "name": "prefix",
            "label": "Prefijo",
            "control": "text",
            "helper": "Texto que aparece al inicio del campo",
            "default": "",
            "placeholder": "Ejm: #, COD-"
          },
          {
            "name": "thousandSeparator",
            "label": "Separador de miles",
            "control": "checkbox",
            "helper": "Agregar separador de miles (1,000)",
            "default": false,
            "placeholder": ""
          },
          {
            "name": "mask",
            "label": "Máscara de entrada",
            "control": "text",
            "helper": "Patrón para el formato del campo",
            "default": "",
            "placeholder": "Ejm: 999-999"
          },
          {
            "name": "keepMask",
            "label": "Mantener máscara",
            "control": "checkbox",
            "helper": "Conservar la máscara en el valor final",
            "default": false,
            "placeholder": ""
          },
          {
            "name": "decimalDigits",
            "label": "Dígitos decimales",
            "control": "number",
            "helper": "Número de decimales permitidos",
            "default": 0,
            "placeholder": "Ejm: 0"
          },
          {
            "name": "decimalMarker",
            "label": "Marcador decimal",
            "control": "text",
            "helper": "Símbolo para separar decimales",
            "default": ".",
            "placeholder": "Ejm: . o ,"
          }
        ]
      },
      {
        "name": "validations",
        "label": "Validaciones",
        "props": [
          {
            "name": "required",
            "label": "Campo requerido",
            "control": "checkbox",
            "helper": "El campo debe completarse obligatoriamente",
            "default": false,
            "placeholder": ""
          },
          {
            "name": "minLength",
            "label": "Longitud mínima",
            "control": "number",
            "helper": "Número mínimo de dígitos",
            "default": null,
            "placeholder": "Ejm: 4"
          },
          {
            "name": "maxLength",
            "label": "Longitud máxima",
            "control": "number",
            "helper": "Número máximo de dígitos",
            "default": null,
            "placeholder": "Ejm: 8"
          },
          {
            "name": "pattern",
            "label": "Patrón de validación",
            "control": "text",
            "helper": "Expresión regular para validar el formato",
            "default": "",
            "placeholder": "Ejm: ^\\d{6}$"
          }
        ]
      }
    ],
    "example": {
      "label": "Número de documento",
      "key": "N_mero_de_documento",
      "type": "number",
      "typeComponent": "digit",
      "idVariable": "6a29cd082cafb0b69561005",
      "general": {
        "label": "Número de documento",
        "description": "Sin puntos ni espacios",
        "readonly": false,
        "suffix": "",
        "prefix": "",
        "thousandSeparator": false,
        "mask": "",
        "keepMask": false,
        "decimalDigits": 0,
        "decimalMarker": "."
      },
      "validate": {
        "required": true,
        "minLength": 6,
        "maxLength": 12
      },
      "layout": {
        "row": "Row_digit"
      },
      "id": "Field_digit",
      "attributes": {
        "general": {
          "label": "Número de documento",
          "description": "Sin puntos ni espacios",
          "readonly": false,
          "suffix": "",
          "prefix": "",
          "thousandSeparator": false,
          "mask": "",
          "keepMask": false,
          "decimalDigits": 0,
          "decimalMarker": "."
        },
        "validation": {
          "required": true,
          "minLength": 6,
          "maxLength": 12,
          "pattern": ""
        }
      },
      "properties": {},
      "disabled": false,
      "readonly": false
    }
  },
  {
    "type": "editor",
    "label": "Editor",
    "groupType": "editor",
    "formJsType": "textfield",
    "officeKey": "editor",
    "status": "supported",
    "rendererNotes": "El plugin lee label, placeholder, readonly, rows y required/maxLength, aunque el generador solo expone downloadTemplate, que se ignora.",
    "groups": [
      {
        "name": "general",
        "label": "General",
        "props": [
          {
            "name": "downloadTemplate",
            "label": "Plantilla de descarga",
            "control": "text",
            "helper": "URL o ruta de la plantilla para descargar",
            "default": "",
            "placeholder": "Ejm: /templates/document-template.docx"
          }
        ]
      }
    ],
    "example": {
      "label": "Contenido del documento",
      "key": "Contenido_del_documento",
      "type": "textfield",
      "typeComponent": "editor",
      "idVariable": "6a29cd082cafb0b69561006",
      "general": {
        "downloadTemplate": false,
        "label": "Contenido del documento"
      },
      "validate": {},
      "layout": {
        "row": "Row_editor"
      },
      "id": "Field_editor",
      "attributes": {
        "general": {
          "downloadTemplate": false,
          "label": "Contenido del documento"
        },
        "validation": {}
      },
      "properties": {},
      "disabled": false,
      "readonly": false
    }
  },
  {
    "type": "email",
    "label": "Email",
    "groupType": "input",
    "formJsType": "textfield",
    "officeKey": "email",
    "status": "supported",
    "rendererNotes": "No se valida el formato de email: el validador solo aplica con validationType=\"email\", que el generador no emite. Solo se aplica required.",
    "groups": [
      {
        "name": "general",
        "label": "General",
        "props": [
          {
            "name": "label",
            "label": "Etiqueta del campo",
            "control": "text",
            "helper": "Nombre descriptivo que verá el usuario",
            "default": null,
            "placeholder": "Ejm: Correo electrónico"
          },
          {
            "name": "description",
            "label": "Descripción del campo",
            "control": "text",
            "helper": "Texto que aparecerá como placeholder",
            "default": "",
            "placeholder": "Ejm: Ingrese su correo electrónico"
          },
          {
            "name": "readonly",
            "label": "Solo lectura",
            "control": "checkbox",
            "helper": "Si está marcado, el campo no se puede editar",
            "default": false,
            "placeholder": ""
          }
        ]
      },
      {
        "name": "validations",
        "label": "Validaciones",
        "props": [
          {
            "name": "required",
            "label": "Campo requerido",
            "control": "checkbox",
            "helper": "El campo debe completarse obligatoriamente",
            "default": false,
            "placeholder": ""
          }
        ]
      }
    ],
    "example": {
      "label": "Correo electrónico",
      "key": "Correo_electr_nico",
      "type": "textfield",
      "typeComponent": "email",
      "idVariable": "6a29cd082cafb0b69561007",
      "general": {
        "label": "Correo electrónico",
        "description": "nombre@dominio.com",
        "readonly": false
      },
      "validate": {
        "required": true
      },
      "layout": {
        "row": "Row_email"
      },
      "id": "Field_email",
      "attributes": {
        "general": {
          "label": "Correo electrónico",
          "description": "nombre@dominio.com",
          "readonly": false
        },
        "validation": {
          "required": true
        }
      },
      "properties": {},
      "disabled": false,
      "readonly": false
    }
  },
  {
    "type": "file-upload",
    "label": "Subir Archivos",
    "groupType": "input",
    "formJsType": "filepicker",
    "officeKey": "uploadFile",
    "status": "supported",
    "rendererNotes": "Se renombra a uploadFile en el office. readonly=false muestra la caja de carga; readonly=true muestra el visor del archivo. allowExtensions se ignora: el validador lee validate/properties.",
    "groups": [
      {
        "name": "general",
        "label": "General",
        "props": [
          {
            "name": "label",
            "label": "Etiqueta del campo",
            "control": "text",
            "helper": "Nombre descriptivo que verá el usuario",
            "default": null,
            "placeholder": "Ejm: Adjuntar documento"
          },
          {
            "name": "description",
            "label": "Descripción del campo",
            "control": "text",
            "helper": "Texto explicativo sobre el archivo a subir",
            "default": "",
            "placeholder": "Ejm: Seleccione el archivo a cargar"
          },
          {
            "name": "readonly",
            "label": "Solo lectura",
            "control": "checkbox",
            "helper": "Si está marcado, el campo no se puede editar",
            "default": false,
            "placeholder": ""
          },
          {
            "name": "allowExtensions",
            "label": "Extensiones permitidas",
            "control": "text",
            "helper": "Extensiones de archivos permitidos (separados por coma)",
            "default": "",
            "placeholder": "Ejm: .pdf,.doc,.docx,.jpg,.png"
          }
        ]
      },
      {
        "name": "validations",
        "label": "Validaciones",
        "props": [
          {
            "name": "required",
            "label": "Campo requerido",
            "control": "checkbox",
            "helper": "Debe subirse un archivo obligatoriamente",
            "default": false,
            "placeholder": ""
          }
        ]
      }
    ],
    "example": {
      "label": "Documento de identidad",
      "key": "Documento_de_identidad",
      "type": "filepicker",
      "typeComponent": "file-upload",
      "idVariable": "6a29cd082cafb0b69561008",
      "general": {
        "label": "Documento de identidad",
        "description": "PDF o imagen, máximo 5 MB",
        "readonly": false,
        "allowExtensions": "pdf,jpg,png"
      },
      "validate": {
        "required": true
      },
      "layout": {
        "row": "Row_file_upload"
      },
      "id": "Field_file_upload",
      "attributes": {
        "general": {
          "label": "Documento de identidad",
          "description": "PDF o imagen, máximo 5 MB",
          "readonly": false,
          "allowExtensions": "pdf,jpg,png"
        },
        "validation": {
          "required": true
        }
      },
      "properties": {},
      "disabled": false,
      "readonly": false
    }
  },
  {
    "type": "viewerFile",
    "label": "Ver Archivos",
    "groupType": "presentation",
    "formJsType": "textfield",
    "officeKey": "viewerFile",
    "status": "supported",
    "rendererNotes": "Lee label, description, sourceKey y behavior.showFileName. buttonText, emptyText, previewInline y allowDownload se ignoran.",
    "groups": [
      {
        "name": "general",
        "label": "General",
        "props": [
          {
            "name": "label",
            "label": "Etiqueta del campo",
            "control": "text",
            "helper": "Nombre descriptivo que verá el usuario",
            "default": null,
            "placeholder": "Ejm: Documento adjunto"
          },
          {
            "name": "sourceKey",
            "label": "Key del archivo a visualizar",
            "control": "text",
            "helper": "Key de la variable de tipo 'Subir Archivos' cuyo archivo se mostrará. Si se deja vacío, se usará la key de este mismo campo.",
            "default": "",
            "placeholder": "Ejm: KeyCedula"
          },
          {
            "name": "description",
            "label": "Descripción del campo",
            "control": "text",
            "helper": "Texto explicativo que acompaña al visor",
            "default": "",
            "placeholder": "Ejm: Haga clic para ver el documento"
          },
          {
            "name": "buttonText",
            "label": "Texto del enlace",
            "control": "text",
            "helper": "Texto del botón/enlace que abre el archivo",
            "default": "Ver Documento",
            "placeholder": "Ejm: Ver Documento"
          },
          {
            "name": "emptyText",
            "label": "Texto cuando no hay archivo",
            "control": "text",
            "helper": "Mensaje a mostrar si la variable no tiene valor",
            "default": "Sin archivo adjunto",
            "placeholder": "Ejm: Sin archivo adjunto"
          }
        ]
      },
      {
        "name": "behavior",
        "label": "Comportamiento",
        "props": [
          {
            "name": "previewInline",
            "label": "Previsualizar en línea",
            "control": "checkbox",
            "helper": "Si está marcado, los PDF e imágenes se abren en una ventana/modal en lugar de descargarse",
            "default": true,
            "placeholder": ""
          },
          {
            "name": "allowDownload",
            "label": "Permitir descarga",
            "control": "checkbox",
            "helper": "Muestra la opción de descargar el archivo en el equipo del usuario",
            "default": true,
            "placeholder": ""
          },
          {
            "name": "showFileName",
            "label": "Mostrar nombre del archivo",
            "control": "checkbox",
            "helper": "Muestra el nombre original del archivo junto al enlace",
            "default": true,
            "placeholder": ""
          }
        ]
      }
    ],
    "example": {
      "label": "Documento radicado",
      "key": "Documento_radicado",
      "type": "textfield",
      "typeComponent": "viewerFile",
      "idVariable": "6a29cd082cafb0b69561009",
      "general": {
        "label": "Documento radicado",
        "sourceKey": "documentoIdentidad",
        "description": "Archivo cargado por el solicitante",
        "buttonText": "Ver archivo",
        "emptyText": "Sin archivo"
      },
      "behavior": {
        "previewInline": true,
        "allowDownload": true,
        "showFileName": true
      },
      "validate": {},
      "layout": {
        "row": "Row_viewerfile"
      },
      "id": "Field_viewerfile",
      "attributes": {
        "general": {
          "label": "Documento radicado",
          "sourceKey": "documentoIdentidad",
          "description": "Archivo cargado por el solicitante",
          "buttonText": "Ver archivo",
          "emptyText": "Sin archivo"
        },
        "behavior": {
          "previewInline": true,
          "allowDownload": true,
          "showFileName": true
        },
        "validation": {}
      },
      "properties": {},
      "disabled": false,
      "readonly": false
    }
  },
  {
    "type": "location",
    "label": "Localización",
    "groupType": "input",
    "formJsType": "textfield",
    "officeKey": "location",
    "status": "supported",
    "rendererNotes": "Dos inputs numéricos (Latitud, Longitud) más un mapa Leaflet con OSM. Guarda la cadena \"lat,long\" en EPSG:9377 (metros). Problemas conocidos: en readonly sin valor rellena grados WGS84 que no pasan la validación, y al reabrir el mapa no reconvierte las coordenadas.",
    "groups": [
      {
        "name": "general",
        "label": "General",
        "props": [
          {
            "name": "label",
            "label": "Etiqueta del campo",
            "control": "text",
            "helper": "Nombre descriptivo que verá el usuario",
            "default": null,
            "placeholder": "Ejm: Seleccione su ubicación"
          },
          {
            "name": "description",
            "label": "Descripción del campo",
            "control": "text",
            "helper": "Texto explicativo sobre la ubicación",
            "default": "",
            "placeholder": "Ejm: Haga clic en el mapa para seleccionar su dirección"
          },
          {
            "name": "readonly",
            "label": "Solo lectura",
            "control": "checkbox",
            "helper": "Si está marcado, no se puede cambiar la ubicación",
            "default": false,
            "placeholder": ""
          }
        ]
      },
      {
        "name": "validations",
        "label": "Validaciones",
        "props": [
          {
            "name": "required",
            "label": "Campo requerido",
            "control": "checkbox",
            "helper": "Debe seleccionarse una ubicación obligatoriamente",
            "default": false,
            "placeholder": ""
          }
        ]
      }
    ],
    "example": {
      "label": "Ubicación del predio",
      "key": "Ubicaci_n_del_predio",
      "type": "textfield",
      "typeComponent": "location",
      "idVariable": "6a29cd082cafb0b69561010",
      "general": {
        "label": "Ubicación del predio",
        "description": "Seleccione el punto en el mapa",
        "readonly": false
      },
      "validate": {
        "required": true
      },
      "layout": {
        "row": "Row_location"
      },
      "id": "Field_location",
      "attributes": {
        "general": {
          "label": "Ubicación del predio",
          "description": "Seleccione el punto en el mapa",
          "readonly": false
        },
        "validation": {
          "required": true
        }
      },
      "properties": {},
      "disabled": false,
      "readonly": false
    }
  },
  {
    "type": "number",
    "label": "Número",
    "groupType": "input",
    "formJsType": "number",
    "officeKey": "number",
    "status": "supported",
    "rendererNotes": "No existe entrada number en el mapa de componentes del office; cae al plugin de texto con type=number. Funciona, pero sin formato numérico.",
    "groups": [
      {
        "name": "general",
        "label": "General",
        "props": [
          {
            "name": "label",
            "label": "Etiqueta del campo",
            "control": "text",
            "helper": "Nombre descriptivo que verá el usuario",
            "default": null,
            "placeholder": "Ejm: Edad"
          },
          {
            "name": "description",
            "label": "Descripción del campo",
            "control": "text",
            "helper": "Texto que aparecerá como placeholder",
            "default": "",
            "placeholder": "Ejm: Ingrese su edad"
          },
          {
            "name": "readonly",
            "label": "Solo lectura",
            "control": "checkbox",
            "helper": "Si está marcado, el campo no se puede editar",
            "default": false,
            "placeholder": ""
          }
        ]
      },
      {
        "name": "validations",
        "label": "Validaciones",
        "props": [
          {
            "name": "required",
            "label": "Campo requerido",
            "control": "checkbox",
            "helper": "El campo debe completarse obligatoriamente",
            "default": false,
            "placeholder": ""
          },
          {
            "name": "minLength",
            "label": "Longitud mínima",
            "control": "number",
            "helper": "Número mínimo de dígitos",
            "default": null,
            "placeholder": "Ejm: 1"
          },
          {
            "name": "maxLength",
            "label": "Longitud máxima",
            "control": "number",
            "helper": "Número máximo de dígitos",
            "default": null,
            "placeholder": "Ejm: 10"
          },
          {
            "name": "pattern",
            "label": "Patrón de validación",
            "control": "text",
            "helper": "Expresión regular para validar el formato",
            "default": "",
            "placeholder": "Ejm: ^[0-9]+$"
          }
        ]
      }
    ],
    "example": {
      "label": "Cantidad",
      "key": "Cantidad",
      "type": "number",
      "typeComponent": "number",
      "idVariable": "6a29cd082cafb0b69561011",
      "general": {
        "label": "Cantidad",
        "description": "Solo números enteros",
        "readonly": false
      },
      "validate": {
        "required": true
      },
      "layout": {
        "row": "Row_number"
      },
      "id": "Field_number",
      "attributes": {
        "general": {
          "label": "Cantidad",
          "description": "Solo números enteros",
          "readonly": false
        },
        "validation": {
          "required": true,
          "minLength": null,
          "maxLength": null,
          "pattern": ""
        }
      },
      "properties": {},
      "disabled": false,
      "readonly": false
    }
  },
  {
    "type": "tel",
    "label": "Teléfono",
    "groupType": "input",
    "formJsType": "textfield",
    "officeKey": "tel",
    "status": "supported",
    "rendererNotes": "phoneFormat solo cambia el placeholder, no valida el formato. minLength, maxLength y pattern sí aplican.",
    "groups": [
      {
        "name": "general",
        "label": "General",
        "props": [
          {
            "name": "label",
            "label": "Etiqueta del campo",
            "control": "text",
            "helper": "Nombre descriptivo que verá el usuario",
            "default": null,
            "placeholder": "Ejm: Número de teléfono"
          },
          {
            "name": "description",
            "label": "Descripción del campo",
            "control": "text",
            "helper": "Texto que aparecerá como placeholder",
            "default": "",
            "placeholder": "Ejm: Ingrese su número de teléfono"
          },
          {
            "name": "readonly",
            "label": "Solo lectura",
            "control": "checkbox",
            "helper": "Si está marcado, el campo no se puede editar",
            "default": false,
            "placeholder": ""
          }
        ]
      },
      {
        "name": "validations",
        "label": "Validaciones",
        "props": [
          {
            "name": "required",
            "label": "Campo requerido",
            "control": "checkbox",
            "helper": "El campo debe completarse obligatoriamente",
            "default": false,
            "placeholder": ""
          },
          {
            "name": "minLength",
            "label": "Longitud mínima",
            "control": "number",
            "helper": "Número mínimo de caracteres",
            "default": null,
            "placeholder": "Ejm: 10"
          },
          {
            "name": "maxLength",
            "label": "Longitud máxima",
            "control": "number",
            "helper": "Número máximo de caracteres",
            "default": null,
            "placeholder": "Ejm: 15"
          },
          {
            "name": "phoneFormat",
            "label": "Formato telefónico",
            "control": "select",
            "helper": "Formato de número telefónico según el país",
            "default": "colombia",
            "placeholder": "",
            "options": [
              "Colombia (+57)",
              "USA (+1)",
              "España (+34)",
              "Internacional"
            ]
          },
          {
            "name": "pattern",
            "label": "Patrón de validación",
            "control": "text",
            "helper": "Expresión regular para validar el formato",
            "default": "",
            "placeholder": "Ejm: ^\\+?[1-9]\\d{1,14}$"
          }
        ]
      }
    ],
    "example": {
      "label": "Teléfono de contacto",
      "key": "Tel_fono_de_contacto",
      "type": "textfield",
      "typeComponent": "tel",
      "idVariable": "6a29cd082cafb0b69561012",
      "general": {
        "label": "Teléfono de contacto",
        "description": "+57 300 000 0000",
        "readonly": false
      },
      "validate": {
        "required": true
      },
      "layout": {
        "row": "Row_tel"
      },
      "id": "Field_tel",
      "attributes": {
        "general": {
          "label": "Teléfono de contacto",
          "description": "+57 300 000 0000",
          "readonly": false
        },
        "validation": {
          "required": true,
          "minLength": null,
          "maxLength": null,
          "phoneFormat": "colombia",
          "pattern": ""
        }
      },
      "properties": {},
      "disabled": false,
      "readonly": false
    }
  },
  {
    "type": "radioList",
    "label": "Lista de Radios",
    "groupType": "input",
    "formJsType": "radio",
    "officeKey": "radioList",
    "status": "supported",
    "rendererNotes": "options y numColumns se aplican. Emite también <key>_value con la etiqueta seleccionada.",
    "groups": [
      {
        "name": "general",
        "label": "General",
        "props": [
          {
            "name": "label",
            "label": "Etiqueta del campo",
            "control": "text",
            "helper": "Nombre descriptivo que verá el usuario",
            "default": null,
            "placeholder": "Ejm: Seleccione su género"
          },
          {
            "name": "description",
            "label": "Descripción del campo",
            "control": "text",
            "helper": "Texto explicativo adicional",
            "default": "",
            "placeholder": "Ejm: Seleccione solo una opción"
          },
          {
            "name": "readonly",
            "label": "Solo lectura",
            "control": "checkbox",
            "helper": "Si está marcado, no se pueden cambiar las opciones",
            "default": false,
            "placeholder": ""
          },
          {
            "name": "values",
            "label": "Opciones disponibles",
            "control": "options",
            "helper": "Configure las opciones que aparecerán como radio buttons",
            "default": null,
            "placeholder": ""
          },
          {
            "name": "numColumns",
            "label": "Número de columnas",
            "control": "number",
            "helper": "Cantidad de columnas para organizar las opciones",
            "default": 1,
            "placeholder": "Ejm: 2"
          }
        ]
      },
      {
        "name": "validations",
        "label": "Validaciones",
        "props": [
          {
            "name": "required",
            "label": "Campo requerido",
            "control": "checkbox",
            "helper": "Debe seleccionarse una opción obligatoriamente",
            "default": false,
            "placeholder": ""
          }
        ]
      }
    ],
    "example": {
      "label": "Tipo de persona",
      "key": "Tipo_de_persona",
      "type": "radio",
      "typeComponent": "radioList",
      "idVariable": "6a29cd082cafb0b69561013",
      "general": {
        "label": "Tipo de persona",
        "description": "Seleccione una opción",
        "readonly": false,
        "numColumns": 2,
        "options": [
          {
            "label": "Natural",
            "value": "natural"
          },
          {
            "label": "Jurídica",
            "value": "juridica"
          }
        ]
      },
      "validate": {
        "required": true
      },
      "layout": {
        "row": "Row_radiolist"
      },
      "id": "Field_radiolist",
      "attributes": {
        "general": {
          "label": "Tipo de persona",
          "description": "Seleccione una opción",
          "readonly": false,
          "numColumns": 2,
          "options": [
            {
              "label": "Natural",
              "value": "natural"
            },
            {
              "label": "Jurídica",
              "value": "juridica"
            }
          ]
        },
        "validation": {
          "required": true
        }
      },
      "properties": {},
      "disabled": false,
      "readonly": false
    }
  },
  {
    "type": "recaptcha",
    "label": "Recaptcha",
    "groupType": "security",
    "formJsType": "textfield",
    "officeKey": "recaptcha",
    "status": "mock",
    "rendererNotes": "Mockup: muestra la configuración como texto y un checkbox \"No soy un robot\". No integra Google reCAPTCHA.",
    "groups": [
      {
        "name": "general",
        "label": "General",
        "props": [
          {
            "name": "siteKey",
            "label": "Clave del sitio",
            "control": "text",
            "helper": "Site key proporcionada por Google reCAPTCHA",
            "default": "",
            "placeholder": "Ejm: 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
          },
          {
            "name": "version",
            "label": "Versión de reCAPTCHA",
            "control": "select",
            "helper": "Versión del servicio reCAPTCHA a utilizar",
            "default": "v2",
            "placeholder": "",
            "options": [
              "reCAPTCHA v2",
              "reCAPTCHA v3"
            ]
          },
          {
            "name": "size",
            "label": "Tamaño del widget",
            "control": "select",
            "helper": "Tamaño de visualización del reCAPTCHA",
            "default": "normal",
            "placeholder": "",
            "options": [
              "Normal",
              "Compacto"
            ]
          }
        ]
      },
      {
        "name": "validations",
        "label": "Validaciones",
        "props": [
          {
            "name": "required",
            "label": "Campo requerido",
            "control": "checkbox",
            "helper": "El reCAPTCHA debe completarse obligatoriamente",
            "default": true,
            "placeholder": ""
          }
        ]
      }
    ],
    "example": {
      "label": "Recaptcha",
      "key": "Recaptcha",
      "type": "textfield",
      "typeComponent": "recaptcha",
      "idVariable": "6a29cd082cafb0b69561014",
      "general": {
        "siteKey": "6Lc_xxxxxxxxxxxxxxxxxxxxxxxx",
        "version": "v2",
        "size": "normal"
      },
      "validate": {
        "required": true
      },
      "layout": {
        "row": "Row_recaptcha"
      },
      "id": "Field_recaptcha",
      "attributes": {
        "general": {
          "siteKey": "6Lc_xxxxxxxxxxxxxxxxxxxxxxxx",
          "version": "v2",
          "size": "normal"
        },
        "validation": {
          "required": true
        }
      },
      "properties": {},
      "disabled": false,
      "readonly": false
    }
  },
  {
    "type": "resultCalc",
    "label": "Cálculo de Resultado",
    "groupType": "output",
    "formJsType": "textfield",
    "officeKey": "resultCalc",
    "status": "supported",
    "rendererNotes": "Campo de solo lectura. La ecuación se lee desde properties.equation, general.equation o attributes.general.equation.",
    "groups": [
      {
        "name": "general",
        "label": "General",
        "props": [
          {
            "name": "label",
            "label": "Etiqueta del campo",
            "control": "text",
            "helper": "Nombre descriptivo que verá el usuario",
            "default": null,
            "placeholder": "Ejm: Total calculado"
          },
          {
            "name": "description",
            "label": "Descripción del campo",
            "control": "text",
            "helper": "Texto que aparecerá como placeholder",
            "default": "",
            "placeholder": "Ejm: Resultado del cálculo automático"
          },
          {
            "name": "equation",
            "label": "Ecuación de cálculo",
            "control": "text",
            "helper": "Fórmula matemática usando nombres de otros campos",
            "default": "",
            "placeholder": "Ejm: precio * cantidad + impuesto"
          }
        ]
      }
    ],
    "example": {
      "label": "Total a pagar",
      "key": "Total_a_pagar",
      "type": "textfield",
      "typeComponent": "resultCalc",
      "idVariable": "6a29cd082cafb0b69561015",
      "general": {
        "label": "Total a pagar",
        "description": "Se calcula automáticamente",
        "equation": "{valorTramite} * 1.19"
      },
      "validate": {},
      "layout": {
        "row": "Row_resultcalc"
      },
      "id": "Field_resultcalc",
      "attributes": {
        "general": {
          "label": "Total a pagar",
          "description": "Se calcula automáticamente",
          "equation": "{valorTramite} * 1.19"
        },
        "validation": {}
      },
      "properties": {},
      "disabled": false,
      "readonly": false
    }
  },
  {
    "type": "resultTable",
    "label": "Tabla de Resultados",
    "groupType": "calculation",
    "formJsType": "textfield",
    "officeKey": "resultTable",
    "status": "mock",
    "rendererNotes": "Mockup: tabla fija (Producto A / Producto B) más un total de solo lectura. lastColumnResult y tableIdentity no se usan.",
    "groups": [
      {
        "name": "general",
        "label": "General",
        "props": [
          {
            "name": "label",
            "label": "Etiqueta del campo",
            "control": "text",
            "helper": "Nombre descriptivo que verá el usuario",
            "default": null,
            "placeholder": "Ejm: Total de la tabla"
          },
          {
            "name": "description",
            "label": "Descripción del campo",
            "control": "text",
            "helper": "Texto que aparecerá como placeholder",
            "default": "",
            "placeholder": "Ejm: Suma automática de los valores"
          },
          {
            "name": "lastColumnResult",
            "label": "Columna de resultado",
            "control": "text",
            "helper": "Nombre de la columna que se sumará automáticamente",
            "default": "",
            "placeholder": "Ejm: subtotal"
          },
          {
            "name": "tableIdentity",
            "label": "Identidad de la tabla",
            "control": "text",
            "helper": "Identificador único de la tabla para calcular",
            "default": "",
            "placeholder": "Ejm: productos"
          }
        ]
      }
    ],
    "example": {
      "label": "Resumen de liquidación",
      "key": "Resumen_de_liquidaci_n",
      "type": "textfield",
      "typeComponent": "resultTable",
      "idVariable": "6a29cd082cafb0b69561016",
      "general": {
        "label": "Resumen de liquidación",
        "description": "Totales por concepto",
        "lastColumnResult": true,
        "tableIdentity": "liquidacion"
      },
      "validate": {},
      "layout": {
        "row": "Row_resulttable"
      },
      "id": "Field_resulttable",
      "attributes": {
        "general": {
          "label": "Resumen de liquidación",
          "description": "Totales por concepto",
          "lastColumnResult": true,
          "tableIdentity": "liquidacion"
        },
        "validation": {}
      },
      "properties": {},
      "disabled": false,
      "readonly": false
    }
  },
  {
    "type": "select",
    "label": "Selección Única (Select)",
    "groupType": "input",
    "formJsType": "select",
    "officeKey": "select",
    "status": "supported",
    "rendererNotes": "options, urlDynamic, typeUrl y relatedTo funcionan (comportamiento DynamicOptions). searchable se ignora porque el plugin lee isSearchable. externalScope y contextValues se ignoran.",
    "groups": [
      {
        "name": "general",
        "label": "General",
        "props": [
          {
            "name": "label",
            "label": "Etiqueta del campo",
            "control": "text",
            "helper": "Nombre descriptivo que verá el usuario",
            "default": null,
            "placeholder": "Ejm: Seleccione su país"
          },
          {
            "name": "description",
            "label": "Descripción del campo",
            "control": "text",
            "helper": "Texto que aparecerá como placeholder",
            "default": "",
            "placeholder": "Ejm: Seleccione una opción"
          },
          {
            "name": "readonly",
            "label": "Solo lectura",
            "control": "checkbox",
            "helper": "Si está marcado, el campo no se puede editar",
            "default": false,
            "placeholder": ""
          },
          {
            "name": "searchable",
            "label": "Permite búsqueda",
            "control": "checkbox",
            "helper": "Permite filtrar opciones escribiendo",
            "default": false,
            "placeholder": ""
          },
          {
            "name": "values",
            "label": "Opciones estáticas",
            "control": "options",
            "helper": "Configure las opciones fijas de la lista",
            "default": null,
            "placeholder": ""
          },
          {
            "name": "urlDynamic",
            "label": "URL dinámica",
            "control": "text",
            "helper": "URL para cargar opciones dinámicamente",
            "default": "",
            "placeholder": "Ejm: /api/countries"
          },
          {
            "name": "relatedTo",
            "label": "Campos relacionados",
            "control": "text",
            "helper": "Campos que afectan las opciones (separados por coma)",
            "default": "",
            "placeholder": "Ejm: country,state"
          },
          {
            "name": "typeUrl",
            "label": "Tipo de URL",
            "control": "select",
            "helper": "Tipo de URL para opciones dinámicas",
            "default": "internal",
            "placeholder": "",
            "options": [
              "Interna",
              "Externa"
            ]
          },
          {
            "name": "externalScope",
            "label": "Alcance externo",
            "control": "text",
            "helper": "Variables externas disponibles",
            "default": "",
            "placeholder": "Ejm: user.id,session.token"
          },
          {
            "name": "contextValues",
            "label": "Valores de contexto",
            "control": "text",
            "helper": "Valores fijos del contexto",
            "default": "",
            "placeholder": "Ejm: {\"tenant\":\"main\"}"
          }
        ]
      },
      {
        "name": "validations",
        "label": "Validaciones",
        "props": [
          {
            "name": "required",
            "label": "Campo requerido",
            "control": "checkbox",
            "helper": "Debe seleccionarse una opción obligatoriamente",
            "default": false,
            "placeholder": ""
          }
        ]
      }
    ],
    "example": {
      "label": "Tipo de documento",
      "key": "Tipo_de_documento",
      "type": "select",
      "typeComponent": "select",
      "idVariable": "6a29cd082cafb0b69561017",
      "general": {
        "label": "Tipo de documento",
        "description": "Seleccione",
        "readonly": false,
        "searchable": true,
        "urlDynamic": "",
        "relatedTo": "",
        "typeUrl": "internal",
        "externalScope": "",
        "contextValues": "",
        "options": [
          {
            "label": "Cédula de ciudadanía",
            "value": "CC"
          },
          {
            "label": "Cédula de extranjería",
            "value": "CE"
          },
          {
            "label": "Pasaporte",
            "value": "PA"
          }
        ]
      },
      "validate": {
        "required": true
      },
      "layout": {
        "row": "Row_select"
      },
      "id": "Field_select",
      "attributes": {
        "general": {
          "label": "Tipo de documento",
          "description": "Seleccione",
          "readonly": false,
          "searchable": true,
          "urlDynamic": "",
          "relatedTo": "",
          "typeUrl": "internal",
          "externalScope": "",
          "contextValues": "",
          "options": [
            {
              "label": "Cédula de ciudadanía",
              "value": "CC"
            },
            {
              "label": "Cédula de extranjería",
              "value": "CE"
            },
            {
              "label": "Pasaporte",
              "value": "PA"
            }
          ]
        },
        "validation": {
          "required": true
        }
      },
      "properties": {},
      "disabled": false,
      "readonly": false
    }
  },
  {
    "type": "selectMultiple",
    "label": "Selección Múltiple (Select)",
    "groupType": "input",
    "formJsType": "taglist",
    "officeKey": "selectMultiple",
    "status": "supported",
    "rendererNotes": "Igual que select (opciones estáticas o dinámicas), sin búsqueda.",
    "groups": [
      {
        "name": "general",
        "label": "General",
        "props": [
          {
            "name": "label",
            "label": "Etiqueta del campo",
            "control": "text",
            "helper": "Nombre descriptivo que verá el usuario",
            "default": null,
            "placeholder": "Ejm: Seleccione sus intereses"
          },
          {
            "name": "description",
            "label": "Descripción del campo",
            "control": "text",
            "helper": "Texto que aparecerá como placeholder",
            "default": "",
            "placeholder": "Ejm: Puede seleccionar múltiples opciones"
          },
          {
            "name": "readonly",
            "label": "Solo lectura",
            "control": "checkbox",
            "helper": "Si está marcado, el campo no se puede editar",
            "default": false,
            "placeholder": ""
          },
          {
            "name": "searchable",
            "label": "Permite búsqueda",
            "control": "checkbox",
            "helper": "Permite filtrar opciones escribiendo",
            "default": false,
            "placeholder": ""
          },
          {
            "name": "values",
            "label": "Opciones estáticas",
            "control": "options",
            "helper": "Configure las opciones fijas de la lista",
            "default": null,
            "placeholder": ""
          },
          {
            "name": "urlDynamic",
            "label": "URL dinámica",
            "control": "text",
            "helper": "URL para cargar opciones dinámicamente",
            "default": "",
            "placeholder": "Ejm: /api/categories"
          },
          {
            "name": "relatedTo",
            "label": "Campos relacionados",
            "control": "text",
            "helper": "Campos que afectan las opciones (separados por coma)",
            "default": "",
            "placeholder": "Ejm: category,subcategory"
          },
          {
            "name": "typeUrl",
            "label": "Tipo de URL",
            "control": "select",
            "helper": "Tipo de URL para opciones dinámicas",
            "default": "internal",
            "placeholder": "",
            "options": [
              "Interna",
              "Externa"
            ]
          },
          {
            "name": "externalScope",
            "label": "Alcance externo",
            "control": "text",
            "helper": "Variables externas disponibles",
            "default": "",
            "placeholder": "Ejm: user.preferences,session.data"
          },
          {
            "name": "contextValues",
            "label": "Valores de contexto",
            "control": "text",
            "helper": "Valores fijos del contexto",
            "default": "",
            "placeholder": "Ejm: {\"type\":\"multiple\"}"
          }
        ]
      },
      {
        "name": "validations",
        "label": "Validaciones",
        "props": [
          {
            "name": "required",
            "label": "Campo requerido",
            "control": "checkbox",
            "helper": "Debe seleccionarse al menos una opción",
            "default": false,
            "placeholder": ""
          }
        ]
      }
    ],
    "example": {
      "label": "Municipios",
      "key": "Municipios",
      "type": "taglist",
      "typeComponent": "selectMultiple",
      "idVariable": "6a29cd082cafb0b69561018",
      "general": {
        "label": "Municipios",
        "description": "Seleccione uno o varios",
        "readonly": false,
        "searchable": false,
        "urlDynamic": "",
        "relatedTo": "",
        "typeUrl": "internal",
        "externalScope": "",
        "contextValues": "",
        "options": [
          {
            "label": "Bogotá",
            "value": "11001"
          },
          {
            "label": "Medellín",
            "value": "05001"
          },
          {
            "label": "Cali",
            "value": "76001"
          }
        ]
      },
      "validate": {
        "required": false
      },
      "layout": {
        "row": "Row_selectmultiple"
      },
      "id": "Field_selectmultiple",
      "attributes": {
        "general": {
          "label": "Municipios",
          "description": "Seleccione uno o varios",
          "readonly": false,
          "searchable": false,
          "urlDynamic": "",
          "relatedTo": "",
          "typeUrl": "internal",
          "externalScope": "",
          "contextValues": "",
          "options": [
            {
              "label": "Bogotá",
              "value": "11001"
            },
            {
              "label": "Medellín",
              "value": "05001"
            },
            {
              "label": "Cali",
              "value": "76001"
            }
          ]
        },
        "validation": {
          "required": false
        }
      },
      "properties": {},
      "disabled": false,
      "readonly": false
    }
  },
  {
    "type": "text",
    "label": "Campo de Texto",
    "groupType": "input",
    "formJsType": "textfield",
    "officeKey": "text",
    "status": "supported",
    "rendererNotes": "El office lee general.label, description y readonly. mask, keepMask, thousandSeparator, decimalDigits y decimalMarker se configuran en el generador pero el plugin de texto no los aplica. prefix y suffix se leen desde appearance, no desde general.",
    "groups": [
      {
        "name": "general",
        "label": "General",
        "props": [
          {
            "name": "label",
            "label": "Etiqueta del campo",
            "control": "text",
            "helper": "Nombre descriptivo que verá el usuario",
            "default": null,
            "placeholder": "Ejm: Nombre completo"
          },
          {
            "name": "description",
            "label": "Descripción del campo",
            "control": "text",
            "helper": "Texto que aparecerá como placeholder",
            "default": "",
            "placeholder": "Ejm: Ingrese su nombre y apellidos"
          },
          {
            "name": "readonly",
            "label": "Solo lectura",
            "control": "checkbox",
            "helper": "Si está marcado, el campo no se puede editar",
            "default": false,
            "placeholder": ""
          },
          {
            "name": "suffix",
            "label": "Sufijo",
            "control": "text",
            "helper": "Texto que aparece al final del campo",
            "default": "",
            "placeholder": "Ejm: €, %, etc."
          },
          {
            "name": "prefix",
            "label": "Prefijo",
            "control": "text",
            "helper": "Texto que aparece al inicio del campo",
            "default": "",
            "placeholder": "Ejm: $, +57, etc."
          },
          {
            "name": "thousandSeparator",
            "label": "Separador de miles",
            "control": "checkbox",
            "helper": "Agregar separador de miles (1,000)",
            "default": false,
            "placeholder": ""
          },
          {
            "name": "mask",
            "label": "Máscara de entrada",
            "control": "text",
            "helper": "Patrón para el formato del campo",
            "default": "",
            "placeholder": "Ejm: 999-999-9999"
          },
          {
            "name": "keepMask",
            "label": "Mantener máscara",
            "control": "checkbox",
            "helper": "Conservar la máscara en el valor final",
            "default": false,
            "placeholder": ""
          },
          {
            "name": "decimalDigits",
            "label": "Dígitos decimales",
            "control": "number",
            "helper": "Número de decimales permitidos",
            "default": null,
            "placeholder": "Ejm: 2"
          },
          {
            "name": "decimalMarker",
            "label": "Marcador decimal",
            "control": "text",
            "helper": "Símbolo para separar decimales",
            "default": ".",
            "placeholder": "Ejm: . o ,"
          }
        ]
      },
      {
        "name": "validations",
        "label": "Validaciones",
        "props": [
          {
            "name": "required",
            "label": "Campo requerido",
            "control": "checkbox",
            "helper": "El campo debe completarse obligatoriamente",
            "default": false,
            "placeholder": ""
          },
          {
            "name": "minLength",
            "label": "Longitud mínima",
            "control": "number",
            "helper": "Número mínimo de caracteres",
            "default": null,
            "placeholder": "Ejm: 3"
          },
          {
            "name": "maxLength",
            "label": "Longitud máxima",
            "control": "number",
            "helper": "Número máximo de caracteres",
            "default": null,
            "placeholder": "Ejm: 50"
          },
          {
            "name": "pattern",
            "label": "Patrón de validación",
            "control": "text",
            "helper": "Expresión regular para validar el formato",
            "default": "",
            "placeholder": "Ejm: ^[a-zA-Z]+$"
          }
        ]
      }
    ],
    "example": {
      "label": "Nombres",
      "key": "Nombres",
      "type": "textfield",
      "typeComponent": "text",
      "idVariable": "6a29cd082cafb0b69561019",
      "general": {
        "label": "Nombres",
        "description": "Ingrese su nombre completo",
        "readonly": false,
        "suffix": "",
        "prefix": "",
        "thousandSeparator": false,
        "mask": "",
        "keepMask": false,
        "decimalDigits": null,
        "decimalMarker": "."
      },
      "validate": {
        "required": true,
        "minLength": 3,
        "maxLength": 200
      },
      "layout": {
        "row": "Row_text"
      },
      "id": "Field_text",
      "attributes": {
        "general": {
          "label": "Nombres",
          "description": "Ingrese su nombre completo",
          "readonly": false,
          "suffix": "",
          "prefix": "",
          "thousandSeparator": false,
          "mask": "",
          "keepMask": false,
          "decimalDigits": null,
          "decimalMarker": "."
        },
        "validation": {
          "required": true,
          "minLength": 3,
          "maxLength": 200,
          "pattern": ""
        }
      },
      "properties": {},
      "disabled": false,
      "readonly": false
    }
  },
  {
    "type": "textarea",
    "label": "Área de Texto",
    "groupType": "input",
    "formJsType": "textarea",
    "officeKey": "textarea",
    "status": "supported",
    "rendererNotes": "Soporte completo: label, description, readonly y rows.",
    "groups": [
      {
        "name": "general",
        "label": "General",
        "props": [
          {
            "name": "label",
            "label": "Etiqueta del campo",
            "control": "text",
            "helper": "Nombre descriptivo que verá el usuario",
            "default": null,
            "placeholder": "Ejm: Comentarios"
          },
          {
            "name": "description",
            "label": "Descripción del campo",
            "control": "text",
            "helper": "Texto que aparecerá como placeholder",
            "default": "",
            "placeholder": "Ejm: Escriba sus comentarios aquí"
          },
          {
            "name": "readonly",
            "label": "Solo lectura",
            "control": "checkbox",
            "helper": "Si está marcado, el campo no se puede editar",
            "default": false,
            "placeholder": ""
          },
          {
            "name": "rows",
            "label": "Número de filas",
            "control": "number",
            "helper": "Altura del área de texto en filas",
            "default": 3,
            "placeholder": "Ejm: 5"
          }
        ]
      },
      {
        "name": "validations",
        "label": "Validaciones",
        "props": [
          {
            "name": "required",
            "label": "Campo requerido",
            "control": "checkbox",
            "helper": "El campo debe completarse obligatoriamente",
            "default": false,
            "placeholder": ""
          },
          {
            "name": "minLength",
            "label": "Longitud mínima",
            "control": "number",
            "helper": "Número mínimo de caracteres",
            "default": null,
            "placeholder": "Ejm: 10"
          },
          {
            "name": "maxLength",
            "label": "Longitud máxima",
            "control": "number",
            "helper": "Número máximo de caracteres",
            "default": null,
            "placeholder": "Ejm: 500"
          },
          {
            "name": "pattern",
            "label": "Patrón de validación",
            "control": "text",
            "helper": "Expresión regular para validar el formato",
            "default": "",
            "placeholder": "Ejm: ^[a-zA-Z\\s]+$"
          }
        ]
      }
    ],
    "example": {
      "label": "Observaciones",
      "key": "Observaciones",
      "type": "textarea",
      "typeComponent": "textarea",
      "idVariable": "6a29cd082cafb0b69561020",
      "general": {
        "label": "Observaciones",
        "description": "Describa la solicitud",
        "readonly": false,
        "rows": 4
      },
      "validate": {
        "required": false,
        "maxLength": 1000
      },
      "layout": {
        "row": "Row_textarea"
      },
      "id": "Field_textarea",
      "attributes": {
        "general": {
          "label": "Observaciones",
          "description": "Describa la solicitud",
          "readonly": false,
          "rows": 4
        },
        "validation": {
          "required": false,
          "minLength": null,
          "maxLength": 1000,
          "pattern": ""
        }
      },
      "properties": {},
      "disabled": false,
      "readonly": false
    }
  },
  {
    "type": "button-element",
    "label": "Botón Genérico",
    "groupType": "action",
    "formJsType": "button",
    "officeKey": "button-element",
    "status": "unsupported",
    "rendererNotes": "No soportado: la clave del mapa del office es \"button\", no \"button-element\". Cae al input de texto.",
    "groups": [
      {
        "name": "general",
        "label": "General",
        "props": [
          {
            "name": "label",
            "label": "Etiqueta del botón",
            "control": "text",
            "helper": "Texto que aparecerá en el botón",
            "default": null,
            "placeholder": "Ejm: Calcular total"
          },
          {
            "name": "description",
            "label": "Descripción",
            "control": "text",
            "helper": "Descripción de la acción que realiza el botón",
            "default": "",
            "placeholder": "Ejm: Calcula el total de los productos"
          },
          {
            "name": "disabled",
            "label": "Botón deshabilitado",
            "control": "checkbox",
            "helper": "Si está marcado, el botón estará deshabilitado",
            "default": false,
            "placeholder": ""
          }
        ]
      },
      {
        "name": "configuration",
        "label": "Configuración",
        "props": [
          {
            "name": "type",
            "label": "Tipo de botón",
            "control": "select",
            "helper": "Tipo funcional del botón",
            "default": "button",
            "placeholder": "",
            "options": [
              "Botón normal",
              "Reiniciar",
              "Calcular",
              "Validar"
            ]
          },
          {
            "name": "action",
            "label": "Acción del botón",
            "control": "text",
            "helper": "Nombre de la acción a ejecutar",
            "default": "",
            "placeholder": "Ejm: calculate_total"
          },
          {
            "name": "actionIdentifier",
            "label": "Identificador de acción",
            "control": "text",
            "helper": "Identificador único de la acción",
            "default": "",
            "placeholder": "Ejm: calc_001"
          }
        ]
      },
      {
        "name": "appearance",
        "label": "Apariencia",
        "props": [
          {
            "name": "buttonStyle",
            "label": "Estilo del botón",
            "control": "select",
            "helper": "Estilo visual del botón",
            "default": "primary",
            "placeholder": "",
            "options": [
              "Primario",
              "Secundario",
              "Éxito",
              "Advertencia",
              "Peligro"
            ]
          },
          {
            "name": "size",
            "label": "Tamaño del botón",
            "control": "select",
            "helper": "Tamaño del botón",
            "default": "medium",
            "placeholder": "",
            "options": [
              "Pequeño",
              "Mediano",
              "Grande"
            ]
          },
          {
            "name": "icon",
            "label": "Icono del botón",
            "control": "text",
            "helper": "Nombre del icono a mostrar",
            "default": "",
            "placeholder": "Ejm: calculator, check"
          }
        ]
      },
      {
        "name": "behavior",
        "label": "Comportamiento",
        "props": [
          {
            "name": "confirmMessage",
            "label": "Mensaje de confirmación",
            "control": "text",
            "helper": "Mensaje a mostrar antes de ejecutar la acción",
            "default": "",
            "placeholder": "Ejm: ¿Está seguro de realizar esta acción?"
          },
          {
            "name": "validateBeforeAction",
            "label": "Validar antes de acción",
            "control": "checkbox",
            "helper": "Ejecuta validaciones antes de la acción",
            "default": false,
            "placeholder": ""
          }
        ]
      },
      {
        "name": "statusControl",
        "label": "Control de Estado",
        "props": [
          {
            "name": "statusVariableKey",
            "label": "Variable de estado (key)",
            "control": "text",
            "helper": "Nombre de la variable de proceso que almacenará el estado. Ejm: control_process_status",
            "default": "",
            "placeholder": "Ejm: control_process_status"
          },
          {
            "name": "statusVariableValue",
            "label": "Valor del estado",
            "control": "text",
            "helper": "Valor que tomará la variable de estado al presionar este botón. Ejm: En revisión, Enviado a subsanación",
            "default": "",
            "placeholder": "Ejm: En revisión"
          }
        ]
      }
    ],
    "example": {
      "label": "Calcular",
      "key": "Calcular",
      "type": "button",
      "typeComponent": "button-element",
      "idVariable": "6a29cd082cafb0b69561021",
      "general": {
        "label": "Calcular",
        "description": "",
        "disabled": false
      },
      "configuration": {
        "type": "calculate",
        "action": "calculate",
        "actionIdentifier": "calc"
      },
      "appearance": {
        "buttonStyle": "info",
        "size": "medium",
        "icon": ""
      },
      "behavior": {
        "confirmMessage": "",
        "validateBeforeAction": false
      },
      "statusControl": {
        "statusVariableKey": "",
        "statusVariableValue": ""
      },
      "validate": {},
      "layout": {
        "row": "Row_button_element"
      },
      "id": "Field_button_element",
      "attributes": {
        "general": {
          "label": "Calcular",
          "description": "",
          "disabled": false
        },
        "configuration": {
          "type": "calculate",
          "action": "calculate",
          "actionIdentifier": "calc"
        },
        "appearance": {
          "buttonStyle": "info",
          "size": "medium",
          "icon": ""
        },
        "behavior": {
          "confirmMessage": "",
          "validateBeforeAction": false
        },
        "statusControl": {
          "statusVariableKey": "",
          "statusVariableValue": ""
        },
        "validation": {}
      },
      "properties": {},
      "disabled": false,
      "readonly": false
    }
  },
  {
    "type": "downloadTemplate",
    "label": "Vista de Plantilla de Documento",
    "groupType": "display",
    "formJsType": "textfield",
    "officeKey": "downloadTemplate",
    "status": "supported",
    "rendererNotes": "Con readonly muestra el visor de plantilla usando general.templateName. El grupo template (templateName, fileUrl, allowDownload, allowPrint) se ignora.",
    "groups": [
      {
        "name": "general",
        "label": "General",
        "props": [
          {
            "name": "label",
            "label": "Etiqueta del componente",
            "control": "text",
            "helper": "Nombre descriptivo que verá el usuario",
            "default": null,
            "placeholder": "Ejm: Vista previa del documento"
          },
          {
            "name": "description",
            "label": "Descripción",
            "control": "text",
            "helper": "Descripción del visor de documentos",
            "default": "",
            "placeholder": "Ejm: Visualización del documento generado"
          },
          {
            "name": "readonly",
            "label": "Solo lectura",
            "control": "checkbox",
            "helper": "Los visores siempre son de solo lectura",
            "default": true,
            "placeholder": ""
          }
        ]
      },
      {
        "name": "template",
        "label": "Configuración de Plantilla",
        "props": [
          {
            "name": "templateName",
            "label": "Nombre de la plantilla",
            "control": "text",
            "helper": "Nombre o identificador de la plantilla a usar",
            "default": null,
            "placeholder": "Ejm: contrato_servicios.docx"
          },
          {
            "name": "fileUrl",
            "label": "URL del archivo",
            "control": "text",
            "helper": "URL donde se encuentra el archivo de plantilla",
            "default": "",
            "placeholder": "Ejm: /api/templates/contrato.pdf"
          },
          {
            "name": "allowDownload",
            "label": "Permitir descarga",
            "control": "checkbox",
            "helper": "Permite descargar el documento",
            "default": true,
            "placeholder": ""
          },
          {
            "name": "allowPrint",
            "label": "Permitir imprimir",
            "control": "checkbox",
            "helper": "Permite imprimir el documento",
            "default": true,
            "placeholder": ""
          }
        ]
      }
    ],
    "example": {
      "label": "Plantilla de solicitud",
      "key": "Plantilla_de_solicitud",
      "type": "textfield",
      "typeComponent": "downloadTemplate",
      "idVariable": "6a29cd082cafb0b69561022",
      "general": {
        "label": "Plantilla de solicitud",
        "description": "Descargue y diligencie la plantilla",
        "readonly": true
      },
      "template": {
        "templateName": "solicitud-concesion",
        "fileUrl": "",
        "allowDownload": true,
        "allowPrint": false
      },
      "validate": {},
      "layout": {
        "row": "Row_downloadtemplate"
      },
      "id": "Field_downloadtemplate",
      "attributes": {
        "general": {
          "label": "Plantilla de solicitud",
          "description": "Descargue y diligencie la plantilla",
          "readonly": true
        },
        "template": {
          "templateName": "solicitud-concesion",
          "fileUrl": "",
          "allowDownload": true,
          "allowPrint": false
        },
        "validation": {}
      },
      "properties": {},
      "disabled": false,
      "readonly": true
    }
  },
  {
    "type": "dynamic-section",
    "label": "Sección Dinámica",
    "groupType": "container",
    "formJsType": "textfield",
    "officeKey": "dynamic-section",
    "status": "unsupported",
    "rendererNotes": "No soportado como variable (el generador lo oculta). Las secciones reales se crean con los marcadores startDynamicSection y endDynamicSection.",
    "groups": [
      {
        "name": "general",
        "label": "General",
        "props": [
          {
            "name": "label",
            "label": "Etiqueta de la sección",
            "control": "text",
            "helper": "Nombre descriptivo que verá el usuario",
            "default": null,
            "placeholder": "Ejm: Información de contactos"
          },
          {
            "name": "description",
            "label": "Descripción",
            "control": "text",
            "helper": "Descripción de la sección dinámica",
            "default": "",
            "placeholder": "Ejm: Agregue tantos contactos como necesite"
          },
          {
            "name": "readonly",
            "label": "Solo lectura",
            "control": "checkbox",
            "helper": "Si está marcado, la sección será de solo lectura",
            "default": false,
            "placeholder": ""
          }
        ]
      },
      {
        "name": "configuration",
        "label": "Configuración",
        "props": [
          {
            "name": "titleSection",
            "label": "Título de cada instancia",
            "control": "text",
            "helper": "Título que aparecerá en cada instancia de la sección",
            "default": null,
            "placeholder": "Ejm: Contacto {index}"
          },
          {
            "name": "groupSection",
            "label": "Grupo de la sección",
            "control": "text",
            "helper": "Identificador del grupo al que pertenece",
            "default": "",
            "placeholder": "Ejm: seccion_datos"
          },
          {
            "name": "level",
            "label": "Nivel de sección",
            "control": "number",
            "helper": "Nivel de anidamiento de la sección (1-3)",
            "default": 1,
            "placeholder": "Ejm: 1"
          },
          {
            "name": "limitSections",
            "label": "Límite de secciones",
            "control": "number",
            "helper": "Número máximo de instancias de esta sección",
            "default": 5,
            "placeholder": "Ejm: 3"
          },
          {
            "name": "addButtonText",
            "label": "Texto botón agregar",
            "control": "text",
            "helper": "Texto del botón para agregar nueva sección",
            "default": "Agregar sección",
            "placeholder": "Ejm: Agregar contacto"
          },
          {
            "name": "removeButtonText",
            "label": "Texto botón eliminar",
            "control": "text",
            "helper": "Texto del botón para eliminar sección",
            "default": "Eliminar sección",
            "placeholder": "Ejm: Eliminar contacto"
          },
          {
            "name": "collapsible",
            "label": "Sección colapsable",
            "control": "checkbox",
            "helper": "Permite colapsar/expandir la sección",
            "default": true,
            "placeholder": ""
          },
          {
            "name": "collapsed",
            "label": "Inicialmente colapsada",
            "control": "checkbox",
            "helper": "Si está marcado, inicia colapsada",
            "default": false,
            "placeholder": ""
          }
        ]
      },
      {
        "name": "validations",
        "label": "Validaciones",
        "props": [
          {
            "name": "required",
            "label": "Sección requerida",
            "control": "checkbox",
            "helper": "Debe existir al menos una instancia",
            "default": false,
            "placeholder": ""
          }
        ]
      }
    ],
    "example": {
      "label": "Predios",
      "key": "Predios",
      "type": "textfield",
      "typeComponent": "dynamic-section",
      "idVariable": "6a29cd082cafb0b69561023",
      "general": {
        "label": "Predios",
        "description": "Agregue uno o más predios",
        "readonly": false
      },
      "configuration": {
        "titleSection": "Predio ${index}",
        "groupSection": "predios",
        "level": 1,
        "limitSections": 5,
        "addButtonText": "Agregar predio",
        "removeButtonText": "Eliminar",
        "collapsible": true,
        "collapsed": false
      },
      "validate": {
        "required": true
      },
      "layout": {
        "row": "Row_dynamic_section"
      },
      "id": "Field_dynamic_section",
      "attributes": {
        "general": {
          "label": "Predios",
          "description": "Agregue uno o más predios",
          "readonly": false
        },
        "configuration": {
          "titleSection": "Predio ${index}",
          "groupSection": "predios",
          "level": 1,
          "limitSections": 5,
          "addButtonText": "Agregar predio",
          "removeButtonText": "Eliminar",
          "collapsible": true,
          "collapsed": false
        },
        "validation": {
          "required": true
        }
      },
      "properties": {},
      "disabled": false,
      "readonly": false
    }
  },
  {
    "type": "dynamic-table-field",
    "label": "Tabla Dinámica",
    "groupType": "complex",
    "formJsType": "textfield",
    "officeKey": "dynamic-table-field",
    "status": "unsupported",
    "rendererNotes": "No soportado: el agrupador de tablas del office solo entiende el formato antiguo (properties.type=\"dynamicTable\" con columns como texto separado por comas). Cae al input de texto.",
    "groups": [
      {
        "name": "general",
        "label": "General",
        "props": [
          {
            "name": "label",
            "label": "Etiqueta de la tabla",
            "control": "text",
            "helper": "Nombre descriptivo que verá el usuario",
            "default": null,
            "placeholder": "Ejm: Lista de productos"
          },
          {
            "name": "description",
            "label": "Descripción",
            "control": "text",
            "helper": "Descripción de la tabla dinámica",
            "default": "",
            "placeholder": "Ejm: Agregue los productos necesarios"
          },
          {
            "name": "readonly",
            "label": "Solo lectura",
            "control": "checkbox",
            "helper": "Si está marcado, la tabla será de solo lectura",
            "default": false,
            "placeholder": ""
          }
        ]
      },
      {
        "name": "configuration",
        "label": "Configuración de Tabla",
        "props": [
          {
            "name": "addRowText",
            "label": "Texto botón agregar",
            "control": "text",
            "helper": "Texto del botón para agregar nueva fila",
            "default": "Agregar fila",
            "placeholder": "Ejm: Agregar producto"
          },
          {
            "name": "removeRowText",
            "label": "Texto botón eliminar",
            "control": "text",
            "helper": "Texto del botón para eliminar fila",
            "default": "Eliminar",
            "placeholder": "Ejm: Quitar"
          },
          {
            "name": "minRows",
            "label": "Mínimo de filas",
            "control": "number",
            "helper": "Número mínimo de filas requeridas",
            "default": 1,
            "placeholder": "Ejm: 1"
          },
          {
            "name": "maxRows",
            "label": "Máximo de filas",
            "control": "number",
            "helper": "Número máximo de filas permitidas",
            "default": 10,
            "placeholder": "Ejm: 10"
          },
          {
            "name": "nameIndexColumn",
            "label": "Nombre columna índice",
            "control": "text",
            "helper": "Nombre para la columna de numeración",
            "default": "#",
            "placeholder": "Ejm: No., Ítem"
          }
        ]
      },
      {
        "name": "columns",
        "label": "Configuración de Columnas",
        "props": [
          {
            "name": "columns",
            "label": "Columnas de la tabla",
            "control": "options",
            "helper": "Configure las columnas que tendrá la tabla",
            "default": null,
            "placeholder": ""
          }
        ]
      },
      {
        "name": "validations",
        "label": "Validaciones",
        "props": [
          {
            "name": "required",
            "label": "Tabla requerida",
            "control": "checkbox",
            "helper": "Debe tener al menos una fila completa",
            "default": false,
            "placeholder": ""
          }
        ]
      }
    ],
    "example": {
      "label": "Fuentes de agua",
      "key": "Fuentes_de_agua",
      "type": "textfield",
      "typeComponent": "dynamic-table-field",
      "idVariable": "6a29cd082cafb0b69561024",
      "general": {
        "label": "Fuentes de agua",
        "description": "Registre cada fuente",
        "readonly": false
      },
      "configuration": {
        "addRowText": "Agregar fila",
        "removeRowText": "Eliminar",
        "minRows": 1,
        "maxRows": 10,
        "nameIndexColumn": "#"
      },
      "columns": {
        "columns": [
          {
            "label": "Número",
            "value": "numero"
          },
          {
            "label": "Volumen (L)",
            "value": "volumen"
          },
          {
            "label": "Tiempo (s)",
            "value": "tiempo"
          }
        ]
      },
      "validate": {
        "required": true
      },
      "layout": {
        "row": "Row_dynamic_table_field"
      },
      "id": "Field_dynamic_table_field",
      "attributes": {
        "general": {
          "label": "Fuentes de agua",
          "description": "Registre cada fuente",
          "readonly": false
        },
        "configuration": {
          "addRowText": "Agregar fila",
          "removeRowText": "Eliminar",
          "minRows": 1,
          "maxRows": 10,
          "nameIndexColumn": "#"
        },
        "columns": {
          "columns": [
            {
              "label": "Número",
              "value": "numero"
            },
            {
              "label": "Volumen (L)",
              "value": "volumen"
            },
            {
              "label": "Tiempo (s)",
              "value": "tiempo"
            }
          ]
        },
        "validation": {
          "required": true
        }
      },
      "properties": {},
      "disabled": false,
      "readonly": false
    }
  },
  {
    "type": "markdown",
    "label": "Visor de Markdown",
    "groupType": "display",
    "formJsType": "text",
    "officeKey": "markdown",
    "status": "supported",
    "rendererNotes": "Lee content.text (o general.text / text) y properties.readVariable. dynamic.readVariable, allowHtml, enableLinks y theme se ignoran.",
    "groups": [
      {
        "name": "general",
        "label": "General",
        "props": [
          {
            "name": "label",
            "label": "Etiqueta del componente",
            "control": "text",
            "helper": "Nombre descriptivo que verá el usuario",
            "default": null,
            "placeholder": "Ejm: Instrucciones del formulario"
          },
          {
            "name": "readonly",
            "label": "Solo lectura",
            "control": "checkbox",
            "helper": "Los visores de markdown siempre son de solo lectura",
            "default": true,
            "placeholder": ""
          }
        ]
      },
      {
        "name": "content",
        "label": "Contenido",
        "props": [
          {
            "name": "text",
            "label": "Contenido Markdown",
            "control": "textarea",
            "helper": "Texto en formato Markdown para mostrar",
            "default": "",
            "placeholder": "## Título\n\nEste es un **texto en negrita**"
          },
          {
            "name": "content",
            "label": "Contenido alternativo",
            "control": "textarea",
            "helper": "Contenido alternativo en markdown",
            "default": "",
            "placeholder": "Contenido secundario..."
          }
        ]
      },
      {
        "name": "dynamic",
        "label": "Contenido Dinámico",
        "props": [
          {
            "name": "readVariable",
            "label": "Variable a leer",
            "control": "text",
            "helper": "Nombre de la variable del formulario para obtener el contenido",
            "default": "",
            "placeholder": "Ejm: descripcion_producto"
          },
          {
            "name": "allowHtml",
            "label": "Permitir HTML",
            "control": "checkbox",
            "helper": "Permite contenido HTML en el markdown",
            "default": false,
            "placeholder": ""
          },
          {
            "name": "enableLinks",
            "label": "Habilitar enlaces",
            "control": "checkbox",
            "helper": "Permite enlaces clickeables en el contenido",
            "default": true,
            "placeholder": ""
          }
        ]
      },
      {
        "name": "appearance",
        "label": "Apariencia",
        "props": [
          {
            "name": "theme",
            "label": "Tema del visor",
            "control": "select",
            "helper": "Tema visual para el contenido",
            "default": "default",
            "placeholder": "",
            "options": [
              "Por defecto",
              "Oscuro",
              "Claro"
            ]
          }
        ]
      }
    ],
    "example": {
      "label": "Instrucciones",
      "key": "Instrucciones",
      "type": "text",
      "typeComponent": "markdown",
      "idVariable": "6a29cd082cafb0b69561025",
      "general": {
        "label": "Instrucciones",
        "readonly": true
      },
      "content": {
        "text": "## Instrucciones\n\nDiligencie los campos marcados con **asterisco**.",
        "content": ""
      },
      "dynamic": {
        "readVariable": "",
        "allowHtml": false,
        "enableLinks": true
      },
      "appearance": {
        "theme": "default"
      },
      "validate": {},
      "layout": {
        "row": "Row_markdown"
      },
      "id": "Field_markdown",
      "attributes": {
        "general": {
          "label": "Instrucciones",
          "readonly": true
        },
        "content": {
          "text": "## Instrucciones\n\nDiligencie los campos marcados con **asterisco**.",
          "content": ""
        },
        "dynamic": {
          "readVariable": "",
          "allowHtml": false,
          "enableLinks": true
        },
        "appearance": {
          "theme": "default"
        },
        "validation": {}
      },
      "properties": {},
      "disabled": false,
      "readonly": true
    }
  },
  {
    "type": "open-modal",
    "label": "Botón Modal",
    "groupType": "action",
    "formJsType": "textfield",
    "officeKey": "open-modal",
    "status": "unsupported",
    "rendererNotes": "No soportado: ElementOpenModalPluginComponent existe pero no está registrado en el mapa. Cae al input de texto.",
    "groups": [
      {
        "name": "general",
        "label": "General",
        "props": [
          {
            "name": "label",
            "label": "Etiqueta del componente",
            "control": "text",
            "helper": "Nombre descriptivo para identificar el componente",
            "default": null,
            "placeholder": "Ejm: Ayuda del sistema"
          },
          {
            "name": "description",
            "label": "Descripción",
            "control": "text",
            "helper": "Descripción de lo que hace el botón modal",
            "default": "",
            "placeholder": "Ejm: Abre ventana con información adicional"
          },
          {
            "name": "disabled",
            "label": "Botón deshabilitado",
            "control": "checkbox",
            "helper": "Si está marcado, el botón estará deshabilitado",
            "default": false,
            "placeholder": ""
          }
        ]
      },
      {
        "name": "button",
        "label": "Configuración del Botón",
        "props": [
          {
            "name": "buttonText",
            "label": "Texto del botón",
            "control": "text",
            "helper": "Texto que aparecerá en el botón que abre el modal",
            "default": null,
            "placeholder": "Ejm: Ver ayuda"
          },
          {
            "name": "buttonStyle",
            "label": "Estilo del botón",
            "control": "select",
            "helper": "Estilo visual del botón",
            "default": "secondary",
            "placeholder": "",
            "options": [
              "Primario",
              "Secundario",
              "Información",
              "Advertencia"
            ]
          }
        ]
      },
      {
        "name": "modal",
        "label": "Configuración del Modal",
        "props": [
          {
            "name": "modalTitle",
            "label": "Título del modal",
            "control": "text",
            "helper": "Título que aparecerá en la cabecera del modal",
            "default": "",
            "placeholder": "Ejm: Información adicional"
          },
          {
            "name": "modalContent",
            "label": "Contenido del modal",
            "control": "textarea",
            "helper": "Contenido que se mostrará dentro del modal",
            "default": "",
            "placeholder": "Ejm: Aquí va la información de ayuda..."
          },
          {
            "name": "modalSize",
            "label": "Tamaño del modal",
            "control": "select",
            "helper": "Tamaño de la ventana modal",
            "default": "md",
            "placeholder": "",
            "options": [
              "Pequeño",
              "Mediano",
              "Grande",
              "Extra grande"
            ]
          },
          {
            "name": "modalComponent",
            "label": "Componente del modal",
            "control": "text",
            "helper": "Identificador del componente que se renderizará en el modal",
            "default": "",
            "placeholder": "Ejm: detalle_producto_modal"
          }
        ]
      }
    ],
    "example": {
      "label": "Ayuda",
      "key": "Ayuda",
      "type": "textfield",
      "typeComponent": "open-modal",
      "idVariable": "6a29cd082cafb0b69561026",
      "general": {
        "label": "Ayuda",
        "description": "",
        "disabled": false
      },
      "button": {
        "buttonText": "Ver ayuda",
        "buttonStyle": "info"
      },
      "modal": {
        "modalTitle": "Instrucciones",
        "modalContent": "Diligencie todos los campos marcados con *",
        "modalSize": "md",
        "modalComponent": ""
      },
      "validate": {},
      "layout": {
        "row": "Row_open_modal"
      },
      "id": "Field_open_modal",
      "attributes": {
        "general": {
          "label": "Ayuda",
          "description": "",
          "disabled": false
        },
        "button": {
          "buttonText": "Ver ayuda",
          "buttonStyle": "info"
        },
        "modal": {
          "modalTitle": "Instrucciones",
          "modalContent": "Diligencie todos los campos marcados con *",
          "modalSize": "md",
          "modalComponent": ""
        },
        "validation": {}
      },
      "properties": {},
      "disabled": false,
      "readonly": false
    }
  },
  {
    "type": "submit",
    "label": "Botón de Envío",
    "groupType": "action",
    "formJsType": "button",
    "officeKey": "submit",
    "status": "supported",
    "rendererNotes": "Lee label, disabled, appearance.buttonStyle, appearance.size, configuration.action y statusControl. confirmMessage, loadingText y resetOnSend se ignoran.",
    "groups": [
      {
        "name": "general",
        "label": "General",
        "props": [
          {
            "name": "label",
            "label": "Etiqueta del botón",
            "control": "text",
            "helper": "Texto que aparecerá en el botón",
            "default": null,
            "placeholder": "Ejm: Enviar formulario"
          },
          {
            "name": "description",
            "label": "Descripción",
            "control": "text",
            "helper": "Descripción de la acción de envío",
            "default": "",
            "placeholder": "Ejm: Envía todos los datos del formulario"
          },
          {
            "name": "disabled",
            "label": "Botón deshabilitado",
            "control": "checkbox",
            "helper": "Si está marcado, el botón estará deshabilitado",
            "default": false,
            "placeholder": ""
          }
        ]
      },
      {
        "name": "configuration",
        "label": "Configuración",
        "props": [
          {
            "name": "action",
            "label": "Acción de envío",
            "control": "text",
            "helper": "Nombre de la acción de envío",
            "default": "submit",
            "placeholder": "Ejm: submit, save, send"
          },
          {
            "name": "actionIdentifier",
            "label": "Identificador de acción",
            "control": "text",
            "helper": "Identificador único de la acción de envío",
            "default": "",
            "placeholder": "Ejm: main_submit"
          },
          {
            "name": "validateBeforeSubmit",
            "label": "Validar antes de enviar",
            "control": "checkbox",
            "helper": "Ejecuta validaciones antes del envío",
            "default": true,
            "placeholder": ""
          },
          {
            "name": "resetOnSend",
            "label": "Reiniciar al enviar",
            "control": "checkbox",
            "helper": "Reinicia el formulario después del envío exitoso",
            "default": false,
            "placeholder": ""
          }
        ]
      },
      {
        "name": "appearance",
        "label": "Apariencia",
        "props": [
          {
            "name": "buttonStyle",
            "label": "Estilo del botón",
            "control": "select",
            "helper": "Estilo visual del botón de envío",
            "default": "primary",
            "placeholder": "",
            "options": [
              "Primario",
              "Éxito",
              "Información"
            ]
          },
          {
            "name": "size",
            "label": "Tamaño del botón",
            "control": "select",
            "helper": "Tamaño del botón de envío",
            "default": "large",
            "placeholder": "",
            "options": [
              "Mediano",
              "Grande"
            ]
          }
        ]
      },
      {
        "name": "behavior",
        "label": "Comportamiento",
        "props": [
          {
            "name": "confirmMessage",
            "label": "Mensaje de confirmación",
            "control": "text",
            "helper": "Mensaje a mostrar antes del envío",
            "default": "",
            "placeholder": "Ejm: ¿Está seguro de enviar el formulario?"
          },
          {
            "name": "loadingText",
            "label": "Texto de carga",
            "control": "text",
            "helper": "Texto que aparece mientras se envía",
            "default": "Enviando...",
            "placeholder": "Ejm: Procesando datos..."
          }
        ]
      },
      {
        "name": "statusControl",
        "label": "Control de Estado",
        "props": [
          {
            "name": "statusVariableKey",
            "label": "Variable de estado (key)",
            "control": "text",
            "helper": "Nombre de la variable de proceso que almacenará el estado. Ejm: control_process_status",
            "default": "",
            "placeholder": "Ejm: control_process_status"
          },
          {
            "name": "statusVariableValue",
            "label": "Valor del estado",
            "control": "text",
            "helper": "Valor que tomará la variable de estado al presionar este botón. Ejm: En revisión, Enviado a subsanación",
            "default": "",
            "placeholder": "Ejm: En revisión"
          }
        ]
      },
      {
        "name": "relaciones",
        "label": "Relaciones",
        "props": [
          {
            "name": "relatedForm",
            "label": "Formulario Relacionado",
            "control": "getForm",
            "helper": "Selecciona el formulario que deseas relacionar con este envío",
            "default": null,
            "placeholder": "Selecciona un formulario para relacionar",
            "options": []
          }
        ]
      }
    ],
    "example": {
      "label": "Enviar solicitud",
      "key": "Enviar_solicitud",
      "type": "button",
      "typeComponent": "submit",
      "idVariable": "6a29cd082cafb0b69561027",
      "general": {
        "label": "Enviar solicitud",
        "description": "",
        "disabled": false
      },
      "configuration": {
        "action": "submit",
        "actionIdentifier": "radicar",
        "validateBeforeSubmit": true,
        "resetOnSend": false
      },
      "appearance": {
        "buttonStyle": "primary",
        "size": "medium"
      },
      "behavior": {
        "confirmMessage": "¿Desea enviar la solicitud?",
        "loadingText": "Enviando..."
      },
      "statusControl": {
        "statusVariableKey": "",
        "statusVariableValue": ""
      },
      "relaciones": {
        "relatedForm": null
      },
      "validate": {},
      "layout": {
        "row": "Row_submit"
      },
      "id": "Field_submit",
      "attributes": {
        "general": {
          "label": "Enviar solicitud",
          "description": "",
          "disabled": false
        },
        "configuration": {
          "action": "submit",
          "actionIdentifier": "radicar",
          "validateBeforeSubmit": true,
          "resetOnSend": false
        },
        "appearance": {
          "buttonStyle": "primary",
          "size": "medium"
        },
        "behavior": {
          "confirmMessage": "¿Desea enviar la solicitud?",
          "loadingText": "Enviando..."
        },
        "statusControl": {
          "statusVariableKey": "",
          "statusVariableValue": ""
        },
        "relaciones": {
          "relatedForm": null
        },
        "validation": {}
      },
      "properties": {},
      "disabled": false,
      "readonly": false
    }
  }
];
