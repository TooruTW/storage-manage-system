import { create } from "zustand";

type TestStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
  incrementByAmount: (amount: number) => void;
  decrementByAmount: (amount: number) => void;
  reset: () => void;
};

export const useTestStore = create<TestStore>((set) => ({
  count: 0,
  reset: () => set({ count: 0 }),
  increment: () =>
    set((state) => ({
      count: state.count + 1,
    })),
  decrement: () =>
    set((state) => ({
      count: state.count - 1,
    })),
  incrementByAmount: (amount) => {
    set((state) => ({
      count: state.count + amount,
    }));
  },
  decrementByAmount: (amount) => {
    set((state) => ({
      count: state.count - amount,
    }));
  },
}));
