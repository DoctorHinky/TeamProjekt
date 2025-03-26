import express from "express";
import cors from "cors";
import "dotenv/config.js";
import "./utils/connect.js";
import "./middleware/questions.js";
import router from "./router/questionsRouter.js";
import "./models/Voting.js";


const app = express();

app.use(express.json());

app.use(cors());

const port = process.env.PORT || 5001;

app.use("/", router);




app.listen(port, () => {
  console.log(`server working on ${port} port!`);
});
