import { create } from "zustand";

export interface AppStoreTypes {
  menuOpen?: boolean;
  setMenuOpen: (value: boolean) => void;
}

export const useAppStore = create<AppStoreTypes>((set) => ({
  menuOpen: false,

  setMenuOpen: (value: boolean) => {
    set({ menuOpen: value });
  },
}));
