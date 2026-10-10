# Clases de IA: Inteligencia Artificial desde el Sur del Mundo

Repositorio docente, marco conceptual y entorno interactivo de aprendizaje en Inteligencia Artificial Generativa y Sistemas Agénticos, desarrollado por Álvaro Contreras Barrios.

---

## Estructura del Repositorio

El proyecto integra cuatro módulos pedagógicos articulados sobre una interfaz web única, accesible y libre de dependencias complejas:

1. **Conceptos de IA (35 conceptos):**
   - Mapa interactivo de nodos y relaciones impulsado por **D3.js** (`d3.forceSimulation`), clasificado en cinco familias semánticas:
     - I. Fundamentos (9 conceptos)
     - II. Arquitectura (6 conceptos)
     - III. Interacción & RAG (8 conceptos)
     - IV. Sistemas Agénticos (4 conceptos)
     - V. Seguridad & Riesgos (8 conceptos)
   - Panel lateral editorial (*slide-over drawer*) con definiciones rigurosas, ejemplos prácticos de contexto real y vinculación directa a materiales de estudio pertinentes.

2. **Taller de Ejercicios (4 habilidades):**
   - Cuatro dinámicas de indagación guiada y prompts socráticos para auditar, formular y dirigir herramientas de IA desde la práctica de negocios:
     - *01. Conocimiento Profundo (Deep Knowledge):* Auditoría técnica y control de calidad operativa.
     - *02. Conocimiento Amplio (Wide Knowledge):* Diagnóstico comercial y dirección estratégica.
     - *03. Criterio o Gusto (Taste):* Criterio visual, voz de marca y diseño publicitario sin clichés.
     - *04. Agencia (Agency):* Plan de microexperimento y prueba operativa en 48 horas.
   - Lanzadores directos a ChatGPT, Claude, Gemini y DeepSeek, con copiado en un clic y previsualización completa.

3. **Biblioteca Curada de Recursos (72 recursos):**
   - 47 videos de YouTube verificados y 25 ensayos y análisis de Substack seleccionados con rigor técnico.
   - Vinculación a los conceptos del programa y navegación agrupada por 12 perfiles y perspectivas de autores destacados.

4. **Materiales de la Charla:**
   - Presentación oficial y diapositivas descargables en formato PDF.

---

## Arquitectura Técnica

- **Frontend:** HTML5 semántico, Tailwind CSS (v3 / CDN), Vanilla JavaScript moderno (ES6+).
- **Visualización de Datos:** D3.js (v7).
- **Iconografía:** Google Material Symbols Outlined (iconos utilitarios, cero emojis).
- **Tipografías:** *Playfair Display* (titulares), *Inter* (lectura) y *JetBrains Mono* (metadatos y código).
- **Datos centralizados:** Almacenados en `data/*.json` y empaquetados en `data/data.js` para funcionamiento sin servidor (*offline-first* o vía protocolo `file://`).

---

## Ejecución Local y Scripts de Mantenimiento

Para visualizar la plataforma en un navegador web:

```bash
# Opción 1: Abrir directamente en el navegador
# Doble clic sobre index.html o abrir vía tu navegador preferido.

# Opción 2: Servir localmente (opcional)
npx serve .
```

### Comandos de Compilación y Calidad (Node.js)

```bash
# 1. Empaquetar JSONs en data/data.js tras modificar datos:
node scripts/build_data_bundle.cjs

# 2. Validar sintaxis JavaScript de index.html:
node scripts/validate_syntax.cjs

# 3. Auditar cumplimiento estricto de cero emojis:
node scripts/scan_and_remove_emojis.cjs
```

---

## Autor

**Álvaro Contreras Barrios**  
Ingeniero Civil Industrial & Mg. en Gestión y Políticas Públicas, Universidad de Chile.  
LinkedIn: [Álvaro Contreras Barrios](https://www.linkedin.com/in/%C3%A1lvaro-contreras-barrios/)
