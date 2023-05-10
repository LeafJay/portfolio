
import "./globals.css";
import TopBar from "../../components/TopBar/TopBar";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { ReactNode} from "react";
import Providers from "@/components/Providers/Providers";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html 
      lang={locale} 
      title="WEB J"
      suppressHydrationWarning={true}
    >
      <body className="theme--colors">
        <Providers>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <header>
              <TopBar />
            </header>
            <main className="container mx-auto theme--colors">
              {children}
            </main>
            <footer>
              Jeremie Allemand
            </footer>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
