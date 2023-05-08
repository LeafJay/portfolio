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
        <main className="container mx-auto">{children}</main>
      </body>
    </html>
  );
}

