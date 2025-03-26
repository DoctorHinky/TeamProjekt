import React, { useState, useEffect } from "react";

const QuestionPage = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({}); // Speichert die Antworten
  const [totalAnswers, setTotalAnswers] = useState(0); // Gesamtanzahl der Antworten

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

  const handleAnswer = async (questionId, answer) => {
    // Speichere die Antwort
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
    setTotalAnswers((prevTotal) => prevTotal + 1); 


    try {
      const response = await fetch(`http://localhost:5000/questions/${questionId}?answer=${answer}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ answer }), // Sende die Antwort
      });

      if (!response.ok) {
        throw new Error('Fehler beim Aktualisieren der Antwort');
      }


    } catch (error) {
      console.error("Error updating answer:", error);
    }
  };

  const calculatePercentage = (questionId, answer) => {
    const count = Object.values(answers).filter((a) => a === answer).length;
    return totalAnswers > 0 ? ((count / totalAnswers) * 100).toFixed(2) : 0;
  };

  return (
    <div>
      <h1>Fragen</h1>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            <h2>{question.frage}</h2>
            <button onClick={() => handleAnswer(question.id, 'A' )}>
              {question.antwortA}
            </button>
            <button onClick={() => handleAnswer(question.id, 'B' )}>
              {question.antwortB}
            </button>
            <div>
              <p>
                {question.antwortA}: {calculatePercentage(question.id, question.antwortA)}%
              </p>
              <p>
                {question.antwortB}: {calculatePercentage(question.id, question.antwortB)}%
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionPage;