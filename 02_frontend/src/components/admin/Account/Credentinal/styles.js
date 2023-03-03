import styled from 'styled-components'

export const CardForm = styled.form``

export const FormGroup = styled.div`
  max-width: 650px;
  margin-bottom: 15px;
  input {
    width: 100%;
  }
`

export const FormGroupHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  > p {
    font-weight: 600;
  }
  span {
    cursor: pointer;
    font-weight: 500;
    color: ${props => props.theme.colors.primary};
  }
`