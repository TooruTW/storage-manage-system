import { create } from "zustand";

type LoadingStore = {
  isLoading: boolean;
  startLoading: () => void;
  endLoading: () => void;
};

const useLoading = create<LoadingStore>((set) => ({
  isLoading: false,
  startLoading: () => set({ isLoading: true }),
  endLoading: () => set({ isLoading: false }),
}));

export default useLoading;