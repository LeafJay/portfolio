import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav></nav>
        </header>
        <main className="container mx-auto">{children}</main>
      </body>
    </html>
  );
}

function NavItem({
  text,
  href,
  active,
}: {
  text: string;
  href: string;
  active: boolean;
}) { 
  return(
  <div>
    <Link href={href} className={`nav-item${active ? "-active" : "" }`}>
      <h1>{text}</h1>
    </Link>
  </div>
  )
}
