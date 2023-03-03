import styled, { css } from 'styled-components'

export const Container = styled.div``

export const Heading = styled.div`
  padding: 15px 20px 12px;
  span {
    max-width: 300px;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 20px;
    font-weight: 500;
    display: inline-block;
    overflow: hidden;
  }
`

export const Body = styled.div`
  padding: 0 20px 15px;
`

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  > button {
    margin-top: 20px;
  }
`

export const FormGroup = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
  width: 100%;
  > label {
    font-weight: 600;
  }
  input, select {
    width: 100%;
  }
  ${({ isHalf }) => isHalf && css`
    width: calc(50% - 10px);
  `}
  svg{
    font-size:18px;
  }
`

export const ErrorMessage = styled.p`
  font-size: 14px;
  color: ${props => props.theme.colors.warning};
  text-align: left;
  margin-top: 5px;
`
export const ButtonWrapper = styled.div`
display:flex;
button {
  margin-right :20px;
  border-radius : 20px;
}


`