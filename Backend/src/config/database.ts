import mongoose from "mongoose";

export const connectDB = async () => {



  try {


    await mongoose.connect(process.env.CONNECTION_STRING!).then(() => {

            console.log("✅ MongoDB Connected");

        
    });


  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    process.exit(1);
  }



};