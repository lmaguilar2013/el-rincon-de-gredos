# PRD — Web de El Rincón de Gredos

**Proyecto:** Sitio web con reservas para El Rincón de Gredos, alojamiento rural de piedra en Navaluenga (Sierra de Gredos, Ávila).
**Naturaleza del proyecto:** ejercicio/práctica — no es un lanzamiento a producción real (sin dominio propio, sin datos de contacto reales, sin páginas legales en esta fase).
**Identidad visual:** definida en [`Brand_Book.md`](./Brand_Book.md) (paleta, tipografía Fraunces/Work Sans, tono de voz, estilo fotográfico). Este PRD no repite esas reglas, las da por vinculantes.

---

## 1. Objetivo del producto

La web debe cumplir tres funciones a la vez, sin priorizar una sobre otra:
1. **Reservas directas** — permitir reservar sin pasar por Booking/Airbnb.
2. **Escaparate de marca** — transmitir la identidad cálida y rural definida en el Brand Book.
3. **Presencia/SEO** — página con contenido suficiente para posicionar el alojamiento.

## 2. Público objetivo

Adultos en general (parejas, grupos de amigos) — **no está orientado a familias con niños ni a mascotas** (ver política en §5). No es un público de senderismo técnico ni de turismo masivo; busca desconexión, calma y entorno de montaña.

## 3. Estructura del alojamiento

3 habitaciones dobles independientes, reservables por separado:

| Habitación (propuesta) | Basada en foto | Rasgo principal |
|---|---|---|
| **Mirador** | `habitacion_01.png` | Balcón privado con vistas a los picos de Gredos |
| **Chimenea** | `habitacion_02.png` | Chimenea, bañera de piedra y ambiente de spa rústico |
| **Robledal** | `habitacion_03.png` | Camas gemelas, estilo tradicional castellano |

*Nombres pendientes de confirmación por la propietaria; usados como contenido de trabajo.*

- **Capacidad:** 2 personas base por habitación, con posibilidad de cama supletoria (habitación exacta a definir).
- **Precio:** precio orientativo por noche, visible en cada habitación (cifras reales pendientes; se usarán marcadores de ejemplo).
- **Check-in / check-out:** 16:00 / 12:00. Estancia mínima: 2 noches.
- **Política:** solo adultos — no se admiten niños ni mascotas.
- **Servicios incluidos:** ninguno más allá del alojamiento (sin desayuno, sin actividades organizadas).
- **Cancelación:** sin política formal todavía — pendiente de definir antes de producción real.

## 4. Sitemap

```
/                    Inicio
                      — Hero con identidad de marca
                      — Presentación breve del alojamiento
                      — Bloque breve de entorno/Sierra de Gredos (sin mapa)
                      — Extracto de "Sobre nosotros" con enlace a la página completa
                      — Aviso destacado de las 3 habitaciones con CTA a Reservar
                      — Footer con datos de contacto (placeholder)

/habitaciones         Listado de las 3 habitaciones con foto, nombre, rasgo principal y precio orientativo

/habitaciones/[slug]  Detalle de una habitación (Mirador / Chimenea / Robledal)
                      — Galería de la habitación
                      — Descripción, capacidad, precio
                      — CTA a Reservar

/sobre-nosotros        Historia de marca (relato propuesto, ver §7) + foto de Laura
                       (avatar_laura.png)

/reservar              Página donde vive el agente conversacional de reservas (ver §6)
```

Contacto **no** es una página independiente: vive en el footer global (visible en todas las páginas) y es el propio agente conversacional quien resuelve dudas de contacto/ubicación en `/reservar`.

## 5. Contenido pendiente de la propietaria

Estos datos se completan con marcadores de ejemplo (placeholders) y quedan señalados para sustituir antes de cualquier publicación real:

