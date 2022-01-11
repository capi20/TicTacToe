import React from 'react'

function Square({value, clicked}) {
    return (
        <button type="button" className="square" onClick={clicked}>{value}</button>
    )
}

export default Square
