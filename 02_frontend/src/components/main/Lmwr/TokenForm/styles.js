import React from 'react'
import styled from 'styled-components'

export const ComponentWraperStyled = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  padding: 80px 0 85px;

  @media (max-width: 768px) {
    background-image: none !important;
    padding: 40px 0 0px;
  }
`

export const Container = styled.div`
  max-width: 100%;
  width: 370px;
  margin: 0px auto;
  padding: 0px 10px;
`

export const Head = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  margin-bottom: 32px;
  padding-bottom: 32px;
`
export const Heading = styled.div`
  text-align: center;
  letter-spacing: -.01em;
  margin-bottom: 0;
  font-size: 35px;
  font-weight: 600;
  line-height: 1.2;
`
export const HeadDes = styled.p`
    text-align: center;
    color: ${props => props.theme.colors.gray};
    letter-spacing: -.2px;
    margin-top: 20px;
    font-weight: 500;
    line-height: 25px;
`

export const FormWraper = styled.form`
  input, button {
    width: 100%;
  }
  a {
    color: ${props => props.theme.colors.primary};
  }
`
export const FormRow = styled.div`
  font-size: 12px;
  margin-bottom: 32px;
  color: ${props => props.theme.colors.gray};
`

export const FormLabel = styled.label`
  font-weight: 700;
  line-height: 1;
  display: block;
  margin-bottom: 12px;
`

export const ComponentWraper = (props) => {
  return (
    <ComponentWraperStyled {...props} style={{ backgroundImage: `url(${props.bgimage})` }} >
      {props.children}
    </ComponentWraperStyled>
  )
}
