import React, { useState } from 'react'

const slideData = [
  {
    id: 0,
    headline: 'Analog Clock',
    button: 'Open',
    src: 'https://raw.githubusercontent.com/oreoseenoevil/project-img/master/assets/calculator.png'
  },
  {
    id: 1,
    headline: 'Tic Tac Toe',
    button: 'Open',
    src: 'https://raw.githubusercontent.com/oreoseenoevil/project-img/master/assets/tictactoe.png'
  },
  {
    id: 2,
    headline: 'Analog Clock',
    button: 'Open',
    src: 'https://raw.githubusercontent.com/oreoseenoevil/project-img/master/assets/analog-clock.png'
  },
]

export const App = () => {
  const initialValue = 0
  const length = slideData.length
  const [current, setCurrent] = useState(initialValue)

  const handlePrevCick = () => {
    setCurrent(prevCurrent => prevCurrent === 0 ? length - 1 : prevCurrent - 1)
  }

  const handleNextClick = () => {
    setCurrent(prevCurrent => prevCurrent === length - 1 ? 0 : prevCurrent + 1)
  }

  console.log(current)

  return (
    <div className="slider">
      <button onClick={handlePrevCick}>prev</button>
      <button onClick={handleNextClick}>next</button>
    </div>
  )
}
