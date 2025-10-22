import { create } from "zustand";

type AccountStore = {
  isLogin: boolean | "checking";
  user: string;
  lastLogin: string;
  setIsLogin: (isLogin: boolean) => void;
  setUser: (user: string) => void;
  reset: () => void;
};

export const useAccountStore = create<AccountStore>((set) => ({
  isLogin: "checking",
  user: "",
  lastLogin: "",
  setIsLogin: (isLogin) => set({ isLogin }),
  setUser: (user) => set({ user }),
  reset: () => set({ isLogin: "checking", user: "", lastLogin: "" }),
}));
