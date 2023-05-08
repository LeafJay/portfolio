
'use client'

import Link from "next/link";
import { usePathname } from "next/navigation"


export default function NavBar() {


  const MENU_ITEM = [
    {name : "Works", href : "/works/"},
    {name : "About", href : "/about/"},
  ]

  const pathname = usePathname();

  return(
    <nav className="flex w-full space-x-8">
      <i className="flex-grow">Icon</i>

      {MENU_ITEM.map((item,idx) => {
        
        const isActive = pathname.startsWith(item.href)

        return (
          <NavItem name={item.name} href={item.href} key={idx} active={isActive}/>
        );
      })}
    </nav>
  )
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
  return(
  <div>
    <Link href={href} className={`nav--item${active ? "__active" : "" }`}>
      {name}
    </Link>
  </div>
  )
}
