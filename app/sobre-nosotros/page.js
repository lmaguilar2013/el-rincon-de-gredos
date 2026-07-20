import Image from "next/image";

export const metadata = {
  title: "Conócenos · El Rincón de Gredos",
};

export default function AboutPage() {
  return (
    <section className="section container">
      <span className="eyebrow">Conócenos</span>
      <h1>Nuestra historia</h1>

      <div className="about-photo">
        <Image
          src="/images/hotel.png"
          alt="Fachada de piedra de El Rincón de Gredos, con jardín de lavanda"
          fill
          sizes="(min-width: 768px) 700px, 100vw"
          style={{ objectFit: "cover" }}
        />
      </div>

      <p>
        Esta casa lleva aquí más tiempo que la carretera que lleva hasta
        ella. Piedra sobre piedra, con vistas a Gredos desde cada ventana.
      </p>
      <p>
        La reformamos despacio, sin prisa, para que siguiera pareciendo lo
        que siempre fue: un refugio. Hoy tiene tres habitaciones, una
        chimenea que se enciende en cuanto refresca, y un jardín de lavanda
        que no pedimos permiso para dejar crecer.
      </p>
      <p className="quote">
        &ldquo;Yo soy Laura, y este es mi rincón de Gredos — ahora también el
        tuyo, mientras te quedes.&rdquo;
      </p>
    </section>
  );
}
