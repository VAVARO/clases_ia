# Context & Operational Guide: Repositorio de Clases de IA
> **Docente:** Álvaro Contreras Barrios (Ingeniero Civil Industrial, Mg. Gestión y Políticas Públicas, U. de Chile).  
> **Identidad Visual:** Rigurosamente alineada con `C:\AGY\AVLARO` (Cuaderno Intelectual: sobrio, editorial, académico, sin estridencias).  
> **Propósito:** Hub docente y laboratorio de aprendizaje interactivo en Inteligencia Artificial (conceptos técnicos, talleres in situ con smartphones, lecturas académicas y diapositivas de clase).

---

## 1. Tech Stack y Comandos de Verificación

### Stack Técnico
- **Frontend:** HTML5 semántico, Tailwind CSS (v3 / CDN), Vanilla JavaScript moderno (ES6+).
- **Visualización de Datos:** D3.js (v7) con física de fuerzas balanceada (`d3.forceSimulation`).
- **Iconografía:** Google Material Symbols Outlined (solo íconos utilitarios estrictamente necesarios; cero emojis).
- **Tipografías:**
  - Titulares y nombres: `Playfair Display` (serif humanista).
  - Cuerpo de lectura y UI: `Inter` (sans-serif legible y limpia).
  - Metadatos, badges y código: `JetBrains Mono` (monoespaciado técnico).

### Comandos Clave (Node.js)
```bash
# 1. Empaquetar JSONs en data/data.js (indispensable para funcionamiento offline y web):
node scripts/build_data_bundle.cjs

# 2. Parsear conceptos desde Markdown (conceptos_clave_ia.md -> data/conceptos.json):
node scripts/parse_concepts.cjs

# 3. Validar sintaxis JavaScript de index.html:
node scripts/validate_syntax.cjs

# 4. Auditar y garantizar CERO emojis en todo el proyecto:
node scripts/scan_and_remove_emojis.cjs
```

---

## 2. Arquitectura de Archivos y Flujo de Datos

```
Clases de IA/
├── index.html                   # Interfaz única con Grafo D3.js, Fichas, Ejercicios, Recursos y Drawer
├── CONTEXT.md                   # Esta guía operativa y reglas de ingeniería de contexto
├── AGENTS.md                    # Espejo de reglas operativas para agentes autónomos
├── conceptos_clave_ia.md        # Documento Markdown con los 35 conceptos explicados
├── GenAI Concepts.pdf           # Documento técnico de referencia (Yang et al., 2024 - 2.2 MB)
├── data/
│   ├── conceptos.json           # 35 conceptos técnicos clasificados en 5 categorías
│   ├── ejercicios.json          # 4 talleres prácticos por habilidades con prompts y lanzadores
│   ├── recursos.json            # 61 recursos (30 videos, 26 posts/ensayos, 5 papers/marcos)
│   ├── autores.json             # 12 perfiles y perspectivas de creadores y autores destacados
│   ├── materiales.json          # Presentaciones y diapositivas descargables
│   └── data.js                  # Bundle JS unificado (respaldo offline/CORS para window.AI_REPOSITORY_DATA)
└── scripts/
    ├── build_data_bundle.cjs    # Empaqueta los 5 archivos JSON en data/data.js
    ├── parse_concepts.cjs       # Transforma conceptos_clave_ia.md en data/conceptos.json
    ├── validate_syntax.cjs      # Valida sintaxis de scripts embebidos en index.html
    └── scan_and_remove_emojis.cjs # Auditor de cero emojis en HTML, JSON y JS
```

### Regla de Sincronización de Datos
El usuario **no edita código**. Cuando se agregue, modifique o elimine un concepto, ejercicio o recurso:
1. Modificar el JSON correspondiente en `data/` (o actualizar `conceptos_clave_ia.md` y correr `parse_concepts.cjs`).
2. Ejecutar inmediatamente `node scripts/build_data_bundle.cjs` para actualizar `data/data.js`.
3. Ejecutar `node scripts/scan_and_remove_emojis.cjs` y `node scripts/validate_syntax.cjs`.

---

## 3. Principios de Diseño Editorial y Restricciones Anti-Slop (C:\AGY\AVLARO)

1. **PROHIBICIÓN TOTAL DE EMOJIS:**
   - Cero emojis en HTML, datos JSON, scripts o documentación del repositorio.
   - Todo símbolo debe ser tipográfico institucional o íconos SVG/Material Symbols utilitarios.

2. **CERO CAJAS DENTRO DE CAJAS:**
   - Prohibido anidar contenedores con fondos de color artificiales o bordes dobles.
   - En el panel de lectura (drawer), el ejemplo debe estructurarse mediante un divisor sutil superior (`pt-6 border-t border-border-subtle`), nunca dentro de una caja coloreada o tarjeta gris con borde lateral grueso.
   - Las tarjetas de conceptos deben ser planas, limpias y con padding regular.

3. **TITULACIÓN SOBRIA Y SIN EYEBROWS REDUNDANTES:**
   - Eliminar *eyebrows* de categoría en mayúsculas pequeñas si solo duplican contexto obvio.
   - En el panel lateral, tarjetas y tooltip del grafo: **prohibido mostrar el subtítulo redundante en inglés** cuando el término ya está en el título principal.
   - En la sección del ejemplo, rotular únicamente como **«Ejemplo»** (eliminando textos inflados como *"Ejemplo Práctico en Contexto Real"* e íconos decorativos como bombillas).

