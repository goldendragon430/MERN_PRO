import React, { createContext, useContext, useEffect, useState } from 'react'

/**
 * Create SessionContext
 * This context will manage the session internally and provide an easy interface
 */
export const SessionContext = createContext()

/**
 * Custom provider to session manager
 * This provider has a reducer for manage session state
 * @param {props} props
 */
export const SessionProvider = ({ children }) => {
  const [state, setState] = useState({
    auth: null,
    token: null,
    user: null,
    loading: true
  })

  const setValuesFromLocalStorage = async () => {
    const { auth, token, user } = await getValuesFromLocalStorage()
    setState({
      ...state,
      auth,
      token,
      user,
      loading: false
    })
  }

  const getValuesFromLocalStorage = async () => {
    const auth = await localStorage.getItem('token')
    const token = await localStorage.getItem('token')
    const user = JSON.parse(await localStorage.getItem('user', true))
    return { auth, token, user }
  }

  const login = async (values) => {
    await localStorage.setItem('token', values.token)
    await localStorage.setItem('user', JSON.stringify(values), true)
 
    setState({
      ...state,
      auth: true,
      user: values,
      token: values.token,
      loading: false
    })
  }

  const logout = async () => {
    await localStorage.removeItem('token')
    await localStorage.removeItem('user')
    await localStorage.removeItem('balance')
    await localStorage.removeItem('address')
    await localStorage.removeItem('data')
    await localStorage.removeItem('email')
    await localStorage.removeItem('role')
    await localStorage.removeItem('membership')
    await localStorage.removeItem('eth')
    
    setState({
      ...state,
      auth: false,
      user: null,
      token: null,
      loading: false
    })
  }

  const changeUser = async (user) => {
    await localStorage.setItem('user', JSON.stringify(user), true)
    setState({
      ...state,
      user,
      loading: false
    })
  }

  
  useEffect(() => {
    const checkLocalStorage = async () => {
      const { token, user } = await getValuesFromLocalStorage()
      if (token && !state.token) {
        login(user)
      }
  
      if (!token && state.token) {
        logout()
      }
    }
    const interval = setInterval(() => {
      checkLocalStorage()
    }, 1000)
    return () => clearInterval(interval)
  }, [state])

  useEffect(() => {
    setValuesFromLocalStorage()
  }, [])

  const functions = {
    login,
    logout,
    changeUser
  }

  return (
    <SessionContext.Provider value={[state, functions]}>
      {children}
    </SessionContext.Provider>
  )
}

/**
 * Hook to get and update session state
 */
export const useSession = () => {
  const sessionManager = useContext(SessionContext)
  return sessionManager || [{}, () => {}]
}
