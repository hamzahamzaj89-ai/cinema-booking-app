import { create } from "zustand";
import { IShowTime } from "../interface/IShowTime";


interface MovieStore {
  selectedMovie: IShowTime | null;

  setSelectedMovie: (movie: IShowTime) => void;

  clearSelectedMovie: () => void;
}

 const useMovieStore = create<MovieStore>((set) => ({
  selectedMovie: null,

  setSelectedMovie: (movie) =>
    set({
      selectedMovie: movie,
    }),

  clearSelectedMovie: () =>
    set({
      selectedMovie: null,
    }),
}));



export default useMovieStore