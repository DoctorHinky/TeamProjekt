import mongoose from "mongoose";
import "dotenv/config.js";

export default async function connect() {
  const uri = process.env.DB_URI;
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.log("Error to connect with MongoDB", error);
  }
}
connect();
