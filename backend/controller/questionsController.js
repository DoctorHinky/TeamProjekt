import Voting from "../models/Voting.js";
import mongoose from "mongoose";

export const getquestions = async (req, res) => {
  try {
    const questions = await Voting.find({});
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

export const update = async (req, res) => {
  const { answer } = req.query;
  const { id } = req.params;

  console.log("update was called", answer, id);
  try {
    const updateField = answer === "antwortA" ? "antwortA" : "antwortB";
    const result = await Voting.findByIdAndUpdate(id, { $inc: { [updateField]: 1 } }, { new: true });

    if (!result) {
      res.status(404).json({ message: "question not found" });
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deletequestion = (req, res) => {};
