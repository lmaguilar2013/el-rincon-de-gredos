export const ROOMS = [
  {
    slug: "mirador",
    name: "Mirador",
    feature: "Balcón privado con vistas a los picos de Gredos",
    description:
      "Una habitación doble con balcón propio, mesa de piedra y vistas directas a la sierra. Ideal para despertarse con la niebla todavía baja en el valle.",
    price: 95,
    capacity: "2 personas, con posibilidad de cama supletoria",
    image: "/images/habitacion_01.png",
  },
  {
    slug: "chimenea",
    name: "Chimenea",
    feature: "Chimenea propia y bañera de piedra",
    description:
      "La habitación más íntima de la casa: chimenea de leña, bañera de piedra con vistas y vigas de madera vista. Pensada para no salir de ella en todo el fin de semana.",
    price: 120,
    capacity: "2 personas, con posibilidad de cama supletoria",
    image: "/images/habitacion_02.png",
  },
  {
    slug: "robledal",
    name: "Robledal",
    feature: "Camas gemelas, estilo castellano tradicional",
    description:
      "Habitación con dos camas, muros de piedra vista y mobiliario de madera maciza. Cómoda para dos personas que viajan juntas sin compartir cama.",
    price: 85,
    capacity: "2 personas, con posibilidad de cama supletoria",
    image: "/images/habitacion_03.png",
  },
];

export function getRoomBySlug(slug) {
  return ROOMS.find((room) => room.slug === slug);
}
