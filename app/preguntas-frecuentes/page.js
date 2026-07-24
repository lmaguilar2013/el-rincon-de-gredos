import Link from "next/link";

export const metadata = {
  title: "Preguntas frecuentes · El Rincón de Gredos",
};

const FAQS = [
  {
    question: "¿Cuál es el precio?",
    answer:
      "Depende del tipo de habitación y la temporada: Estándar desde 75€/noche (110€ en temporada alta), Superior desde 95€/noche (135€ en temporada alta) y Suite con Terraza desde 120€/noche (170€ en temporada alta). Temporada alta es julio, agosto, Navidades, Semana Santa y puentes. Añadir una 3ª persona cuesta 30€/noche más.",
  },
  {
    question: "¿Qué incluye?",
    answer:
      "La habitación con baño privado, ropa de cama, toallas y amenities, más acceso a las zonas comunes: salón con chimenea y Smart TV, cocina totalmente equipada para que te prepares tus propias comidas, jardín, terraza, barbacoa, lavandería y aparcamiento privado (3 plazas dentro del recinto, más espacio libre fuera). No incluye desayuno preparado ni actividades organizadas.",
  },
  {
    question: "¿Hay wifi?",
    answer:
      "Sí, fibra óptica de alta velocidad y gratuita en habitaciones y zonas comunes — 150 Mbps de subida y 100 Mbps de bajada, de sobra para trabajar o hacer videollamadas.",
  },
  {
    question: "¿Aceptan mascotas?",
    answer:
      "No. Al alquilarse por habitaciones individuales, no admitimos mascotas, para garantizar la tranquilidad de todos los huéspedes. Tampoco se admiten menores de 18 años: es un alojamiento exclusivo para adultos.",
  },
  {
    question: "¿Cómo reservar?",
    answer:
      "Lo más rápido es hablar con nuestro asistente virtual (el icono de chat abajo a la derecha, en cualquier página): dile las fechas y para cuántas personas y te confirma disponibilidad y precio al momento. También puedes escribirnos desde la página de Contacto. El pago se realiza 100% por adelantado y de forma segura con Stripe. Cancelación gratuita hasta 14 días antes de la llegada (con menos antelación se retiene un 30%); se solicita además una fianza de 50€ por habitación, reembolsada tras el check-out.",
  },
  {
    question: "¿Qué hacer cerca?",
    answer:
      "Navaluenga tiene piscinas naturales en el río Alberche a pocos minutos, rutas de senderismo hacia la Sierra de Gredos y por la ribera del Alberche, campo de golf municipal, bici de montaña, piragüismo y kayak en el embalse de El Burguillo, y buena gastronomía local: chuletón de Ávila, patatas revolconas y vinos D.O. Cebreros.",
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
