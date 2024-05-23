"use client";
import { motion } from "framer-motion";
import clsx from "clsx";
import Link from "next/link";
import { headerLinks } from "@/constants";
import { useAppStore } from "@/stores/appStore";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { CiLight, CiDark } from "react-icons/ci";
import { useEffect, useState } from "react";

export const NavLinks = () => {
  const { menuOpen, setMenuOpen } = useAppStore((state) => state);
  const path = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  console.log(theme);

  useEffect(() => setMounted(true), []);

  const onChangeTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <div className="ml-auto space-x-3 flex items-center z-50 uppercase">
      <div className="hidden sm:flex items-center space-x-5">
        {headerLinks.map((el, i) => {
          return (
            <Link key={i} className="text-white relative" href={el.href}>
              {el.href === path ? (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 top-full block h-[1px] bg-white w-full"
                />
              ) : null}
              {el.label}
            </Link>
          );
        })}
        {mounted ? (
          <button onClick={onChangeTheme}>
            {theme === "dark" ? (
              <CiLight className="w-6 h-6 text-white" />
            ) : (
              <CiDark className="w-6 h-6 text-white " />
            )}
          </button>
        ) : null}
      </div>
      <div className="sm:hidden flex items-center justify-center">
        <button
          className="group rounded-lg"
          onClick={() => {
            setMenuOpen(menuOpen ? false : true);
          }}
        >
          <div className="flex flex-col items-center justify-items-center gap-1.5">
            {/* Top Bun */}
            <span
              className={clsx(
                "h-0.5 w-7 rounded-full bg-white transition ",
                menuOpen ? "rotate-45 translate-y-2" : ""
              )}
            ></span>
            {/* Meat Patty */}
            <span
              className={clsx(
                "h-0.5 w-7 rounded-full bg-white transition",
                menuOpen ? "scale-x-0" : ""
              )}
            ></span>
            {/* Bottom Bunk */}
            <span
              className={clsx(
                "h-0.5 w-7 rounded-full bg-white",
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              )}
            ></span>
          </div>
        </button>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {}
