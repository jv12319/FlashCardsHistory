import './App.css';
import { useState } from 'react';

const App = () => {

  const [isFlipped, flippedStatus] = useState(false);

  return (
    <div className="App">
      <div className="header">
        <h1>History Quiz</h1>
        <h2>How well do you know history? Lets find out with this 10 card quiz!!</h2>
        <h3>Number of cards: 10</h3>
        <div className="cardbox">
          <div className="cards">
            <h1>Click here to start!</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App