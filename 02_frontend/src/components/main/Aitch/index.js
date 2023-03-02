import React from 'react'
import { Home } from './Home'
import { Features } from './Features'
// import { Limited } from './Limited'                                                                                                                                                                                                                                                                                                                                                   
import { Overview } from './Overview'
// import { Works } from './Works'
import { Questions } from './Questions'
import { Catch } from './Catch'

export const Aitch = () => {
 
  window.scrollTo(0,0)
 
  return (
    <>
      <Home />
      <Features />
      {/* <Limited /> */}
      <Overview />
      {/* <Works /> */}
      <Questions />
      <Catch />
    </>
  )
}
