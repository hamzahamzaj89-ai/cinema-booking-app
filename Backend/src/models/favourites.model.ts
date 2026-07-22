import { Schema, model, Document } from "mongoose";

export interface IFavoriteMovie extends Document {
  userId: string;
  movieId: Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const favoriteMovieSchema = new Schema<IFavoriteMovie>(
  {
    userId: {
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
  { userId: 1, movieId: 1 },
  { unique: true }
);

export default model<IFavoriteMovie>(
  "FavoriteMovie",
  favoriteMovieSchema
);