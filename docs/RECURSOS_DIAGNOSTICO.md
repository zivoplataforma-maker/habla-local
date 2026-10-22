# Recursos y diagnóstico inicial · 22/10/2026

## Recursos inventariados

- Instrucciones globales de sesión y catálogo de skills globales, del usuario y de plugins. No se encontró AGENTS.md en proyecto/ancestros inspeccionados.
- Skills aplicadas y leídas completas: Sites (flujo local) y Browser; referencia managed-preview. Los recursos de documentos, juegos de criaturas, Supabase y conectores de comunicación no aportan a esta tarea y no se cargaron indiscriminadamente.
- Node 24.19, Python 3.12, Git, node:test, herramientas HTTP/archivos y Pillow. No dependencias npm del proyecto. No Prettier, jsdom, axe, Lighthouse ni navegador móvil físico disponibles. No se instalaron paquetes.
- GitHub: lectura y herramientas de escritura disponibles, pero prohibida la mutación remota en esta fase por instrucción del titular.
- Sites: referencia de preview supervisor y CUA cloud browser para QA local. No registro de Site ni despliegue nuevo. Browser de extensión no expuesto en este entorno; CUA cloud sí funcionó.
- Library y otros conectores disponibles para sus tareas específicas; no necesarios para el código respaldado por Git. No MCP específico del proyecto ni backend de datos.
- Fuentes técnicas primarias consultadas: MDN (manifest, iconos y ciclo de service worker) y ASHA (diferencias dialectales y contrastes). No se aplicaron protocolos clínicos personalizados.

## Estado inicial

Base `33ecf5c`: web estática HTML/CSS/JS con 7 pruebas. La copia anterior tenía cambios editoriales ya publicados pero sin confirmar localmente; se preservó intacta y se clonó una copia nueva para esta fase.

Sin auth, base de datos, funciones de nube, claves o archivos .env detectados. CI GitHub Actions y publicación estática de dist. Progreso localStorage; audio/trazos en memoria. Sin analítica propia ni dependencias de frontend.

Defectos concretos: restauración ausente, lectura inválida silenciosa, actualización automática, caché no acotada a app y metadata PWA incompleta. UX funcional pero sin recorrido visual para niños/adolescentes. Sin pruebas UI previas, evaluación física ni clínica. Estos puntos se abordaron o quedaron delimitados en PLANS.md y VALIDACION.md.

## Límites del diagnóstico

Revisión de código y tests, no pentest externo ni certificación. No se inspeccionaron cuentas o servicios ajenos, ni se revelaron variables secretas. El servidor se probó localmente; la seguridad del hosting GitHub pertenece a su proveedor.

Actualización de autorización: después de terminar la revisión local, el titular indicó «al finalizar actualiza github». Se habilitó esa publicación concreta; el cierre está en PROGRESO_CODEX.md.
