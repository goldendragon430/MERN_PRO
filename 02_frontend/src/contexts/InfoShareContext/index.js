import React, { useState, createContext } from 'react'
/**
 * Create InfoShareContext
 * This context will manage the info between pages and provide an easy interface
 */
export const InfoShareContext = createContext()

/**
  * Custom provider to mange shared info
  * @param {props} props
  */
export const InfoShareProvider = ({ children }) => {
  const [infoState, setInfoState] = useState({
    isCollapse: true
  })

  const handleMenuCollapse = (val) => {
    setInfoState({
      ...infoState,
      isCollapse: val
    })
  }

  const functions = {
    handleMenuCollapse
  }

  return (
    <InfoShareContext.Provider value={[infoState, functions]}>
      {children}
    </InfoShareContext.Provider>
  )
}

// hook context

export function useInfoShare () {
  const infoShareManager = React.useContext(InfoShareContext)
  return infoShareManager || [{}, () => {}]
}
