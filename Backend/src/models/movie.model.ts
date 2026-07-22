import mongoose, { Schema, Document } from "mongoose";

export interface IMovie extends Document {
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
  trailerKey?: string;
  cast: string[];
  director?: string;



  isActive: boolean;
}

const movieSchema = new Schema<IMovie>(
  {
    tmdbId: {
      type: Number,
      required: true,
      unique: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    overview: {
      type: String,
      required: true,
    },

    posterPath: {
      type: String,
      required: true,
    },

    backdropPath: {
      type: String,
      required: true,
    },

    runtime: {
      type: Number,
      default: 0,
    },

    genres: {
    type: [String],
    required: true,
    
  },

    language: {
      type: String,
    },

    releaseDate: {
      type: Date,
    },

    rating: {
      type: Number,
      default: 0,
    },

    voteCount: {
      type: Number,
      default: 0,
    },

    trailerKey: {
      type: String,
    },

    cast: [
      {
        type: String,
      },
    ],

    director: {
      type: String,
    },






    isActive: {
      type: Boolean,
      default: true,
    },
   
  },
  {
    timestamps: true,
  }
);





movieSchema.index({
    genres: 1
});

export default mongoose.model<IMovie>("Movie", movieSchema);