import styled from 'styled-components'

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
  > p {
    font-size: 14px;
    margin-bottom: 10px;
  }
`

export const Form = styled.form`
  > button {
    margin-top: 20px;
  }
`

export const FormGroup = styled.div`
  font-size: 14px;
  > label {
    font-weight: 600;
  }
  input {
    width: 100%;
  }
`

export const ErrorMessage = styled.p`
  font-size: 14px;
  color: ${props => props.theme.colors.warning};
  text-align: left;
  margin-top: 5px;
`
export const FormLabel = styled.h3`
  font-size : 16px;
  margin-top: 20px;
`