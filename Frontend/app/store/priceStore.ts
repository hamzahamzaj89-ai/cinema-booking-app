import { create } from "zustand";

export type SeatType = "VIP" | "Premium" | "Standard";

interface PriceStore {
    prices: Record<SeatType, number>;

    setPrices: (prices: Record<SeatType, number>) => void;

    clearPrices: () => void;
}

export const usePriceStore = create<PriceStore>((set) => ({
    prices: {
        VIP: 0,
        Premium: 0,
        Standard: 0,
    },

    setPrices: (prices) => set({ prices }),

    clearPrices: () =>
        set({
            prices: {
                VIP: 0,
                Premium: 0,
                Standard: 0,
            },
        }),
}));