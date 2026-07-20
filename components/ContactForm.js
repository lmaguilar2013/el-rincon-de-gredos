"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="card" style={{ padding: "1.5rem" }}>
        <h3 style={{ margin: "0 0 0.5rem" }}>Gracias por escribirnos</h3>
        <p style={{ margin: 0, color: "var(--color-text-muted)" }}>
          Hemos recibido tu mensaje. Te responderemos en cuanto podamos.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card contact-form">
      <div className="form-field">
        <label htmlFor="nombre">Nombre</label>
        <input id="nombre" name="nombre" type="text" required placeholder="Tu nombre" />
      </div>
      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required placeholder="tu@email.com" />
      </div>
      <div className="form-field">
        <label htmlFor="telefono">Teléfono (opcional)</label>
        <input id="telefono" name="telefono" type="tel" placeholder="+34 600 000 000" />
      </div>
      <div className="form-field">
        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={4}
          placeholder="Cuéntanos qué fechas tienes en mente o cualquier duda que tengas"
        />
      </div>
      <button type="submit" className="btn btn-accent" style={{ width: "100%" }}>
        Enviar mensaje
      </button>
    </form>
  );
}
