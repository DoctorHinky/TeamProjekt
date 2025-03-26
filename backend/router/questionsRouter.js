import express from "express";
import  questions from "../middleware/questions.js";
import { addquestion, getquestions, editquestion , deletequestion } from "../controller/questionsController.js";
const router = express.Router();

router.route("/questions").get(questions, getquestions).post(addquestion);

router.route("/questions/:id").patch(editquestion).delete(deletequestion);

export default router;
