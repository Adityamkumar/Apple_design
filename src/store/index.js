import { create } from "zustand";

const useMacbookStore = create((set) => ({
  color: "#C0C0C0",
  setColor: (color) => set({ color }),

  scale: 0.08,
  setScale: (scale) => set({ scale }),

  texture:'/videos/feature-1.mp4',
  setTexture: (texture) => set({texture}),

  reset: () => set({color: '#C0C0C0', scale: 0.08, texture: '/videos/feature-1/mp.4'})
}));

export default useMacbookStore