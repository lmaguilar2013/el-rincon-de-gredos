import Link from "next/link";

export const metadata = {
  title: "Preguntas frecuentes · El Rincón de Gredos",
};

const FAQS = [
  {
    question: "¿Cuál es el precio?",
    answer:
      "Depende de la habitación y la temporada: desde 85€/noche en temporada baja hasta 160€/noche en temporada alta. Puedes ver el precio de cada habitación en la página de Habitaciones.",
  },
  {
    question: "¿Qué incluye?",
    answer:
      "La habitación con baño privado, ropa de cama y toallas. No incluye desayuno ni actividades organizadas — de momento somos solo alojamiento.",
  },
  {
    question: "¿Hay wifi?",
    answer:
      "Sí, wifi gratuito en las habitaciones y zonas comunes, aunque te animamos a desconectar todo lo que puedas mientras estés con nosotros.",
  },
  {
    question: "¿Aceptan mascotas?",
    answer:
      "De momento no. El Rincón de Gredos está pensado para estancias solo de adultos, sin mascotas ni niños.",
  },
  {
    question: "¿Cómo reservar?",
    answer:
      "Escríbenos desde la página de Contacto con las fechas que tienes en mente y para cuántas personas, y te confirmamos disponibilidad y precio.",
  },
  {
    question: "¿Qué hacer cerca?",
    answer:
      "Estamos en pleno Valle del Tiétar, a las puertas de la Sierra de Gredos: rutas de senderismo, gargantas y piscinas naturales, pueblos con encanto alrededor y buena gastronomía serrana.",
  },
];

export default function FaqPage() {
  return (
    <section className="section container">
      <span className="eyebrow">Ayuda</span>
      <h1>Preguntas frecuentes</h1>
      <p>
        ¿No encuentras lo que buscas?{" "}
        <Link href="/contacto" style={{ color: "var(--color-accent)", fontWeight: 600 }}>
          Escríbenos
        </Link>{" "}
        y te respondemos directamente.
      </p>

      <div>
        {FAQS.map((faq) => (
          <details key={faq.question} className="faq-item">
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
