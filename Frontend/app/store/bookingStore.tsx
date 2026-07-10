import { create } from "zustand";

interface Seats {
    id:String;
    status: String;
    price: number;

}
interface BookingStore {
  showtimeId: string | null;
  date: string | null;
  time: string | null;
  screen: string | null;
  seats: Seats[];
  totalPrice: number;
  setShowtimeId: (id: string) => void;
  setDate: (date: string) => void;
  setTime: (time: string) => void;
  setScreen: (screen: string) => void;


  toggleSeat: (seat: Seats) => void;
  checkSeat: (seat: Seats) => boolean;
  resetBooking: () => void;
}

 const useBookingStore = create<BookingStore>((set , get) => ({
  showtimeId: null,
  date: null,
  time: null,
  screen: null,
  seats: [],
  totalPrice: 0,

  setShowtimeId: (id) => set({ showtimeId: id }),
  setDate: (date) => set({ date }),
  setTime: (time) => set({ time }),
  setScreen: (screen) => set({ screen }),





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

            return true
          } else {
            return false
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



export default useBookingStore