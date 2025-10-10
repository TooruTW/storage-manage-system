import { create } from "zustand";

type AccountStore = {
  isLogin: boolean;
  user: string;
  lastLogin: string;
  setIsLogin: (isLogin: boolean) => void;
  setUser: (user: string) => void;
  setLastLogin: (lastLogin: string) => void;
  reset: () => void;

};

export const useAccountStore = create<AccountStore>((set) => ({
  isLogin: false,
  user: "",
  lastLogin: "",
  setIsLogin: (isLogin) => set({ isLogin }),
  setUser: (user) => set({ user }),
  setLastLogin: (lastLogin) => set({ lastLogin }),
  reset: () => set({ isLogin: false, user: "", lastLogin: "" }),
}));

