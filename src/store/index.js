import { create } from "zustand";

const useMacbookStore = create((set) => ({
  color: "#C0C0C0",
  setColor: (color) => set({ color }),

  scale: 0.08,
  setScale: (scale) => set({ scale }),

  reset: () => set({color: '#C0C0C0', scale: 0.08})
}));

export default useMacbookStore