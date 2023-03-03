import styled, { css } from 'styled-components'

export const Input = styled.input`
  background: ${props => props.theme.colors.lightGray};
  color: ${props => props.theme.colors.white};
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  padding: 10px 12px;
  outline: none;
  border-width: 1px;
  border-color: transparent;

  &:focus {
    border-color: ${props => props.theme.colors.gray};
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  }

  ${({ w }) => w && css`
    width: 20%;
  `}

  &::placeholder,
  &::-webkit-input-placeholder {
    color: ${props => props.theme.colors.gray};
  }
  &:-ms-input-placeholder {
    color: ${props => props.theme.colors.gray};
  }

  &:read-only {
    cursor: not-allowed;
    color: ${props => props.theme.colors.gray};
  }


  ${({ color }) => color === 'lightDark' && css`
    background: ${props => props.theme.colors.backgroundLightDark};
    font-weight: 500;
    line-height: 20px;
    padding: 10px 15px;
  `}

  ${({ styleType }) => styleType === 'admin' && css`
    border: none;
    border-bottom: 2px solid ${props => props.theme.colors.borderColor};
    border-radius: 0px;
    background-color: transparent;
    font-weight: 500;
    line-height: 20px;
    padding: 10px 0px;
    box-shadow: none !important;
  `}
`

export const TextArea = styled.textarea`
  background: ${props => props.theme.colors.backgroundDark};
  color: ${props => props.theme.colors.textPrimary};
  border-radius: 10px;
  font-size: 16px;
  padding: 16px;
  outline: none;
  border-width: 1px;
  border-color: transparent;
  resize: none;
  &:focus {
    border-color: ${props => props.theme.colors.gray};
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  }
  ${({ w }) => w && css`
    width: 20%;
  `}
  &::placeholder,
  &::-webkit-input-placeholder {
    color: ${props => props.theme.colors.gray};
  }
  &:-ms-input-placeholder {
    color: ${props => props.theme.colors.gray};
  }
  &:read-only {
    cursor: not-allowed;
  }
  ${({ color }) => color === 'lightDark' && css`
    background: ${props => props.theme.colors.backgroundLightDark};
    font-weight: 500;
    line-height: 20px;
    padding: 10px 15px;
  `}
  ${({ styleType }) => styleType === 'admin' && css`
    border: none;
    border-bottom: 2px solid ${props => props.theme.colors.borderColor};
    border-radius: 0px;
    background-color: transparent;
    font-weight: 500;
    line-height: 20px;
    padding: 10px 0px;
  `}
`

export const OriginalSelect = styled.select`
  opacity: 1;
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
  height: 40px;
  box-shadow: none;
  width: 100%;
  background: 0 0;
  border: 0;
  border-bottom: 2px solid ${props => props.theme.colors.borderColor};
  border-radius: 0;
  margin-right: 10px;
  padding: 0;
  font-size: 14px;
  line-height: 40px;
  position: relative;
  outline: none !important;
  color: ${props => props.theme.colors.white};
  option {
    background-color: ${props => props.theme.colors.backgroundColor};;
  }
`
