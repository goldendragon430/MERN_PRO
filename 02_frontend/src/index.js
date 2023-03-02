import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from './router'
import theme from './theme.json'
import { ThemeProvider } from './contexts/ThemeContext'

/**
 * Theme images
 */
import logo from './assets/images/logo.png'
import logoDark from './assets/images/logo-dark.png'
import roundLogo from './assets/images/logo-short.png'
import timeLine from './assets/images/time-line.png'
import { SessionProvider } from './contexts/SessionContext'
import { ApiProvicer } from './contexts/ApiContext'
import { InfoShareProvider } from './contexts/InfoShareContext'
import  './index.css'
 /**
  * Theme icons
  */
 
 theme.images = {
  logo,
  logoDark,
  roundLogo,
  timeLine
 }
 
 theme.icons = {

 }

const RouteApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <SessionProvider>
        <ApiProvicer>
          <InfoShareProvider>
            <Router />
          </InfoShareProvider>
        </ApiProvicer>
      </SessionProvider>
    </ThemeProvider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <RouteApp />
)
