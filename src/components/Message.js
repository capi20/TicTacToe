import React from 'react'

function Message({winner, current}) {
    //const message = winner ? `Winner is ${winner}` : `Next player is ${current.isXNext ? 'X' : '0'}`
    const noMovesLeft = current.board.every(el => el !== null)
    return (
        <h2>
            {winner && (
                <>
                    Winner is{' '} 
                    <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
                        {winner}
                    </span>
                </>
            )}
            {!winner && !noMovesLeft && (
                <>
                    Next player is{' '} 
                    <span className={current.isXNext ? 'text-green' : 'text-orange'}>
                        {current.isXNext ? 'X' : '0'}
                    </span>
                </>
            )}
            {!winner && noMovesLeft && 
            <>
                <span className='text-green'>X</span> and <span className='text-orange'>0</span> tied
            </>}
        </h2>
    )
}

export default Message
