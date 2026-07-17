import { create } from "zustand";
import { ISeat, ISeatByPrice } from "../interface/ISeatLayout";

  


interface BookingStore {
  showtimeId: string | null;
  date: any | null;
  time: any | null;
  screen: any | null;
  seats: ISeatByPrice[];
  discount: number;
  tax: number;
  bookingFee: number;

  setShowtimeId: (id: string) => void;
  setDate: (date: Date) => void;
  setTime: (time: any) => void;
  setScreen: (screen: any) => void;

  getGrandTotal: () => number;
  toggleSeat: (seat: ISeatByPrice) => void;
  checkSeat: (seat: ISeatByPrice) => boolean;
  clearSeats: () => void;

  resetBooking: () => void;
}

const useBookingStore = create<BookingStore>((set, get) => ({
  showtimeId: null,
  date: null,
  time: null,
  screen: null,
  seats: [],
  discount: 0.05,
  tax: 0.02,
  bookingFee: 2,

  setShowtimeId: (id) => set({ showtimeId: id }),
  setDate: (date) => {
    get().clearSeats()
        set({ date })
  },
  setTime: (time) => {
    get().clearSeats()
      set({ time })
  },
  setScreen:  (screen) => {
    get().clearSeats()
     set({ screen })
  } ,

  getGrandTotal: () => {
    const totalPrice = get().seats.reduce(
      (total, seat) => total + seat.price,
      0,
    );

    const grandTotal =
      totalPrice + get().bookingFee + get().tax - get().discount;

    return grandTotal;
  },

  toggleSeat: (seat) =>
    set((state) => {
      const isSelected = state.seats.includes(seat);

      return {
        seats: isSelected
          ? state.seats.filter((s) => s.seatId !== seat.seatId)
          : [...state.seats, seat],
      };
    }),






  checkSeat: (seat) => {
    const seats = get().seats;

    if (seats.includes(seat)) {
      return true;
    } else {
      return false;
    }
  },


  clearSeats: () => {

        set({
          seats: []
        })

  },


  resetBooking: () =>
    set({
      showtimeId: null,
      date: null,
      time: null,
      screen: null,
      seats: [],
    }),
}));

export default useBookingStore;
