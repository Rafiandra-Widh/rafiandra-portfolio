import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Effects from "@/components/Effects";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const favicon =
  "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3E%3Crect%20width='64'%20height='64'%20rx='15'%20fill='%2316140f'/%3E%3Ctext%20x='32'%20y='43'%20font-family='Poppins,Arial,sans-serif'%20font-weight='700'%20font-size='29'%20letter-spacing='-1'%20fill='%23f6f4f0'%20text-anchor='middle'%3ER%3Ctspan%20fill='%23e7d44e'%3EW%3C/tspan%3E%3C/text%3E%3C/svg%3E";

export const metadata: Metadata = {
  title: "Rafiandra Widhiansyah — Product Designer",
  description:
    "Product designer with seven years across health, fintech, EdTech and gov-tech. I don't just design screens; I design outcomes.",
  icons: { icon: favicon },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&family=Newsreader:ital,opsz,wght@1,18..72,400;1,18..72,500&family=Poppins:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>
          <Effects />
          <Nav />
          <main
            style={{
              paddingTop: 68, minHeight: "100vh", display: "flex", flexDirection: "column",
              background: "var(--bg)", color: "var(--text)", transition: "background .5s ease, color .5s ease",
            }}
          >
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
