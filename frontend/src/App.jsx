import React, { useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import QuestionPage from "./components/QuestionPage";
import ResultsPage from "./components/ResultsPage";

// eintragen der Url
const baseUrl = "http://localhost:5001";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [question, setQuestion] = useState(null);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const startGame = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${baseUrl}/questions`);
      if (!response.ok) throw new Error("Fehler beim Abrufen der Fragen");
      const data = await response.json();
      setQuestion(data);
      setCurrentPage("question");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAnswer = async (answer) => {
    setLoading(true);
    setError(null);
    try {
      await fetch(`${baseUrl}/answer`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ answer }),
      });
      const resultsResponse = await fetch(`${baseUrl}/results`);
      if (!resultsResponse.ok) throw new Error("Fehler beim Abrufen der Ergebnisse");
      const resultsData = await resultsResponse.json();
      setResults(resultsData);
      setCurrentPage("results");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && <div>Lade...</div>}
      {error && <div style={{ color: "red" }}>Fehler: {error}</div>}
      {currentPage === "home" && <HomePage onStart={startGame} />}
      {currentPage === "question" && question && <QuestionPage question={question} onAnswer={handleAnswer} />}
      {currentPage === "results" && <ResultsPage results={results} />}
    </div>
  );
};

export default App;
