import ContactForm from "@/components/ContactForm";
import { IconPhone, IconMail, IconMapPin } from "@/components/Icons";

export const metadata = {
  title: "Contacto · El Rincón de Gredos",
};

const MAP_SRC =
  "https://www.google.com/maps?q=Navaluenga,+%C3%81vila,+Espa%C3%B1a&output=embed";

export default function ContactPage() {
  return (
    <section className="section container">
      <span className="eyebrow">Contacto</span>
      <h1>Escríbenos</h1>
      <p>
        Cuéntanos qué fechas tienes en mente y para cuántas personas, y te
        contestaremos con la disponibilidad y el precio.
      </p>

      <div className="contact-details">
        <a href="tel:+34611222333" className="contact-detail">
          <IconPhone width={18} height={18} />
          +34 611 222 333
        </a>
        <a href="mailto:hola@elrincondegredos.com" className="contact-detail">
          <IconMail width={18} height={18} />
          hola@elrincondegredos.com
        </a>
        <span className="contact-detail">
          <IconMapPin width={18} height={18} />
          Navaluenga, Ávila · Sierra de Gredos
        </span>
      </div>

      <div className="map-wrapper">
        <iframe
          src={MAP_SRC}
          title="Ubicación de El Rincón de Gredos en Navaluenga, Ávila"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="chat-note">
        Formulario de contacto de muestra: los mensajes todavía no se envían
        a ningún correo real, se conectará en una fase posterior.
      </div>

      <ContactForm />
    </section>
  );
}
