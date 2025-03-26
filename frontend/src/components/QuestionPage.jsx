import React, { useState, useEffect } from "react";

const QuestionPage = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("http://localhost:5000/questions"); // Stelle sicher, dass die URL korrekt ist
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []);

  console.log(questions);

  const handleAnswer = async (questionId, answer) => {
    try {
      const response = await fetch(`http://localhost:5001/questions/${questionId}?answer=${answer}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ answer }), // Sende die Antwort
      });

      if (!response.ok) {
        throw new Error("Fehler beim Aktualisieren der Antwort");
      }
    } catch (error) {
      console.error("Error updating answer:", error);
    }
  };

  const calculatePercentage = (a, b) => {
    const result = (a / (a + b)) * 100;
    return result ? `${result.toFixed(2)}%` : `${0}%`;
  };

  return (
    <div>
      <h1>Fragen</h1>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            <h2>{question.frage}</h2>
            <button onClick={() => handleAnswer(question.id, "antwortA")}>A: {question.antworten[0]}</button>
            <button onClick={() => handleAnswer(question.id, "antwortB")}>B: {question.antworten[1]}</button>
            <div>
              <p>antwortA: {calculatePercentage(question.antwortA, question.antwortB)}%</p>
              <p>antwortB: {calculatePercentage(question.antwortB, question.antwortA)}%</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionPage;
