import Voting from "../models/Voting.js";
import mongoose from "mongoose";


export const getquestions = async (req, res) => {
    try {
        const questions = await Voting.find({},{frage:true,antworten:true});
        res.status(200).json(questions);
      } catch (error) {
        res.status(404).json({ message: error.message });
      }
};

export const getquestion = async (req, res) => {
    try {
        const question = await Voting.findById(req.params.id);
        res.status(200).json(question);
      } catch (error) {
        res.status(404).json({ message: error.message });
      } 
    };

export const addquestion = async (req, res) => {
    const { frage, antworten } = req.body;
    const newquestion = new Voting({ frage, antworten });
    try {
      await newquestion.save();
      res.status(201).json(newquestion);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
};

export const editquestion = (req, res) => {
    const { frage, antworten } = req.body;
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No question with id: ${id}`);
    const updatedquestion = { frage, antworten, _id: id };
    Voting.findByIdAndUpdate(id, updatedquestion, { new: true });
    res.json(updatedquestion);
};

export const deletequestion = (req, res) => {};
