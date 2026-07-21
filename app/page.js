import Image from "next/image";
import Link from "next/link";
import { ROOMS } from "@/lib/rooms";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-image">
          <Image
            src="/images/entorno.png"
            alt="Entrada de El Rincón de Gredos, con la sierra al fondo"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
          <div className="hero-overlay" />
          <div className="hero-content">
            <h1>El Rincón de Gredos</h1>
            <p className="tagline">La montaña de cerca, el fuego encendido</p>
            <Link href="/contacto" className="btn btn-accent">
              Contáctanos
            </Link>
          </div>
        </div>
      </section>

      <section className="section container">
        <p>
          Una casa de piedra al pie de la sierra, con la chimenea siempre
          lista y las montañas al otro lado de la ventana. Tres habitaciones,
          un jardín de lavanda y Navaluenga esperando fuera.
        </p>
      </section>

      <section className="section container">
        <span className="eyebrow">El entorno</span>
        <h2>Sierra de Gredos</h2>
        <div
          className="room-card-image"
          style={{ height: "220px", borderRadius: "12px", overflow: "hidden" }}
        >
          <Image
            src="/images/paisaje.png"
            alt="Paisaje de la Sierra de Gredos al amanecer"
            fill
            sizes="(min-width: 768px) 700px, 100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>

      <section className="section container">
        <div className="room-mini">
          <div className="room-mini-image">
            <Image
              src="/images/avatar_laura.png"
              alt="Laura, anfitriona de El Rincón de Gredos"
              fill
              sizes="84px"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <p className="quote" style={{ margin: "0 0 0.4rem" }}>
              &ldquo;Yo soy Laura, y este es mi rincón de Gredos.&rdquo;
            </p>
            <Link
              href="/sobre-nosotros"
              style={{ color: "var(--color-accent)", fontWeight: 600, fontSize: "0.9rem" }}
            >
              Conócenos →
            </Link>
          </div>
        </div>
      </section>

      <section className="section container">
        <span className="eyebrow">Alojamiento</span>
        <h2>Nuestras habitaciones</h2>
        <div className="room-grid">
          {ROOMS.map((room) => (
            <Link key={room.slug} href={`/habitaciones/${room.slug}`} className="card">
              <div className="room-card-image">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  sizes="(min-width: 768px) 340px, 100vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="room-card-body">
                <h3 style={{ margin: "0 0 0.25rem" }}>{room.name}</h3>
                <p style={{ margin: "0 0 0.5rem", fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
                  {room.feature}
                </p>
                <span className="room-card-price">desde {room.priceLow}€/noche</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
