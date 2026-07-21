export const ROOMS = [
  {
    slug: "mirador-1",
    name: "Mirador I",
    feature: "Balcón privado con vistas a los picos de Gredos",
    description:
      "Una habitación doble con balcón propio, mesa de piedra y vistas directas a la sierra. Ideal para despertarse con la niebla todavía baja en el valle.",
    priceLow: 95,
    priceHigh: 130,
    capacity: "2 personas, con posibilidad de cama supletoria",
    image: "/images/habitacion_01.png",
  },
  {
    slug: "mirador-2",
    name: "Mirador II",
    feature: "Balcón privado con vistas a los picos de Gredos",
    description:
      "Hermana gemela de Mirador I: mismo balcón con vistas a la sierra, ideal para dos habitaciones reservadas por el mismo grupo.",
    priceLow: 95,
    priceHigh: 130,
    capacity: "2 personas, con posibilidad de cama supletoria",
    image: "/images/habitacion_01.png",
  },
  {
    slug: "chimenea-1",
    name: "Chimenea I",
    feature: "Chimenea propia y bañera de piedra",
    description:
      "La habitación más íntima de la casa: chimenea de leña, bañera de piedra con vistas y vigas de madera vista. Pensada para no salir de ella en todo el fin de semana.",
    priceLow: 120,
    priceHigh: 160,
    capacity: "2 personas, con posibilidad de cama supletoria",
    image: "/images/habitacion_02.png",
  },
  {
    slug: "chimenea-2",
    name: "Chimenea II",
    feature: "Chimenea propia y bañera de piedra",
    description:
      "Igual de acogedora que Chimenea I, con su propia chimenea de leña y bañera de piedra.",
    priceLow: 120,
    priceHigh: 160,
    capacity: "2 personas, con posibilidad de cama supletoria",
    image: "/images/habitacion_02.png",
  },
  {
    slug: "robledal-1",
    name: "Robledal I",
    feature: "Camas gemelas, estilo castellano tradicional",
    description:
      "Habitación con dos camas, muros de piedra vista y mobiliario de madera maciza. Cómoda para dos personas que viajan juntas sin compartir cama.",
    priceLow: 85,
    priceHigh: 115,
    capacity: "2 personas, con posibilidad de cama supletoria",
    image: "/images/habitacion_03.png",
  },
  {
    slug: "robledal-2",
    name: "Robledal II",
    feature: "Camas gemelas, estilo castellano tradicional",
    description:
      "Segunda habitación de camas gemelas, con el mismo estilo castellano tradicional que Robledal I.",
    priceLow: 85,
    priceHigh: 115,
    capacity: "2 personas, con posibilidad de cama supletoria",
    image: "/images/habitacion_03.png",
  },
];

export function getRoomBySlug(slug) {
  return ROOMS.find((room) => room.slug === slug);
}
