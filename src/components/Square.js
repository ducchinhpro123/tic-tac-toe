import React, { useState } from 'react'

export default function Square({ value, onSquareClick }) {
    // const [value, setValue] = useState(null);

    // const handleClick = () => {
    //     setValue("X")
    // }


    return <button onClick={onSquareClick} className='square'>{value}</button>
}
