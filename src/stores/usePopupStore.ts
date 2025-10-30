import { create } from "zustand";

type TPopupStore = {
  isOpen: boolean;
  content: React.ReactNode;
  setContent: (content: React.ReactNode) => void;
  reset: () => void;
};

export const usePopupStore = create<TPopupStore>((set) => ({
  isOpen: false,
  content: null,
  setContent: (content) => set({ isOpen: true, content: content }),
  reset: () => set({ isOpen: false, content: null }),
}));
