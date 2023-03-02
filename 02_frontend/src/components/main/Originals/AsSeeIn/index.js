import React from 'react'
import { LayoutContainer } from '../../../shared'
import {
  Container,
  LogoItem
} from './styles'

export const AsSeeIn = () => {
  return (
    <LayoutContainer>
      <Container>
        <div>
          <LogoItem>As see on</LogoItem>
          <LogoItem href=''>
            <img src='https://limewire.com/img/media_reuters.svg' alt='' />
          </LogoItem>
          <LogoItem href=''>
            <img src='https://limewire.com/img/media_tnw.svg' alt='' />
          </LogoItem>
          <LogoItem href=''>
            <img src='https://limewire.com/img/media_rollingstone.svg' alt='' />
          </LogoItem>
          <LogoItem href=''>
            <img src='https://limewire.com/img/media_cnbc.svg' alt='' />
          </LogoItem>
          <LogoItem href=''>
            <img src='https://limewire.com/img/media_bloomberg.svg' alt='' />
          </LogoItem>
        </div>
      </Container>
    </LayoutContainer>
  )
}