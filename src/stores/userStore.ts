import { create } from "zustand";

export const useAppStore = create((set) => ({
  user: null,

  setUser: (value: any) => {
    set({ user: value });
  },
}));
