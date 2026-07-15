# Brand Book — El Rincón de Gredos

Identidad visual y verbal para la web de El Rincón de Gredos, alojamiento rural en Navaluenga (Ávila), Sierra de Gredos.

Este documento se basa en el análisis del logo existente (`logo.png` / `logo_seal.png`) y del material fotográfico disponible (`hotel.png`, `entorno.png`, `paisaje.png`, `habitacion_01/02/03.png`, `avatar_laura.png`).

---

## 1. Esencia de marca

**Qué es:** una casa de piedra en la Sierra de Gredos, reformada con materiales nobles (piedra, madera, terracota), rodeada de bosque y montaña. No es un hotel de cadena: es un refugio con anfitriona (Laura), jardín de lavanda, chimenea, bañera de piedra y vistas a picos graníticos.

**Arquetipo:** El Cuidador / El Explorador tranquilo — calidez doméstica + naturaleza salvaje al alcance de la mano.

**Palabras que la definen:** auténtico, cálido, sereno, artesanal, arraigado, acogedor, atemporal.

**Palabras que NO la definen:** lujoso (en sentido ostentoso), minimalista frío, urbano, corporativo, moderno-industrial.

**Frase guía:** *"La montaña de cerca, el fuego encendido."*

---

## 2. Paleta de colores

Extraída directamente del sello/logo (azul pizarra, verde bosque, crudo, ocres) y reforzada por las fotografías (piedra, terracota, madera, luz dorada).

### Colores principales

| Nombre | Hex | Uso |
|---|---|---|
| 🟦 Azul Pizarra | `#2C4356` | Color de marca principal. Texto de cabecera, logo, footer, botones oscuros. Viene directo del anillo y las letras del sello. |
| 🟩 Verde Gredos | `#3E5C42` | Color secundario. Naturaleza, pinos, acentos de sección, iconografía, estados hover. |
| 🟧 Terracota | `#B96A3D` | Color de acento / CTA. Tejas, suelo de barro, calidez. Úsalo para botones de "Reservar" y llamadas a la acción. |

### Colores de apoyo

| Nombre | Hex | Uso |
|---|---|---|
| 🟫 Piedra | `#CBB89A` | Fondos secundarios, tarjetas, separadores. Tomado de los muros de piedra. |
| 🟨 Ocre / Bronce | `#B08D57` | Detalles decorativos, ramas de laurel del sello, líneas finas, iconos pequeños. |
| 🕯️ Ámbar cálido | `#E3A75C` | Acentos de "atmósfera" (velas, luz interior) — usar con moderación, nunca como color de texto. |

### Neutros

| Nombre | Hex | Uso |
|---|---|---|
| Crudo / Hueso | `#F3EEE1` | Fondo principal de la web (el crema del sello). Sustituye al blanco puro. |
| Carbón | `#2A2622` | Texto de cuerpo (nunca negro puro — mantiene la calidez). |
| Gris Niebla | `#8A9099` | Texto secundario, metadatos, placeholders. |

### Reglas de uso

- **Fondo por defecto:** Crudo `#F3EEE1`, nunca blanco puro `#FFFFFF` — mantiene la calidez del papel/piedra.
- **Texto por defecto:** Carbón `#2A2622` sobre Crudo.
- **Jerarquía de acento:** Terracota para acciones (botones, enlaces activos) → Verde Gredos para elementos de naturaleza/categorías → Azul Pizarra para cabeceras y estructura.
- Evitar más de 2 colores de acento saturados en una misma pantalla.
- El Ámbar solo en detalles pequeños (iconos de chimenea/vela, hover sutil), nunca en bloques grandes.

---

## 3. Tipografía

El logo usa una versión de caja alta con carácter de sello antiguo/rótulo tallado — orgánica, no geométrica. La web debe mantener ese carácter en titulares y ganar en calidez y legibilidad en el cuerpo de texto.

### Titulares — **Fraunces**
Serif contemporánea con alma artesanal (contraste suave, detalles casi "tallados en madera"). Google Fonts, variable, gratuita.
- Uso: H1, H2, nombres de habitaciones, citas destacadas, el propio wordmark si se rehace en HTML.
- Peso: 500–600 para títulos grandes; versión *italic* para citas o frases evocadoras ("La montaña de cerca...").

### Cuerpo de texto — **Work Sans**
Sans-serif humanista, muy legible en pantalla, sin frialdad corporativa. Google Fonts, variable, gratuita.
- Uso: párrafos, formularios, navegación, botones, precios.
- Pesos: 400 (texto), 500 (labels/botones), 600 (énfasis).

### Combinación
```
H1/H2 → Fraunces, 600, azul pizarra o carbón
H3/labels → Work Sans, 600, mayúsculas con letter-spacing amplio (estilo "sello")
Cuerpo → Work Sans, 400, carbón
Citas/frases de bienvenida → Fraunces italic, verde Gredos o terracota
```

