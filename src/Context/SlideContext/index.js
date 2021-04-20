import React, { createContext, useReducer } from 'react'
import { SlideReducer } from '@Reducer/SlideReducer'

const initialState = {
  current: 0,
  slides: [
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
    {
      id: 3,
      headline: 'Analog Clock',
      button: 'Open',
      src: 'https://raw.githubusercontent.com/oreoseenoevil/project-img/master/assets/analog-clock.png'
    },
  ]
}

export const SlideContext = createContext(initialState)

export const SlideContextProvider = props => {
  const [state, dispatch] = useReducer(SlideReducer, initialState)
  
  const prevSlide = () => {
    dispatch({
      type: 'PREV_SLIDE',
    })
  }

  const nextSlide = () => {
    dispatch({
      type: 'NEXT_SLIDE'
    })
  }

  const sideSlide = id => {
    dispatch({
      type: 'SIDE_SLIDE',
      id: id
    })
  }

  return (
    <SlideContext.Provider
      value={{
        slides: state.slides,
        current: state.current,
        prevSlide,
        nextSlide,
        sideSlide
      }}
    >
      {props.children}
    </SlideContext.Provider>
  )
}
