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

export const update = (req, res) => {
    const { answer } = req.query;
    const { id } = req.params;
    try {
      const result = Voting.findById({ _id: id });
      if (result) {
        Voting.updateOne(
          { _id: id },
          { $inc: { [answer]: + 1 } },
          (err, result) => {
            if (err) {
              res.status(404).json({ message: "Error updating the question" });
            } else {
              res.status(200).json(result);
            }
          }
        );
      } else {
        res.status(404).json({ message: "Question not found" });
      }
    } catch (error) {
      res.status(404).json({ message: error.message });
    }      
};

export const deletequestion = (req, res) => {};
