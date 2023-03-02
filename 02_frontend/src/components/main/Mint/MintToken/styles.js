import styled, { css } from 'styled-components'

export const CardForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  max-width: 650px;
  justify-content: space-between;
`

export const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 15px;
  p {
    font-size: 14px;
    font-weight: 600;
  }
  input {
    width: 100%;
  }
  ${({ isHalf }) => isHalf && css`
    @media (min-width: 769px) {
      width: calc(50% - 10px);
    }
  `}
`
export const ErrorMessage = styled.p`
  font-size: 14px;
  color: ${props => props.theme.colors.warning};
  text-align: left;
  margin-top: 5px;
`