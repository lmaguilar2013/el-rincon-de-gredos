import ThreeDPhotoCarousel from "@/components/ThreeDCarousel";

export const metadata = {
  title: "Galería · El Rincón de Gredos",
};

function optimized(path, width = 1200) {
  return `/_next/image?url=${encodeURIComponent(path)}&w=${width}&q=75`;
}

const GALLERY_IMAGES = [
  { src: optimized("/images/hotel.png"), alt: "Fachada de piedra de El Rincón de Gredos" },
  { src: optimized("/images/entorno.png"), alt: "Entrada de la casa con la sierra al fondo" },
  { src: optimized("/images/paisaje.png"), alt: "Paisaje de la Sierra de Gredos al amanecer" },
  { src: optimized("/images/habitacion_01.png"), alt: "Habitación Mirador" },
  { src: optimized("/images/habitacion_02.png"), alt: "Habitación Chimenea" },
  { src: optimized("/images/habitacion_03.png"), alt: "Habitación Robledal" },
];

export default function GalleryPage() {
  return (
    <section className="section container">
      <span className="eyebrow">Galería</span>
      <h1>La casa en imágenes</h1>
      <p>Arrastra para girar el carrusel, o toca una foto para verla en grande.</p>
      <ThreeDPhotoCarousel images={GALLERY_IMAGES} />
    </section>
  );
}
