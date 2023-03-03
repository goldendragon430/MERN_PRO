import React, { createContext, useContext, useEffect, useState } from 'react'
import { createGlobalStyle, css, ThemeProvider as ThemeProviderStyled } from 'styled-components'
import lightThemeColors from '../../lightThemeColors.json'
import darkThemeColors from '../../darkThemeColors.json'

/**
 * Create ThemeContext
 * Context to use theme on the app
 */
export const ThemeContext = createContext()

/**
 * Api provider to manage theme
 * @param {props} props
 */
export const ThemeProvider = ({ children, ...props }) => {
  const [theme, setTheme] = useState({
    ...props.theme,
    colors: JSON.parse(window.localStorage.getItem('isLightMode')) ? lightThemeColors : darkThemeColors,
    isLightMode: JSON.parse(window.localStorage.getItem('isLightMode')) || false
  })

  const GlobalStyle = createGlobalStyle`

    @media (min-width: 578px) {
      /** Mozilla scrollbar*/
      * {
        scrollbar-color: #CCC !important;
        scrollbar-width: thin !important;
      }

      /** Scrollbar for browser based on webkit */
      ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
      }
      ::-webkit-scrollbar-thumb {
        background: #CCCCCC;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #AFAFAF;
      }
      ::-webkit-scrollbar-thumb:active {
        background: #6b6b6b;
      }
      ::-webkit-scrollbar-track {
        background: rgba(204, 204, 204, 0.3);
      }
    }

    body {
      font-family: '${theme.fonts.primary?.name || 'Helvetica'}', sans-serif;
      margin: 0;
      background-color: ${props => props.theme.colors?.backgroundColor || '#00'};
      color: ${props => props.theme.colors?.white || '#FFF'};

      ${theme.rtl && css`
        direction: rtl;
      `}
    }

    * {
      box-sizing: border-box;
    }
    h1, h2, h3, h4, h5, h6, p {
      margin: 0px;
    }

    input, textarea, button {
      font-family: inherit;
    }

    .popup-backdrop {
      background-color: rgba(0, 0, 0, 0.4);
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 3000;
    }
    .popup-component {
      background-color: rgba(0, 0, 0, 0.3);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `

  useEffect(() => {
    const fonts = Object.entries(theme.fonts || {})
    fonts.forEach(([name, fontFamily]) => {
      if (!window.document.getElementById(`${name}-font-styles`)) {
        const font = window.document.createElement('link')
        font.id = `${name}-font-styles`
        font.rel = 'stylesheet'
        font.async = true
        font.defer = true
        font.href = `https://fonts.googleapis.com/css2?family=${fontFamily.name}:wght@${fontFamily.weights.join(';')}&display=swap`

        window.document.body.appendChild(font)
      }
    })
  }, [theme])

  const update = (theme) => {
    setTheme(theme)
  }

  const merge = (partTheme) => {
    setTheme({
      ...theme,
      ...partTheme
    })
  }

  const toggleDarkMode = () => {
    if (theme.isLightMode) {
      setTheme({
        ...theme,
        colors: darkThemeColors,
        isLightMode: false
      })
      window.localStorage.setItem('isLightMode', false)
    } else {
      setTheme({
        ...theme,
        colors: lightThemeColors,
        isLightMode: true
      })
      window.localStorage.setItem('isLightMode', true)
    }
  }

  return (
    <ThemeContext.Provider value={[theme, { update, merge, toggleDarkMode }]}>
      <ThemeProviderStyled theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  )
}

/**
 * Hook to get theme state
 */
export const useTheme = () => {
  const themeManager = useContext(ThemeContext)
  return themeManager || [{}]
}
