import React, { Fragment } from 'react'
import { SlideContextProvider } from '@Context/SlideContext'
import { Slider } from '@Components/Slider'

export const App = () => {

  return (
    <SlideContextProvider>
      <Fragment>
        <Slider heading='Example Slider' />
      </Fragment>
    </SlideContextProvider>
  )
}
