# AGENTS.md - Reglas y Convenciones del Proyecto (Clases de IA)

> Este archivo define las restricciones inquebrantables, la arquitectura y los comandos de trabajo para cualquier modelo o agente que opere en este repositorio.

## 1. Reglas Absolutas (Hard Constraints)

- **CERO EMOJIS:** Prohibido insertar cualquier tipo de emoji (caritas, banderas, cohetes, bombillas, etc.) en HTML, JS, CSS, JSON o Markdown. Utilizar tipografía limpia o iconos utilitarios de Google Material Symbols.
- **CERO CAJAS DENTRO DE CAJAS:** No anidar contenedores con fondos de color (`bg-surface-alt`, bordes gruesos o tarjetas dentro de tarjetas). Las secciones se separan con líneas divisorias sobrias (`border-t border-border-subtle`).
- **NO EYEBROWS NI SUBTÍTULOS REDUNDANTES:**
  - No usar categorías en mayúsculas pequeñas como *eyebrow* si duplican información obvia.
  - En tarjetas, drawer y tooltip: no colocar el subtítulo en inglés redundante debajo del título principal.
  - En la sección del ejemplo, usar únicamente el encabezado **«Ejemplo»** (no "Ejemplo Práctico en Contexto Real").
- **PARSEO DE MARKDOWN:** Los textos con negritas (`**palabra**`) deben procesarse con la función `formatMarkdownText()` para que no se muestren los asteriscos crudos.
- **IDENTIDAD DE MARCA:** Estilo `C:\AGY\AVLARO`:
  - Paleta: Papel cálido `#fcf9f8`, Cobalto `#00357f`, Carbón `#1c1b1b`, Muted `#66625f`.
  - Tipografías: `Playfair Display` (títulos), `Inter` (lectura), `JetBrains Mono` (código/números).
- **DATOS CENTRALIZADOS:** No escribir contenido estático directamente en el HTML. Todo concepto, ejercicio, recurso o material se almacena en `data/*.json` y se compila a `data/data.js`.

## 2. Comandos de Trabajo

```bash
# Empaquetar JSONs en data/data.js (obligatorio tras modificar datos):
node scripts/build_data_bundle.cjs

# Validar sintaxis JavaScript de index.html:
node scripts/validate_syntax.cjs

# Auditar cero emojis:
node scripts/scan_and_remove_emojis.cjs
```

## 3. Estado Actual de Componentes

- **Conceptos:** 35 conceptos divididos en 5 categorías / hubs.
- **Grafo D3.js:** 5 hubs (`I. Fundamentos`, `II. Arquitectura`, `III. Interacción & RAG`, `IV. Sistemas Agénticos`, `V. Seguridad & Riesgos`) con 35 nodos satélite.
- **Taller de Ejercicios:** 4 habilidades del emprendedor:
  1. *Conocimiento Profundo:* "Quiero profundizar en mi negocio".
  2. *Conocimiento Amplio:* "Me cuesta vender, explicar el valor de lo mío o los clientes preguntan pero no compran".
  3. *Criterio o Gusto:* "Quiero definir la estética de mi negocio".
  4. *Agencia:* "Quiero automatizar algo en el corto plazo".
- **Recursos:** 55 recursos de aprendizaje curados (30 videos de YouTube verificados y 25 posts/ensayos de Substack) vinculados con rigor técnico únicamente a los conceptos directamente pertinentes (los conceptos sin material específico omiten la sección en el drawer sin rellenos artificiales) y a 12 perfiles de creadores y autores destacados (`data/autores.json`).
- **Materiales:** 1 presentación oficial correspondiente a la charla.
