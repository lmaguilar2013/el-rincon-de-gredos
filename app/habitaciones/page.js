import Image from "next/image";
import Link from "next/link";
import { ROOMS } from "@/lib/rooms";

export const metadata = {
  title: "Habitaciones · El Rincón de Gredos",
};

export default function RoomsPage() {
  return (
    <section className="section container">
      <span className="eyebrow">Alojamiento</span>
      <h1>Nuestras habitaciones</h1>
      <p>
        Tres habitaciones dobles, cada una con su propio carácter. Solo
        adultos, mínimo 2 noches, check-in a partir de las 16:00.
      </p>
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
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="room-card-price">desde {room.price}€/noche</span>
                <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--color-primary)" }}>
                  Ver detalle →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
