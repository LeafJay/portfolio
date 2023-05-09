import "./globals.css";
import Navbar from "../components/Navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar />
        </header>
        <main className="container mx-auto shadow">{children}</main>

      </body>
      <footer className="bg-black text-white">
        Jeremie Allemand
      </footer>
    </html>
  );
}

