export interface IShowTime {
  _id: string;
  tmdbId: number;
  title: string;
  overview: string;
  posterPath: string;
  backdropPath: string;
  runtime: number;
  genres: string[];
  language: string;
  releaseDate: Date;
  rating: number;
  voteCount: number;
  trailerKey: string;
  cast: string[];
  director: string;
  status: "now_showing"| "coming_soon";
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}