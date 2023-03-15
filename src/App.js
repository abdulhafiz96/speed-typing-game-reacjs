
import './App.css';
import React from 'react'
import useSpeedGame from "./hooks/useSpeedGame"; // custom hook imported so the logic could stay in different file


function App() {
   const {isRunning, text, textareaRef, handleChange, countDown, startGame, wordCount, time, decreaseTime, increaseTime} = useSpeedGame(10)

  return (
    <div className="App">
       <h1>Speed Typing Game</h1>
        <textarea
            disabled={!isRunning}
            value={text}
            ref={textareaRef}
            placeholder="Start Typing here"
            onChange={handleChange}


        />
        {!isRunning && <h1>Selected Time: {time}</h1>}
        {isRunning && <h4> Time Remaining: {countDown}</h4>}
        <div className="buttons">
            <button disabled={isRunning} onClick={decreaseTime}>Time -</button>
            <button disabled={isRunning} onClick={startGame}>Start</button>
            <button disabled={isRunning} onClick={increaseTime}>Time +</button>
        </div>
        <h1>words count: {wordCount}</h1>
    </div>
  );
}

export default App;
