import React from 'react'
import { useTheme as useOriginalTheme } from 'styled-components'
import { useTheme } from '../../../../contexts/ThemeContext'
import { Button } from '../../../../styles'

import {
  Container,
  LeftWrapper,
  ButtonGroup,
  RightWrapper
} from './styles'

export const PressHero = () => {
  const themeOriginal = useOriginalTheme()
  const [theme] = useTheme()

  return (
    <Container>
      {/* <LeftWrapper>
        <h1>
          <span className="marker">Press & Newsroom</span>
        </h1>
        <h2>
          On this page you will find contact information of our PR department, as well as general company information, a press kit and links to our social media channels.
        </h2>
        <ButtonGroup>
          <a href="mailto:press@limewire.com" target="_blank" rel="noreferrer">
            <Button color='primary'>Contact press@limewire.com</Button>
          </a>
          <a title="Press Kit" target="_blank" download="" href="/downloads/lw_presskit.zip" rel="noreferrer">
            <Button color='primary' naked>Download Press Kit</Button>
          </a>
        </ButtonGroup>
      </LeftWrapper> */}

      <RightWrapper>
        <img src={theme?.isLightMode ? themeOriginal.images.logoDark : themeOriginal.images.logo} alt='' />
      </RightWrapper>
    </Container>
  )
}