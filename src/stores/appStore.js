import { create } from "zustand";

export const useAppStore = create((set) => ({
  menuOpen: null,
  setMenuOpen: (value) => {
    set({ menuOpen: value });
  },
}));
