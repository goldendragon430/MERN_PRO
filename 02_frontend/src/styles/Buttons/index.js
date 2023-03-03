
import styled, { css, keyframes } from 'styled-components'
import { darken } from 'polished'


const loadingSpineer = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const IconButton = styled.button`
  background-color: ${props => props.theme.colors.backgroundLightDark};
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 5px;
  padding: 7px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .2s ease-in;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  > svg {
    font-size: 17px;
    color: ${props => props.theme.colors.white};
  }

  &:hover {
    background-color: ${props => props.theme.colors.backgroundActive};
  }

  &:active {
    background-color:  ${({ theme }) => darken(0.04, theme.colors.backgroundActive)};
  }

  ${({ naked }) => naked && css`
    background-color: transparent;
    border-color: transparent;
    padding: 2px;
  `}
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  background: #CCC;
  color: #FFF;
  border: 1px solid #CCC;
  border-radius: ${({ borderRadius }) => !borderRadius ? '8px' : borderRadius};
  line-height: 20px;
  padding: 10px 17px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all .2s ease-in;

  &:active {
    background: ${() => darken(0.07, '#CCC')};
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ bgtransparent }) => bgtransparent && css`
    background: transparent !important;
    border: 1px solid ${props => props.theme.colors.buttonBorder};
  `}
  ${({ initialIcon }) => initialIcon && css`
    text-align: left;
    ${props => props.theme?.rtl && css`
      text-align: right;
    `}
    img{
      vertical-align: middle;
    }
    span {
      padding-left: 15%
      ${props => props.theme?.rtl && css`
        padding-right: 15%;
        padding-left: 0
    `}
    }
  `}
  ${({ withIcon }) => withIcon && css`
    svg {
      margin-right: 5px;
    }
  `}
  ${({ outline }) => outline && css`
    background: #FFF;
    color: #CCC;
    border-color: #CCC;
    &:active {
      color: #FFF;
      background: ${darken(0.07, '#CCC')};
    }
    &:hover {
      background: ${darken(0.07, '#CCC')};
      color: #FFF;
    }
  `}
  ${({ circle }) => circle && css`
    background: #CCC;
    color: #FFF;
    border-color: #CCC;
    padding: 0;
    width: 34px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    border-radius: 50%;
    &:active {
      color: #FFF;
      background: ${darken(0.07, '#CCC')};
    }
  `}
  ${({ circle, outline }) => circle && outline && css`
    background: #FFF;
    color: #CCC;
    border-color: #CCC;
    padding: 0;
    width: 34px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    border-radius: 50%;
    &:active {
      color: #FFF;
      background: ${darken(0.07, '#CCC')};
    }
  `}
  ${({ color }) => color === 'primary' && css`
    display: flex;
    align-items: center;
    background: ${props => props.theme.colors.primary};
    color: #FFF;
    border-color: ${props => props.theme.colors.primary};
    &:hover {
      background: ${props => darken(0.04, props.theme.colors.primary)};
    }
    &:active {
      background: ${props => darken(0.1, props.theme.colors.primary)};
    }
    ${({ naked }) => naked && css`
      background: transparent;
      color: ${props => props.theme.colors.white};
      &:hover {
        color: #FFF;
      }
      &:active {
        color: #FFF;
      }
    `}
  `}
  ${({ color }) => color === 'blue' && css`
    display: flex;
    align-items: center;
    background: ${props => props.theme.colors.blue};
    color: #FFF;
    border-color: ${props => props.theme.colors.blue};
    &:hover {
      background: ${props => darken(0.04, props.theme.colors.blue)};
    }
    &:active {
      background: ${props => darken(0.1, props.theme.colors.blue)};
    }
    ${({ naked }) => naked && css`
      background: transparent;
      color: ${props => props.theme.colors.white};
      &:hover {
        color: #FFF;
      }
      &:active {
        color: #FFF;
      }
    `}
  `}
  ${({ color }) => color === 'gray' && css`
    display: flex;
    align-items: center;
    background: ${props => props.theme.colors.backgroundLightDark};
    color: ${props => props.theme.colors.white};
    border-color: ${props => props.theme.colors.backgroundLightDark};
    &:hover {
      background: ${props => darken(0.04, props.theme.colors.backgroundLightDark)};
    }
    &:active {
      background: ${props => darken(0.1, props.theme.colors.backgroundLightDark)};
    }
    ${({ naked }) => naked && css`
      background: transparent;
      color: ${props => props.theme.colors.white};
      &:hover {
        color: #FFF;
      }
      &:active {
        color: #FFF;
      }
    `}
  `}

  
  ${({ isLoading }) => isLoading && css`
    color: transparent;
    pointer-events: none;
    &::after {
      content: "";
      position: absolute;
      width: 16px;
      height: 16px;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      border: 2px solid transparent;
      border-top-color: white;
      border-bottom-color: white;
      border-radius: 50%;
      animation: ${loadingSpineer} 1s linear infinite;
    }
  `}
`