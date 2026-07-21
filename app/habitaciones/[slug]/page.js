import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ROOMS, getRoomBySlug } from "@/lib/rooms";
import { IconArrowLeft, IconUsers, IconClock } from "@/components/Icons";

export function generateStaticParams() {
  return ROOMS.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const room = getRoomBySlug(slug);
  return { title: room ? `${room.name} · El Rincón de Gredos` : "Habitación" };
}

export default async function RoomDetailPage({ params }) {
  const { slug } = await params;
  const room = getRoomBySlug(slug);
  if (!room) notFound();

  return (
    <>
      <div className="detail-image">
        <Image
          src={room.image}
          alt={room.name}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <section className="section container">
        <Link
          href="/habitaciones"
          style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.85rem", marginBottom: "1rem", color: "var(--color-text-muted)" }}
        >
          <IconArrowLeft width={16} height={16} />
          Todas las habitaciones
        </Link>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "0.5rem" }}>
          <h1 style={{ margin: 0 }}>{room.name}</h1>
          <span className="room-card-price" style={{ fontSize: "1.1rem" }}>
            desde {room.priceLow}€/noche
          </span>
        </div>

        <p style={{ marginTop: "1rem" }}>{room.description}</p>

        <div className="card" style={{ padding: "1rem 1.25rem", marginBottom: "1rem" }}>
          <p style={{ margin: "0 0 0.5rem", fontSize: "0.8rem", fontWeight: 600, color: "var(--color-primary)" }}>
            Precio por noche
          </p>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem" }}>
            <span>Temporada baja</span>
            <span style={{ fontWeight: 600 }}>{room.priceLow}€</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem", marginTop: "0.4rem" }}>
            <span>Temporada alta</span>
            <span style={{ fontWeight: 600, color: "var(--color-accent)" }}>{room.priceHigh}€</span>
          </div>
        </div>

        <div className="detail-meta">
          <span style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <IconUsers width={18} height={18} />
            {room.capacity}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <IconClock width={18} height={18} />
            Check-in 16h · Check-out 12h
          </span>
        </div>

        <Link href="/contacto" className="btn btn-accent" style={{ width: "100%", textAlign: "center" }}>
          Consultar esta habitación
        </Link>
      </section>
    </>
  );
}
