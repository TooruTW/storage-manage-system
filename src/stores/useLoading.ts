import { create } from "zustand";

type LoadingStore = {
  loading: boolean;
  startLoading: () => void;
  endLoading: () => void;
};

const useLoading = create<LoadingStore>((set) => ({
  loading: false,
  startLoading: () => set({ loading: true }),
  endLoading: () => set({ loading: false }),
}));

export default useLoading;