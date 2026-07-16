import { create } from "zustand";

export interface User {
  _id: string;
  name: string;
  email: string;
  profileImage?: string;
}

interface UserStore {
  user: User | null;

  favourites: string[];

  setUser: (user: User | null) => void;

  addFavourite: (movieId: string) => void;

  removeFavourite: (movieId: string) => void;

  toggleFavourite: (movieId: string) => void;

  setFavourites: (movieIds: string[]) => void;

  clearUser: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,

  favourites: [],

  setUser: (user) =>
    set({
      user,
    }),

  addFavourite: (movieId) =>
    set((state) => ({
      favourites: [...state.favourites, movieId],
    })),

  removeFavourite: (movieId) =>
    set((state) => ({
      favourites: state.favourites.filter((id) => id !== movieId),
    })),

  toggleFavourite: (movieId) =>
    set((state) => {
      const exists = state.favourites.includes(movieId);

      return {
        favourites: exists
          ? state.favourites.filter((id) => id !== movieId)
          : [...state.favourites, movieId],
      };
    }),

  setFavourites: (movieIds) =>
    set({
      favourites: movieIds,
    }),

  clearUser: () =>
    set({
      user: null,
      favourites: [],
    }),
}));