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
        Seis habitaciones en tres estilos —Estándar, Superior y Suite con
        Terraza—, dos de cada tipo. Alojamiento solo para mayores de 18
        años, hasta 3 personas por habitación con suplemento. Mínimo 2
        noches (3 en temporada alta y puentes), check-in a partir de las
        16:00.
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
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                <div>
                  <span className="room-card-price">desde {room.priceLow}€/noche</span>
                  <p style={{ margin: "2px 0 0", fontSize: "0.75rem", color: "var(--color-text-muted)" }}>
                    temporada alta {room.priceHigh}€/noche
                  </p>
                </div>
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
