"use client";

import clsx from "clsx";
import Link from "next/link";
import styles from "./styles.module.css";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const MENU_ITEM = [
    { name: "Works", href: "/works" },
    { name: "About", href: "/about" },
  ];

  const pathname = usePathname();

  return (
    <nav className="fixed top-0 flex z-1 w-full space-x-8 p-8 shadow bg-white">
      <div className="flex-grow">
        <i>
          <Link href="/">Home</Link>
        </i>
      </div>

      <span>En</span>
      {MENU_ITEM.map((item, idx) => {
        const isActive = pathname.startsWith(item.href);
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

function NavItem({
  name,
  href,
  active,
}: {
  name: string;
  href: string;
  active: boolean;
}) {
  return (
    <div
      className={clsx({
        [styles.navItem]: true,
        [styles.active]: active,
      })}
    >
      <Link href={href}>{name}</Link>
    </div>
  );
}
