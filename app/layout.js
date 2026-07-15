import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "El Rincón de Gredos",
  description:
    "Alojamiento rural de piedra en Navaluenga, Sierra de Gredos. Tres habitaciones, chimenea y montaña al otro lado de la ventana.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
