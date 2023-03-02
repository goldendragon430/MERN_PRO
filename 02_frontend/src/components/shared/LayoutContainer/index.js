import React from 'react'
import {
  Container,
  InnerContainer
} from './styles'

export const LayoutContainer = (props) => {
  const { children,type } = props
  
  return (
    <Container >
      <InnerContainer style = {{maxWidth: (type==1?'100%':1440) }}>
        {children}
      </InnerContainer>
    </Container>
  )
}