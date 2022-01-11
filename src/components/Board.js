import React, { useState } from 'react'
import Square from './Square'

function Board() {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [isXNext, setIsXNext] = useState(false)

    const clickHandler = (position) => {
        if (board[position]) {
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

    const renderSquare = position => {
        return (
            <Square
                value={board[position]}
                clicked={() => clickHandler(position)}
            />
        )
    }

    return (
        <div className="board">
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
}

export default Board
