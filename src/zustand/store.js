import { create } from "zustand";

const useStore = create((set) => ({
  currentService: null,
  setCurrentService: (newData) => set({ currentService: newData }),
  serviceUser: null,
  setServiceUser: (newData) => set({ serviceUser: newData }),
  //   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  //   removeAllBears: () => set({ bears: 0 }),
  //   updateBears: (newBears) => set({ bears: newBears }),
}));

export default useStore;
