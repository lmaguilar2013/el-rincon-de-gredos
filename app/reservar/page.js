import { IconArrowRight } from "@/components/Icons";

export const metadata = {
  title: "Reservar · El Rincón de Gredos",
};

export default function BookPage() {
  return (
    <section className="section container">
      <span className="eyebrow">Reservar</span>
      <h1>Reserva con nuestro asistente</h1>

      <div className="chat-note">
        Vista previa de la interfaz. El asistente todavía no está conectado
        a la disponibilidad real — la lógica de reservas se desarrollará en
        una fase técnica posterior.
      </div>

      <div className="chat-window">
        <div className="chat-bubble assistant">
          Hola, soy el asistente de El Rincón de Gredos. ¿Qué fechas tienes
          en mente?
        </div>
        <div className="chat-bubble user">
          2 noches en agosto, para 2 personas
        </div>
        <div className="chat-bubble assistant">
          Chimenea y Mirador están libres esas fechas. Chimenea desde
          120€/noche. ¿Reservo Chimenea?
        </div>
      </div>

      <div className="chat-input-row">
        <div className="chat-input">Escribe tu mensaje…</div>
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: "var(--color-accent)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            color: "#fff",
          }}
        >
          <IconArrowRight width={18} height={18} />
        </div>
      </div>
    </section>
  );
}
