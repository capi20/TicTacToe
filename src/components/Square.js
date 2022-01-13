import React from 'react'

function Square({value, clicked, isWinningSquare}) {
    return (
        <button type="button" onClick={clicked} 
            className={`square ${isWinningSquare ? 'winning' : ''} ${value === 'X' ? 'text-green' : 'text-orange'}`}>
            {value}
        </button>
    )
}

export default Square
