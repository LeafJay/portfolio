"use client";

import {useTranslations} from 'next-intl';
import { usePathname } from "next-intl/client";
import NavItem from "./NavItem";

export default function NavMenu() {
   
  const t = useTranslations("NavMenu") 

  const MENU_ITEMS = [
    { name: t("works.name"), href: "/works" },
    { name: t("about.name"), href: "/about" },
  ];

  const pathname = usePathname();

  return (
    <nav className="flex space-x-10">
      {MENU_ITEMS.map((item, idx) => {
        const isActive = pathname.startsWith(item.href);
        console.log(isActive)
        return (
          <NavItem
            name={item.name}
            href={item.href}
            key={idx}
            active={isActive}
          />
        );
      })}
    </nav>
  );
}
