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

export const Body = styled.form`
  padding: 0 20px 15px;
`

export const FormGroup = styled.div`
  margin-bottom: 10px;
  label {
    font-size: 14px;
    font-weight: 600;
  }
  p {
    font-size: 12px;
    color: ${props => props.theme.colors.textGray};
    margin-top: 4px;
  }
`

export const FromWrapper = styled.div`
  display: flex;
  .transaction {
    border-radius: 5px;
    padding: 0 10px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.backgroundLightGray};
    margin-right: 10px;
    min-width: 80px;
  }
  input {
    flex: 1;
  }
`

export const ButtonGroup = styled.div`
  padding-top: 10px;
  display: flex;
  button:first-child {
    margin-right: 10px;
  }
`