Import sugerido:
```html
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400..700;1,400..700&family=Work+Sans:wght@400;500;600&display=swap" rel="stylesheet">
```

---

## 4. Tono de voz

**Cómo habla la marca:** como Laura hablándole a un huésped al que ya conoce un poco. Cercano, en segunda persona ("tú"), sin fórmulas de cadena hotelera ("nuestras instalaciones", "unidades de alojamiento"). Frases cortas, sensoriales, con ritmo pausado.

**Principios:**
1. **Cercanía real, no impostada.** Firmar textos como Laura cuando tenga sentido ("Te preparo la chimenea antes de que llegues").
2. **Concreto antes que grandilocuente.** Mejor "piedra vista y bañera con vistas a Gredos" que "experiencia de lujo incomparable".
3. **La naturaleza como protagonista silenciosa.** Mencionar el entorno (Sierra de Gredos, Navaluenga, robledales, ríos) con naturalidad, no como eslogan turístico.
4. **Ritmo pausado.** Frases que respiran; evitar la urgencia agresiva ("¡Reserva YA!"). Preferible: "Quedan pocas fechas libres este otoño."

**Sí decimos:** "rincón", "refugio", "piedra", "fuego", "silencio", "a tu ritmo", "como en casa".
**Evitamos:** "unidades", "experiencia premium", "solución de alojamiento", "¡oferta imperdible!", tecnicismos de marketing.

**Ejemplo de copy (hero):**
> *El Rincón de Gredos*
> Una casa de piedra al pie de la sierra, con la chimenea siempre lista y las montañas al otro lado de la ventana.

**Ejemplo de CTA:** "Reserva tu rincón" en vez de "Reservar ahora".

---

## 5. Estilo fotográfico

Basado en el material ya generado (`hotel.png`, `entorno.png`, `paisaje.png`, habitaciones y avatar):

- **Luz natural, preferentemente dorada** (amanecer/atardecer) en exteriores; luz cálida de vela/lámpara en interiores nocturnos. Evitar luz de flash o fluorescente fría.
- **Paleta de color coherente con la marca:** tonos tierra, verdes de bosque, piedra beige, blancos rotos — nunca colores saturados tipo "postal turística".
- **Textura en primer plano:** piedra, madera envejecida, lino, lana — la cámara puede acercarse a detalles (mantas, tejas, jaboncitos, leña) para transmitir artesanía.
- **Composición:** mezcla de planos abiertos de paisaje/montaña con planos íntimos de interior. Evitar simetría perfecta de catálogo; preferir encuadres naturales, ligeramente habitados (una puerta entreabierta, una silla movida).
- **Presencia humana discreta:** Laura u otros huéspedes pueden aparecer, pero sin posados forzados — gestos cotidianos (preparar algo, mirar al paisaje).
- **Sin marcas de agua ni saturación artificial.** Si se retocan fotos, mantener grano/realismo, evitar el aspecto "renderizado" o excesivamente pulido.
- **Formato:** horizontal panorámico para hero/paisajes, vertical para retratos y detalles de habitación (como `avatar_laura.png`).

---

## 6. Uso del logo

- El sello (`logo_seal.png`) funciona como isotipo circular: favicon, sello en fotos, redes sociales, sellos de confirmación de reserva.
- El logo completo (`logo.png`) se usa en cabecera de la web y documentos formales.
- **Espacio de seguridad:** dejar alrededor del sello un margen mínimo equivalente al ancho de las letras "GREDOS" del propio sello.
- **Fondos permitidos:** Crudo `#F3EEE1`, fotografías con contraste suficiente, blanco.
- **Evitar:** estirar el sello (debe ser siempre circular), colocarlo sobre fondos de color similar al azul pizarra o verde (pierde contraste), añadir sombras o efectos 3D adicionales.
- En negativo (fondos oscuros/foto), usar una versión monocroma crema del trazo si se produce en el futuro.

---

## 7. Aplicación rápida (resumen para desarrollo)

```css
:root {
  --color-bg: #F3EEE1;       /* crudo */
  --color-text: #2A2622;     /* carbón */
  --color-text-muted: #8A9099;
  --color-primary: #2C4356;  /* azul pizarra */
  --color-secondary: #3E5C42;/* verde gredos */
  --color-accent: #B96A3D;   /* terracota — CTAs */
  --color-stone: #CBB89A;
  --color-bronze: #B08D57;
  --color-amber: #E3A75C;

  --font-heading: 'Fraunces', serif;
  --font-body: 'Work Sans', sans-serif;
}
```

- Botón primario (reservar): fondo `--color-accent`, texto crudo, hover a `#a25a30`.
- Header/footer: fondo `--color-primary`, texto crudo.
- Tarjetas de habitación: fondo `--color-stone` al 20% de opacidad sobre crudo, título en Fraunces azul pizarra.
