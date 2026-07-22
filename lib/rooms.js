export const ROOMS = [
  {
    slug: "estandar-1",
    name: "Estándar I",
    feature: "Cama de matrimonio y baño privado con ducha",
    description:
      "Habitación doble con cama de matrimonio, baño privado (ducha, secador de pelo y amenities), decoración rústica y armarios empotrados.",
    priceLow: 75,
    priceHigh: 110,
    capacity: "2 adultos, hasta 3 con suplemento de 30€/noche",
    image: "/images/habitacion_03.png",
  },
  {
    slug: "estandar-2",
    name: "Estándar II",
    feature: "Cama de matrimonio y baño privado con ducha",
    description:
      "Hermana gemela de Estándar I: mismo baño privado con ducha, secador y amenities, y la misma decoración rústica.",
    priceLow: 75,
    priceHigh: 110,
    capacity: "2 adultos, hasta 3 con suplemento de 30€/noche",
    image: "/images/habitacion_03.png",
  },
  {
    slug: "superior-1",
    name: "Superior I",
    feature: "Cama King Size y vistas panorámicas",
    description:
      "Habitación doble con cama de matrimonio King Size, baño privado completo en suite, vistas panorámicas al entorno de Navaluenga y detalles de bienvenida.",
    priceLow: 95,
    priceHigh: 135,
    capacity: "2 adultos, hasta 3 con suplemento de 30€/noche",
    image: "/images/habitacion_01.png",
  },
  {
    slug: "superior-2",
    name: "Superior II",
    feature: "Cama King Size y vistas panorámicas",
    description:
      "Igual de luminosa que Superior I, con cama King Size, baño en suite y las mismas vistas panorámicas al entorno de Navaluenga.",
    priceLow: 95,
    priceHigh: 135,
    capacity: "2 adultos, hasta 3 con suplemento de 30€/noche",
    image: "/images/habitacion_01.png",
  },
  {
    slug: "suite-terraza-1",
    name: "Suite con Terraza I",
    feature: "Sala de estar integrada y terraza privada",
    description:
      "Habitación premium de amplio espacio, cama de matrimonio, baño de lujo en suite, sala de estar integrada y acceso directo a una terraza privada amueblada.",
    priceLow: 120,
    priceHigh: 170,
    capacity: "2 adultos, hasta 3 con suplemento de 30€/noche",
    image: "/images/habitacion_02.png",
  },
  {
    slug: "suite-terraza-2",
    name: "Suite con Terraza II",
    feature: "Sala de estar integrada y terraza privada",
    description:
      "Segunda Suite con Terraza, con el mismo baño de lujo, sala de estar integrada y terraza privada amueblada que su gemela.",
    priceLow: 120,
    priceHigh: 170,
    capacity: "2 adultos, hasta 3 con suplemento de 30€/noche",
    image: "/images/habitacion_02.png",
  },
];

export function getRoomBySlug(slug) {
  return ROOMS.find((room) => room.slug === slug);
}