- Teléfono / WhatsApp / email de contacto (inventados para este ejercicio).
- Precios reales por habitación y temporada.
- Capacidad exacta y condiciones de cama supletoria.
- Nombres definitivos de las habitaciones.
- Historia real de Laura y la casa (si en algún momento se quiere sustituir el relato de marca).

## 6. Sistema de reservas — Agente conversacional

En lugar de un formulario o calendario visual tradicional, las reservas se gestionan mediante un **agente conversacional (chat)** embebido en `/reservar`.

**Capacidades del agente:**
- Consultar disponibilidad de las 3 habitaciones para un rango de fechas.
- Informar del precio orientativo correspondiente.
- Responder preguntas generales sobre el alojamiento (servicios, políticas de check-in/out, política de solo-adultos, ubicación general) usando el contenido de la web como base de conocimiento.
- Crear la reserva de forma **instantánea**: al confirmar fechas, habitación y datos del huésped, el agente escribe la reserva directamente en la base de datos y bloquea esas fechas para esa habitación.

**Fuera del alcance del agente (v1):**
- No cobra ni gestiona pagos (no hay pasarela de pago).
- No envía emails ni notificaciones automáticas de confirmación.
- No sincroniza disponibilidad con plataformas externas (la web es el único canal de venta, así que no hay riesgo de overbooking cruzado).

**Nota de diseño técnico (para la siguiente fase):** al ser reserva instantánea sin panel de administración, el sistema debe evitar condiciones de carrera (dos huéspedes reservando la misma habitación/fecha a la vez) al escribir en la base de datos.

## 7. Relato de marca — "Sobre nosotros" (propuesta de contenido)

> Borrador de partida, editable por la propietaria; sigue el tono de voz del Brand Book (cercano, en "tú", voz de Laura).

*"Esta casa lleva aquí más tiempo que la carretera que lleva hasta ella. Piedra sobre piedra, con vistas a Gredos desde cada ventana. La reformamos despacio, sin prisa, para que siguiera pareciendo lo que siempre fue: un refugio. Hoy tiene tres habitaciones, una chimenea que se enciende en cuanto refresca, y un jardín de lavanda que no pedimos permiso para dejar crecer. Yo soy Laura, y este es mi rincón de Gredos — ahora también el tuyo, mientras te quedes."*

## 8. Alcance técnico heredado (de conversación previa)

- **Frontend:** Next.js / React.
- **Backend / datos:** Supabase (Postgres).
- **Hosting:** Vercel, sin dominio propio (se usará el subdominio por defecto de Vercel — es un ejercicio de práctica).
- **Pagos:** ninguno en esta fase.
- **Agente conversacional:** requiere un proveedor de LLM con capacidad de tool-calling contra Supabase (consulta de disponibilidad/precio, creación de reserva). Proveedor a decidir en la fase de diseño técnico.
- **Idioma:** solo español (sin internacionalización en v1).

## 9. Explícitamente fuera de alcance (v1)

- Pagos o señales online.
- Sincronización con Booking/Airbnb/iCal.
- Panel de administración propio (gestión de reservas se hace directamente en Supabase).
- Emails o notificaciones automáticas.
- Páginas legales (Aviso Legal, Privacidad, Cookies).
- Multi-idioma.
- Mapa embebido o dirección exacta.
- Dominio propio.
- Desayuno, actividades o cualquier servicio adicional al alojamiento.

## 10. Riesgos y notas abiertas

- Al no haber páginas legales ni dominio, **esta web no está lista para producción real** tal cual definida — es válida como ejercicio/demo. Antes de publicar de verdad haría falta: política de cancelación formal, Aviso Legal/Privacidad/Cookies, contacto real y dominio.
- La reserva instantánea vía agente sin panel de administración significa que, para cambios operativos (bloquear fechas, cancelar una reserva), la propietaria deberá operar directamente sobre Supabase.
- Los nombres de habitación, precios y capacidades son contenido de trabajo — deben confirmarse antes de dar la web por terminada.
