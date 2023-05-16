import "./globals.css";
import TopBar from "../../components/TopBar/TopBar";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

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
    <html lang={locale} title="WEB J">
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>

          <header>
            <TopBar />
          </header>
          
          {children}

          <footer className="flex h-60 items-center justify-center">
            Jeremie Allemand
          </footer>

        </NextIntlClientProvider>
      </body>
    </html>
  );
}
