import React from 'react'
import {
  Container,
  Logo,
  Content,
  Spinner
} from './styles'

export const SpinnerLoader = (props) => {
  const {
    logotype,
    content,
    style,
    iconStyle
  } = props
  return (
    <Container style={style}>
      {logotype && (
        <Logo>
          <img src={logotype} alt='logo' width='266px' height='150px' loading='lazy' />
        </Logo>
      )}
      {content && (
        <Content>
          {content}
        </Content>
      )}
      <Spinner className='spinner' style={iconStyle} {...props}>
        <div className='spinner-content'>
          <div />
        </div>
      </Spinner>
    </Container>
  )
}
