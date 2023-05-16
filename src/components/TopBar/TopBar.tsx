import { Link } from "next-intl";
import LanguagePicker from "../LanguagePicker/LanguagePicker";
import NavMenu from "../NavMenu/NavMenu";
import ThemePicker from "../ThemePicker/ThemePicker";
import Image from "next/image";

export default function TopBar() {
  return (
    <div className="fixed top-0 flex z-1 w-full shadow items-center justify-between h-20 p-10">
      <Link href="/" className="">
        <Image width={40} height={40} src="/neco.jpg" alt="a picture of neco arc"/>
      </Link>
      
      <div className="flex space-x-10">
        <NavMenu />
        <LanguagePicker />
      </div>
    </div>
  );
}
