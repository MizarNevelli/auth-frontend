"use client";
import Link from "next/link";
import { NavLinks } from "../Menu/MenuNavLinks";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();

  return (
    <header
      className={clsx(
        "fixed z-40 left-0 top-0 flex items-stretch w-full border-b border-gray-300 px-5 sm:px-10 bg-black bg-opacity-50 backdrop-blur-sm",
        path === "/" ? "mix-blend-color-dodge" : ""
      )}
    >
      <Link href={"/"}>
        <div className="relative flex items-center w-[80px] sm:w-[100px] h-[100px]">
          LOGO
        </div>
      </Link>
      <NavLinks />
    </header>
  );
};
export default Header;
