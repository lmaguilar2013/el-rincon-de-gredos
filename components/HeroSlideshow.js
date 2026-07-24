"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const SLIDES = [
  { src: "/images/entorno.png", alt: "Entrada de El Rincón de Gredos, con la sierra al fondo" },
  { src: "/images/hotel.png", alt: "Fachada de piedra de El Rincón de Gredos" },
  { src: "/images/paisaje.png", alt: "Paisaje de la Sierra de Gredos al amanecer" },
  { src: "/images/habitacion_01.png", alt: "Habitación Superior con vistas panorámicas" },
  { src: "/images/habitacion_02.png", alt: "Suite con Terraza, chimenea y baño de lujo" },
  { src: "/images/habitacion_03.png", alt: "Habitación Estándar de estilo rústico" },
];

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % SLIDES.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {SLIDES.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          priority={i === 0}
          sizes="100vw"
          style={{
            objectFit: "cover",
            opacity: i === index ? 1 : 0,
            transition: "opacity 1.2s ease",
          }}
        />
      ))}
    </>
  );
}
