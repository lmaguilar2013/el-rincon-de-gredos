import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "El Rincón de Gredos",
  description:
    "Alojamiento rural de piedra en Navaluenga, Sierra de Gredos. Tres habitaciones, chimenea y montaña al otro lado de la ventana.",
};

const AGENT_SHARE_ID =
  "bcbe5a/f8bac38d-f9ce-4124-9d78-1e5322d65a87/2f00a76c-88fe-4141-bb6f-8f59294011e4";

const AGENT_SHARE_STYLES =
  "starting_message_prompts=Tienes+que+iniciar+saludando+dependiendo+del+horario+al+posible+hu%C3%A9sped.&hide_tool_steps=false&hide_file_uploads=false&hide_conversation_list=false&bubble_style=agent&primary_color=%23B96A3D&bubble_icon=star&input_placeholder_text=Escribe+tu+mensaje...&hide_logo=false&hide_description=false";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <script
          defer
          data-relevanceai-share-id={AGENT_SHARE_ID}
          src="https://app.relevanceai.com/embed/chat-bubble.js"
          data-share-styles={AGENT_SHARE_STYLES}
        />
      </body>
    </html>
  );
}
