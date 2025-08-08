import React, { useState, useRef } from 'react';
import './App.css';


const choices = [
  { name: 'rock', img: '/ProjectImages/rock.png' },
  { name: 'paper', img: '/ProjectImages/paper.png' },
  { name: 'scissor', img: '/ProjectImages/scissor.png' },
];

function getComputerChoice() {
  const idx = Math.floor(Math.random() * choices.length);
  return choices[idx];
}

function getResult(player, computer) {
  if (player === computer) return 'Tie';
  if (
    (player === 'rock' && computer === 'scissor') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissor' && computer === 'paper')
  ) {
    return 'Player Wins';
  }
  return 'Computer Wins';
}

const App = () => {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [result, setResult] = useState('WELCOME');
  const [playerName, setPlayerName] = useState('PLAYER');
  const [computerImg, setComputerImg] = useState(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const intervalRef = useRef(null);

  const handlePlay = (playerChoice) => {
    const computer = getComputerChoice();
    setComputerImg(computer.img); // computer.img is now a public path string
    const res = getResult(playerChoice, computer.name);
    setResult(res);
    if (res === 'Player Wins') setPlayerScore((s) => s + 1);
    else if (res === 'Computer Wins') setComputerScore((s) => s + 1);
  };

  const handleReset = () => {
    setResult('');
    setPlayerScore(0);
    setComputerScore(0);
    setComputerImg(null);
    setIsAutoPlaying(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleAutoPlay = () => {
    if (!isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        const randomChoice = choices[Math.floor(Math.random() * choices.length)].name;
        handlePlay(randomChoice);
      }, 1000);
      setIsAutoPlaying(true);
    } else {
      clearInterval(intervalRef.current);
      setIsAutoPlaying(false);
    }
  };

  return (
    <div className="full">
      <div><h1 className="heading">ROCK PAPER SCISSOR GAME</h1></div>
      <div className="result">
        <input type="text" id="showResult" value={result} readOnly />
      </div>
      <div className="scoreboard">
        <p style={{fontSize: '120%', position:'absolute', bottom:'68%', left:'13%'}} id="PLAYER">{playerName}</p>
        <p style={{fontSize: '120%', position:'absolute', bottom:'68%', left:'58%'}}>COMPUTER</p>
        <div style={{position:'absolute', left:'50%', height:'99%', border:'1px solid black'}}></div>
        <input type="text" id="playerScore" value={playerScore} readOnly />
        <input type="text" id="computerScore" value={computerScore} readOnly />
      </div>
      <div className="me">
        <div className="name">
          <input type="text" className="playerName" onChange={e => setPlayerName(e.target.value || 'PLAYER')} placeholder="Enter Player Name" />
        </div>
        <div>
          <button
            className="rocksign"
            style={{ backgroundImage: `url(/ProjectImages/rock.png)` }}
            onClick={() => handlePlay('rock')}
          ></button>
        </div>
        <div>
          <button
            className="papersign"
            style={{ backgroundImage: `url(/ProjectImages/paper.png)` }}
            onClick={() => handlePlay('paper')}
          ></button>
        </div>
        <div>
          <button
            className="scissorsign"
            style={{ backgroundImage: `url(/ProjectImages/scissor.png)` }}
            onClick={() => handlePlay('scissor')}
          ></button>
        </div>
      </div>
      <div className="computer">
        <p className="chead">COMPUTER</p>
        <div className="comp">
          {computerImg && <img id="computerimg" src={computerImg} alt="Computer choice" />}
        </div>
      </div>
      <button className="reset" onClick={handleReset}>Reset</button>
      <button className="autoPlay" onClick={handleAutoPlay}>AutoPlay</button>
    </div>
  );
};

export default App;
