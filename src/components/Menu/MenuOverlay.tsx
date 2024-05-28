"use client";

import { useAppStore } from "@/stores/appStore";
import Link from "next/link";
import { motion } from "framer-motion";
import { headerLinks } from "@/constants";
import { CiDark, CiLight } from "react-icons/ci";
import { useTheme } from "next-themes";

export const MenuOverlay = () => {
  const { menuOpen, setMenuOpen } = useAppStore<any>((state) => state);
  const { theme, setTheme } = useTheme();

  return menuOpen ? (
    <motion.div
      initial={{ opacity: 0, y: 150 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
      exit={{ opacity: 0, y: 150 }}
      className="absolute left-0 top-0 h-full w-full z-10 bg-black bg-opacity-50 backdrop-blur-sm text-white"
    >
      <div className="sticky top-[100px] w-full p-10 text-xl space-y-5 font-semibold flex flex-col">
        <Link
          onClick={() => {
            setMenuOpen(false);
          }}
          href={"/"}
          className="sm:hidden"
        >
          Home
        </Link>
        {headerLinks.map((el, i) => {
          return (
            <Link
              onClick={() => {
                setMenuOpen(false);
              }}
              key={i}
              href={el.href}
            >
              {el.label}
            </Link>
          );
        })}
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === "dark" ? (
            <CiLight className="w-6 h-6" />
          ) : (
            <CiDark className="w-6 h-6 text-white" />
          )}
        </button>
      </div>
    </motion.div>
  ) : null;
};
