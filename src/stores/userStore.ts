import { create } from "zustand";
export interface UserStoreTypes {
  user?: any;
  setUser: (value: any) => void;
}
export const useAppStore = create<UserStoreTypes>((set) => ({
  user: null,

  setUser: (value: any) => {
    set({ user: value });
  },
}));
