import { create } from "zustand";

interface BookingStore {

    movieId: string | null;

    dateIndex: number;

    screenIndex: number;

    timeIndex: number;

    setMovieId: (movieId: string | null) => void;

    setDateIndex: (index: number) => void;

    setScreenIndex: (index: number) => void;

    setTimeIndex: (index: number) => void;

    resetBooking: () => void;

}

export const useIndexStore = create<BookingStore>((set) => ({

    movieId: null,

    dateIndex: 0,

    screenIndex: 0,

    timeIndex: 0,

    setMovieId: (movieId) => {


         set({ movieId  })
    },
        

    setDateIndex: (dateIndex) =>
        set({ dateIndex , timeIndex : 0, screenIndex:0 }),

    setScreenIndex: (screenIndex) =>
        set({ screenIndex , timeIndex: 0 }),

    setTimeIndex: (timeIndex) =>
        set({ timeIndex }),

    resetBooking: () =>
        set({

            movieId: null,

            dateIndex: 0,

            screenIndex: 0,

            timeIndex: 0,

        }),

}));