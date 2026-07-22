import { create } from "zustand";

interface FavoriteStore {
  favorites: Set<string>;

  setFavorites: (movieIds: string[]) => void;

  addFavorite: (movieId: string) => void;

  removeFavorite: (movieId: string) => void;

  isFavorite: (movieId: string) => boolean;

  clearFavorites: () => void;
}

const useFavoriteStore = create<FavoriteStore>((set, get) => ({
  favorites: new Set(),

  setFavorites: (movieIds) =>
    set({
      favorites: new Set(movieIds),
    }),

  addFavorite: (movieId) =>
    set((state) => ({
      favorites: new Set(state.favorites).add(movieId),
    })),

  removeFavorite: (movieId) =>
    set((state) => {
      const favorites = new Set(state.favorites);
      favorites.delete(movieId);

      return { favorites };
    }),

  isFavorite: (movieId) => get().favorites.has(movieId),

  clearFavorites: () =>
    set({
      favorites: new Set(),
    }),
}));

export default useFavoriteStore;