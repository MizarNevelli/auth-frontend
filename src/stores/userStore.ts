import { create } from "zustand";

interface UserTypes {
  id: string;
  email: string;
  userName: string;
  accessToken?: string;
}
export interface UserStoreTypes {
  user?: UserTypes | null;
  setUser: (value: any) => void;
}
export const useUserStore = create<UserStoreTypes>((set) => ({
  user: null,

  setUser: (value: UserTypes) => {
    set({ user: value });
  },
}));
