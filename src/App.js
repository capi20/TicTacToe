import React, { useState } from 'react'

import Board from './components/Board';
import History from './components/History';
import Message from './components/Message';
import { calculateWinner } from './helper';
import './styles/root.scss'

const NEW_GAME = [{board: Array(9).fill(null), isXNext: true}]

function App() {

  const [history, setHistory] = useState(NEW_GAME)
  const [currentMove, setCurrentMove] = useState(0)

  const current = history[currentMove]

  const {winner, winningSquares} = calculateWinner(current.board)

  const clickHandler = (position) => {
    if (current.board[position] || winner) {
        return
    }

    setHistory((prev) => {
      const last = prev[prev.length - 1]
      
      const newBoard = last.board.map((el, index) => {
        if (index === position) {
          return last.isXNext ? 'X' : '0'
        }
        return el
      })
      return prev.concat( {board: newBoard, isXNext: !last.isXNext})
    })

    setCurrentMove(prev => prev + 1)
  }

  const moveTo = move => {
    setCurrentMove(move)
  }

  const startNewGame = () => {
    setHistory(NEW_GAME)
    setCurrentMove(0)
  }

  return (
    <div className="app">
      <h1>TIC <span className='text-green'>TAC</span> TOE</h1>
      <Message winner={winner} current={current}/>
      <Board board={current.board} clickHandler={clickHandler} winningSquares={winningSquares}/>
      <button type='button' onClick={startNewGame}
        className={`btn-reset ${winner ? 'active' : ''}`}>Start new game</button>
      <h2 style={{fontWeight: 'normal'}}>Current game history</h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove}/>
      <div className='bg-balls'/>
    </div>
  );
}

export default App;
