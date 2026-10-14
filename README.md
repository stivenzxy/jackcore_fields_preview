# Campos dinámicos: previsualizador y guía

Sitio estático (HTML, CSS y JavaScript puro, sin build) que documenta y previsualiza
los tipos de campo del generador de formularios tal como los renderiza el office.

- `index.html`, `styles.css`, `app.js`: la aplicación.
- `catalog.data.js`: catálogo generado. No se edita a mano.
- `build-catalog.js`: regenera el catálogo desde el API del generador.

## Ejecutar localmente

Cualquier servidor estático sirve. Por ejemplo:

```bash
npx serve .
```

También funciona abriendo `index.html` directamente desde el disco.

## Desplegar en Vercel

1. En Vercel, crear un proyecto apuntando a este repositorio.
2. Framework preset: **Other**. Sin build command ni output directory.

## Regenerar el catálogo

El catálogo sale del endpoint `GET /components` del API del generador
(los mismos JSON de `tools/db/variables` y `tools/db/elements` que se siembran en Mongo).

```bash
node build-catalog.js http://<host-del-api-generador>/components
```

También acepta una ruta a un archivo JSON descargado previamente.

Dentro de `build-catalog.js` se mantienen a mano dos cosas que no vienen del API:

- `STATUS`: si el office soporta el tipo (`supported`), muestra solo un mockup (`mock`)
  o no lo soporta y cae al input de texto (`unsupported`).
- `NOTES`: qué propiedades lee realmente el renderer del office para cada tipo.

Cuando se agregue un tipo nuevo al generador o se corrija el renderer, actualizar esas
dos tablas y volver a ejecutar el script. Los tipos sin entrada en `NOTES` se marcan
como `unsupported` y el script lo avisa por consola.

## Estado actual (28 tipos)

| Estado | Tipos |
|---|---|
| Soportado (22) | text, textarea, number, digit, currency, email, tel, datepicker, datetimepicker, checkbox, checkboxList, radioList, select, selectMultiple, editor, file-upload, viewerFile, location, resultCalc, submit, markdown, downloadTemplate |
| Mockup (2) | recaptcha, resultTable |
| No soportado (4) | button-element, open-modal, dynamic-section, dynamic-table-field |

Las secciones dinámicas reales se construyen con los marcadores `startDynamicSection`
y `endDynamicSection`, no con la variable `dynamic-section`.