4. **PARSEO DE MARKDOWN EN LECTURA (`formatMarkdownText`):**
   - El texto que contenga `**negrita**` en los datos JSON nunca debe mostrarse con asteriscos crudos en la interfaz.
   - Siempre debe procesarse con la función `formatMarkdownText()` para emitir etiquetas semánticas `<strong class="font-semibold text-on-surface">`.
   - Aplica a: definiciones de tarjetas, contenido del drawer, ejemplos y tooltip del grafo.

5. **DISCIPLINA TIPOGRÁFICA Y ESPACIAL:**
   - Paleta de color: Papel cálido `#fcf9f8`, Azul Cobalto `#00357f`, carbón `#1c1b1b` y neutro atenuado `#66625f`.
   - Escala tipográfica unificada: `text-3xl/4xl` (encabezados de sección), `text-2xl` (título de habilidad o drawer), `text-lg` (tarjetas), `text-sm` (cuerpo de lectura, explicaciones) y `text-xs` (metadatos, identificadores `#XX` y monoespaciado).

6. **FOOTER SOBRIO:**
   - Conservar únicamente la autoría limpia: `Álvaro Contreras Barrios` con indicador cobalto y enlaces institucionales. Sin auto-descripciones curriculares redundantes ni menciones a "AI slop".

---

## 4. Estructura de los Componentes Interactivos

### 4.1. Grafo Semántico de Conceptos Relevantes de la IA (D3.js)
- **5 Hubs Centrales:**
  1. `I. Fundamentos` (Azul Cobalto profundo `#00357f`)
  2. `II. Arquitectura` (Celeste técnico `#0284c7`)
  3. `III. Interacción & RAG` (Cian `#0284c7`)
  4. `IV. Sistemas Agénticos` (Índigo `#4338ca`)
  5. `V. Seguridad & Riesgos` (Pizarra carbón `#1e293b`)
- **35 Nodos Satélite:** Relaciones interdisciplinarias calculadas con enlaces semánticos directos.
- **Tooltip Reactivo:** Muestra únicamente el identificador y título (`#XX · Nombre`) y la definición formateada con `formatMarkdownText`, sin subtítulos repetitivos ni categorías intermedias.
- **Física:** Bounding box estricto en cada tick, zoom/paneo fluido (`d3.zoom`) y apertura del drawer al hacer clic en nodos no-hub.

### 4.2. Panel Lateral de Lectura Editorial (Drawer)
- Despliegue lateral derecho con desenfoque de fondo y atajos de teclado (`Esc` para cerrar, `←` y `→` para navegar entre los 35 conceptos).
- Estructura interior:
  - Identificador `#XX` en monoespaciado cobalto.
  - Título principal en Playfair Display.
  - Definición conceptual clara con negritas procesadas.
  - Sección divisoria superior con titular **«Ejemplo»** y explicación contextualizada.

### 4.3. Sección de Ejercicios y Taller Presencial (4 Habilidades)
- Diseñado para uso in situ desde smartphones vía código QR (`/#ejercicios`).
- **Las 4 Habilidades del Emprendedor frente a la IA:**
  1. *Conocimiento Profundo (Deep Knowledge):* Filtro técnico, calidad y detección de fallas sutiles.
  2. *Conocimiento Amplio (Wide Knowledge):* Cultura multidisciplinaria para dar instrucciones precisas y estructuradas.
  3. *Criterio o Gusto (Taste):* Capacidad crítica de curaduría para seleccionar lo único y descartar el cliché masivo.
  4. *Agencia (Agency):* Actitud exploradora para experimentar activamente y probar herramientas de inmediato.
- **Brújula de Selección por Necesidad Cotidiana:**
  - Situación 1: **«Quiero profundizar en mi negocio»** (Conocimiento Profundo).
  - Situación 2: **«Me cuesta vender, explicar el valor de lo mío o los clientes preguntan pero no compran»** (Conocimiento Amplio).
  - Situación 3: **«Quiero definir la estética de mi negocio»** (Criterio o Gusto).
  - Situación 4: **«Quiero automatizar algo en el corto plazo»** (Agencia).
- **Acción Inmediata:** Botón de un toque para copiar prompt (`navigator.clipboard` + vibración háptica `navigator.vibrate`) y accesos directos a ChatGPT, Gemini y WhatsApp.

---

## 5. Protocolo de Verificación Obligatorio para Agentes

Antes de finalizar cualquier intervención en el repositorio:
1. `node scripts/build_data_bundle.cjs` -> Comprobar que `data/data.js` sincronice todas las colecciones.
2. `node scripts/validate_syntax.cjs` -> Verificar que los scripts inline de `index.html` no tengan errores de sintaxis.
3. `node scripts/scan_and_remove_emojis.cjs` -> Confirmar que la cuenta de emojis sea estrictamente 0 en todos los archivos.
4. Inspeccionar visual o estructuralmente que no se hayan introducido cajas anidadas, tamaños de fuente arbitrarios o subtítulos redundantes.
