import { create } from "zustand";

export interface AppStoreTypes {
  menuOpen: boolean;
  error: string | null;
  success: string | null;
  setMenuOpen: (value: boolean) => void;
  setError: (value: string | null) => void;
  setSuccess: (value: string | null) => void;
}

export const useAppStore = create<AppStoreTypes>((set) => ({
  menuOpen: false,
  error: null,
  success: null,

  setMenuOpen: (value: boolean) => {
    set({ menuOpen: value });
  },

  setError: (value: string | null) => {
    set({ error: value });
  },

  setSuccess: (value: string | null) => {
    set({ success: value });
  },
}));
