import { create } from "zustand";

interface Seats {
  id: String;
  status: String;
  price: number;
}
interface BookingStore {
  showtimeId: string | null;
  date: any | null;
  time: any | null;
  screen: any | null;
  seats: Seats[];
  discount: number;
  tax: number;
  bookingFee: number;

  setShowtimeId: (id: string) => void;
  setDate: (date: string) => void;
  setTime: (time: string) => void;
  setScreen: (screen: string) => void;

  getGrandTotal: () => number;
  toggleSeat: (seat: Seats) => void;
  checkSeat: (seat: Seats) => boolean;
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
  setDate: (date) => set({ date }),
  setTime: (time) => set({ time }),
  setScreen: (screen) => set({ screen }),

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
          ? state.seats.filter((s) => s.id !== seat.id)
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
