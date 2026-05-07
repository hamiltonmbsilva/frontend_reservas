import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { ThemeProvider } from "../contexts/ThemeContext";

export const metadata = {
  title: "ReservaMB HDS | Sistema Moderno de Reservas",
  description: "Sistema moderno de reservas desenvolvido com Next.js e Django REST API.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-64x64.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon-128x128.png", sizes: "128x128", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}