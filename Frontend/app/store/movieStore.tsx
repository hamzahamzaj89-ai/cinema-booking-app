import { create } from "zustand";

export interface Movie {
  id: string;
  title: string;
  logo: any;
  description: string;
  genres: string[];
  runtime: string;
  rating: number;
}

interface MovieStore {
  selectedMovie: Movie | null;

  setSelectedMovie: (movie: Movie) => void;

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