import './App.css';
import { useState } from 'react';

function DisplayFrontOrBack(props) {
  const handleClick = () => {
    props.onClick(); 
  };
  return (
    <div
      className={`cards ${props.isFlipped ? 'flipped' : ''}`}
      onClick={props.onClick}
    >
      <div className="cards-inner">
        <div className={`cards-front ${props.isFlipped ? 'hidden' : ''}`}>
          <h3>{props.front}</h3>
        </div>
        <div className={`cards-back ${props.isFlipped ? '' : 'hidden'}`}>
          <h3>{props.back}</h3>
        </div>
      </div>
    </div>
  );
}

const App = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);

  const [inputText, setInputText] = useState("");//creating a state variable to store input


  const prevCard = () => {
    if(cardIndex > 0) {
      setCardIndex(cardIndex - 1);
      setIsFlipped(false);
      textBox.classList.remove("wrong");
      textBox.classList.remove("correct");
      setInputText("");
    }
  };

  const nextCard = () => {
    if(cardIndex < cardsArray.length - 1) {
      setCardIndex(cardIndex + 1);
      setIsFlipped(false);
      textBox.classList.remove("wrong");
      textBox.classList.remove("correct");
      setInputText("");
    }
  };

  var textBox = document.getElementById('textBox');

  const handleInput = () => {

    if(inputText != cardsArray[cardIndex].back){
          setInputText("Wrong!");
          textBox.className = "wrong";
    } else {
      setInputText("Correct!");
      textBox.className = "correct";
    }
  };




  const cardsArray = [
    {
      front: "Click for more instructions on how to start!",
      back: "Click the right button to start!",
    },
    {
    front:"Who was the first President of the United States?",
    back: "George Washington",
    },
    {
      front:"Who was the second President of the United States?",
      back: "John Adams",
    },
    {
      front:"Who was the third President of the United States?",
      back: "Thomas Jefferson",
    },
    {
      front:"Who was the fourth President of the United States?",
      back: "James Madison",
    },
    {
      front:"Who was the fifth President of the United States?",
      back: "James Monroe",
    },
  ];

  return (
    <div className="App">
      <div className="header">
        <h1>History Quiz</h1>
        <h2>How well do you know History? Lets find out with this 5 card quiz!!</h2>
        <h3>Number of study cards: 5</h3>
        <div className="cardbox">
          <div className="cards-inner">
            <DisplayFrontOrBack
            isFlipped={isFlipped}
            onClick={() => setIsFlipped(!isFlipped)}
            front={cardsArray[cardIndex].front}
            back={cardsArray[cardIndex].back}
            input={inputText}
            />
            </div>
            <input type="text" id='textBox' value={inputText} onChange={(e) => setInputText(e.target.value)}/>
            </div>
        <button id='leftArrow' onClick={prevCard}>Previous Card</button>
        <button id='rightArrow' onClick={nextCard}>Next Card</button>
        <div className="inputSubmitBox">
        <button id='submit' type='submit' onClick={handleInput}>Submit Your Answer</button>
        </div>
      </div>
    </div>
  )
}

export default App