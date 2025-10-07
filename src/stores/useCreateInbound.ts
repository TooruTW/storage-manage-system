import { create } from "zustand";
import { CreateInbound } from "@/components/views/CreateView/CreateInbound/type";
import { getCreateInboundData } from "@/components/views/CreateView/CreateInbound/TableBox/Table/data";

type CreateInboundStore = {
  createInbound: CreateInbound[];
  updateCreateInbound: (index: number, updateInbound: CreateInbound) => void;
  resetCreateInbound: () => void;
  saveCreateInbound: () => void;
  addCreateInbound: (newInbound: CreateInbound) => void;
  removeCreateInbound: (index: number) => void;
};

const useCreateInbound = create<CreateInboundStore>((set, get) => ({
  createInbound: getCreateInboundData(),
  addCreateInbound: (newInbound: CreateInbound) =>
    set((state) => ({
      createInbound: [newInbound, ...state.createInbound],
    })),
  removeCreateInbound: (index: number) =>
    set((state) => ({
      createInbound: state.createInbound.filter((_, i) => i !== index),
    })),
  updateCreateInbound: (index: number, updateInbound: CreateInbound) =>
    set((state) => ({
      createInbound: state.createInbound.map((inbound, i) =>
        i === index ? updateInbound : inbound
      ),
    })),
  resetCreateInbound: () => set({ createInbound: [] }),
  saveCreateInbound: () => {
    localStorage.setItem("createInbound", JSON.stringify(get().createInbound));
  },
}));

export default useCreateInbound;
