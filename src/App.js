import React, { useState } from 'react'

import Board from './components/Board';
import { calculateWinner } from './helper';
import './styles/root.scss'

function App() {

  const [board, setBoard] = useState(Array(9).fill(null))
  const [isXNext, setIsXNext] = useState(false)

  const winner = calculateWinner(board)

  const message = winner ? `Winner is ${winner}` : `Next player is ${isXNext ? 'X' : '0'}`

    const clickHandler = (position) => {
        if (board[position] || winner) {
            return
        }

        setBoard((prev) => {
            return board.map((el, index) => {
                if (index === position) {
                    return isXNext ? 'X' : '0'
                }
                return el
            })
        })

        setIsXNext(prev => !prev)
    }

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board board={board} clickHandler={clickHandler}/>
    </div>
  );
}

export default App;
