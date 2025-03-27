import fs from "fs";
import Voting  from "./models/Voting.js";
import mongoose from "mongoose";
import './utils/connect.js';

export async function seedDatabase() {
  try {
    await Voting.deleteMany({});
    const votingsCount = await Voting.countDocuments();
    console.log(`There are ${votingsCount} listings in the database.`);

    if (votingsCount === 0) {
      console.log("No data found, seeding data...");
      const data = fs.readFileSync("frage.json", {
        encoding: "utf8",
        flag: "r",
      });

      const json = JSON.parse(data);

      for (const voting of json) {
        await Voting.create(voting);
     
      }
      console.log("Database seeding complete!");
      await mongoose.connection.close();
    }
  } catch (error) {
    console.error("Error seeding data:", error);
  }
}
seedDatabase();
