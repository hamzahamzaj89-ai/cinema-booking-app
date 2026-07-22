import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/database.js";
import movieRouter from "./routes/movie.routes.js"
import errorMiddleware from "./middleware/errorMiddleware.js";
import cinemaRouter from "./routes/cinema.routes.js";
import branchRouter from "./routes/branch.routes.js";
import screenRouter from "./routes/screen.routes.js"
import showTimeRouter from "./routes/showTime.routes.js"
import { clerkMiddleware } from "@clerk/express";
import addressRouter from "./routes/Address.routes.js"
import { configSupabase } from "./config/supabase.config.js";

const app = express();
 const clerkAuth = clerkMiddleware();





dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(clerkAuth);


connectDB()
configSupabase()



app.use("/api/movie" , movieRouter)
app.use("/api/cinema", cinemaRouter)
app.use("/api/branch" , branchRouter)
app.use("/api/showTime" , showTimeRouter)
app.use("/api/screen" , screenRouter)
app.use("/api/address" , addressRouter)


app.use(errorMiddleware);


app.listen(process.env.PORT , () => {

    console.log("server is running")
})



export default app;
