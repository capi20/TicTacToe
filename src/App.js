import React, { useState } from 'react'

import Board from './components/Board';
import History from './components/History';
import { calculateWinner } from './helper';
import './styles/root.scss'

function App() {

  const [history, setHistory] = useState([{board: Array(9).fill(null), isXNext: true}])
  const [currentMove, setCurrentMove] = useState(0)

  const current = history[currentMove]

  console.log(history)

  const winner = calculateWinner(current.board)

  const message = winner ? `Winner is ${winner}` : `Next player is ${current.isXNext ? 'X' : '0'}`

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

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board board={current.board} clickHandler={clickHandler}/>
      <History history={history} moveTo={moveTo} currentMove={currentMove}/>
    </div>
  );
}

export default App;
