import React, { useState } from 'react';
import Scoreboard from './Components/Scoreboard'
import Pins from './Components/Pins'
import './App.css';

function App() {
  
  const [pinCount, setPinCount] = useState(0);
  const [scoresArr, setScoresArr] = useState([]);

  const addScore = (pins) => {
    setPinCount(pins)
    setScoresArr([...scoresArr, pins])
  }

  return (
    <div className="App">
      <Pins addScore={addScore}/>
      <Scoreboard scoresArr={scoresArr}/>
    </div>
  );
}

export default App;
