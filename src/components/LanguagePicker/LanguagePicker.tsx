"use client";

import { Link, useLocale } from "next-intl";
import { useState } from "react";
import { usePathname } from "next-intl/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";


export default function LanguagePicker() {
  const [isLanguageMenuOpen, setLanguageMenuOpen] = useState(false);
  const locale = useLocale();
  const pathname = usePathname();
  const locales = process.env.locales?.split(" ") || [];

  return (
    <div>
      <div className="flex space-x-1 items-center" onClick={() => setLanguageMenuOpen(!isLanguageMenuOpen)}>
        <FontAwesomeIcon icon={faGlobe}/> 
        <button >
          {locale.toUpperCase()}
        </button>
      </div>
      {isLanguageMenuOpen && (
        <div className="flex flex-col fixed shadow theme--colors">
          {locales.map((l: string) => (
            <Link key={l} className="p-2" href={pathname} locale={l}>
              {l.toUpperCase()}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
