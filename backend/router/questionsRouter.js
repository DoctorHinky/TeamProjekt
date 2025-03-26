import express from "express";
import  questions from "../middleware/questions.js";
import { addquestion, getquestions, editquestion , deletequestion, getquestion } from "../controller/questionsController.js";
const router = express.Router();

router.route("/questions").get(getquestions).post(addquestion);

router.route("/questions/:id").get(questions, getquestion);

router.route("/questions/:id").patch(editquestion).delete(deletequestion);

export default router;
