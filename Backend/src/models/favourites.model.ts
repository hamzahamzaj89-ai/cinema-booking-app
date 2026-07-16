import { Schema, model, Document } from "mongoose";

export interface IFavoriteMovie extends Document {
  clerkId: string;
  movieId: Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const favoriteMovieSchema = new Schema<IFavoriteMovie>(
  {
    clerkId: {
      type: String,
      required: true,
      index: true,
    },

    movieId: {
      type: Schema.Types.ObjectId,
      ref: "Movie",
      required: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);






// Prevent duplicate favorites
favoriteMovieSchema.index(
  { clerkId: 1, movieId: 1 },
  { unique: true }
);

export default model<IFavoriteMovie>(
  "FavoriteMovie",
  favoriteMovieSchema
);