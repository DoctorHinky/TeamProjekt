import React from 'react';

const HomePage = ({ onStart }) => {
  return (
    <div>
      <h1>Willkommen zum Voting-Spiel!</h1>
      <button onClick={onStart}>Spiel starten</button>
    </div>
  );
};

export default HomePage;