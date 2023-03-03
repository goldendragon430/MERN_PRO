import React from 'react'
import {
  Container,
  InnerContainer
} from './styles'

export const LandingLayout = (props) => {
  const { children } = props

  return (
    <Container>
      <InnerContainer>
        {children}
      </InnerContainer>
    </Container>
  )
}