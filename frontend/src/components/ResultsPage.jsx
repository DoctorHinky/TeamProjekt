import React from 'react';

const ResultsPage = ({ results }) => {
  return (
    <div>
      <h2>Statistik</h2>
      {results.map((result, index) => (
        <div key={index}>
          <p>{result.answer}: {result.percentage}%</p>
        </div>
      ))}
    </div>
  );
};

export default ResultsPage;