import { create } from "zustand";
import { CreateOutbound } from "@/components/views/CreateView/CreateOutbound/type";
import { getData } from "@/components/views/CreateView/CreateOutbound/TableBox/Table/data";

type CreateOutboundStore = {
  createOutbound: CreateOutbound[];
  setCreateOutbound: (createOutbound: CreateOutbound[]) => void;
  addCreateOutbound: (newOutbound: CreateOutbound) => void;
  removeCreateOutbound: (index: number) => void;
  updateCreateOutbound: (index: number, updateOutbound: CreateOutbound) => void;
  resetCreateOutbound: () => void;
  saveCreateOutbound: () => void;
};

const useCreateOutbound = create<CreateOutboundStore>((set, get) => ({
  createOutbound: getData(),

  setCreateOutbound: (createOutbound) => set({ createOutbound }),

  addCreateOutbound: (newOutbound: CreateOutbound) =>
    set((state) => ({
      createOutbound: [newOutbound, ...state.createOutbound],
    })),

  removeCreateOutbound: (index: number) =>
    set((state) => ({
      createOutbound: state.createOutbound.filter((_, i) => i !== index),
    })),

  updateCreateOutbound: (index: number, updateOutbound: CreateOutbound) =>
    set((state) => ({
      createOutbound: state.createOutbound.map((outbound, i) =>
        i === index ? updateOutbound : outbound
      ),
    })),

  resetCreateOutbound: () => set({ createOutbound: [] }),
  saveCreateOutbound: () => {
    localStorage.setItem(
      "createOutbound",
      JSON.stringify(get().createOutbound)
    );
  },
}));

export default useCreateOutbound;
