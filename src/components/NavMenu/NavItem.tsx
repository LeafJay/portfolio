import styles from "./styles.module.css";
import clsx from "clsx";
import {Link} from "next-intl";

export default function NavItem({
  name,
  href,
  active,
}: {
  name: string;
  href: string;
  active: boolean;
}) {
  return (
    <div className={active ? "active" : ""}>
      <Link href={href}>{name}</Link>
    </div>
  );
}
