import { create } from "zustand";

type AccountStore = {
  loginState: "success" | "failed" | "checking";
  user: string;
  lastLogin: string;
  setLoginState: (loginState: "success" | "failed" | "checking") => void;
  setUser: (user: string) => void;
  reset: () => void;
};

export const useAccountStore = create<AccountStore>((set) => ({
  loginState: "checking",
  user: "",
  lastLogin: "",
  setLoginState: (loginState) => set({ loginState }),
  setUser: (user) => set({ user }),
  reset: () => set({ loginState: "checking", user: "", lastLogin: "" }),
}));
