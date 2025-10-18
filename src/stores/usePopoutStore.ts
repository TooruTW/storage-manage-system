import { create } from "zustand";

type TPopoutStore = {
  isOpen: boolean;
  content: React.ReactNode;
  setContent: (content: React.ReactNode) => void;
  reset: () => void;

};

export const usePopoutStore = create<TPopoutStore>((set) => ({
  isOpen: false,
  content: null,
  setContent: (content) => set({ isOpen: true, content: content }),
  reset: () => set({ isOpen: false, content: null }),
}));

