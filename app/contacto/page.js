import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contacto · El Rincón de Gredos",
};

export default function ContactPage() {
  return (
    <section className="section container">
      <span className="eyebrow">Contacto</span>
      <h1>Escríbenos</h1>
      <p>
        Cuéntanos qué fechas tienes en mente y para cuántas personas, y te
        contestaremos con la disponibilidad y el precio.
      </p>

      <div className="chat-note">
        Formulario de contacto de muestra: los mensajes todavía no se envían
        a ningún correo real, se conectará en una fase posterior.
      </div>

      <ContactForm />
    </section>
  );
}
