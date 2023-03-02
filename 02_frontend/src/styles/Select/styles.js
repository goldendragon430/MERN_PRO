import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Option = styled.div`
  padding: 5px;
  min-width: 70px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.colors.backgroundActive};
  }
  ${props => props.selected && css`
    background-color: ${props => props.theme.colors.backgroundDark};
  `}
  svg {
    vertical-align: text-top;
  }
  ${({ withIcons }) => withIcons && css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    svg {
      margin-right: 3px;
      ${props => props.theme?.rtl && css`
        margin-left: 3px;
        margin-right: 0px;
      `}
    }
  `}
`

export const Options = styled.div`
  position: absolute;
  min-width: 100%;
  background-color: ${props => props.theme.colors.backgroundLightDark};
  margin-top: 5px;
  z-index: 10000;
  box-shadow: 0px 4px 10px rgb(0 0 0 / 5%);
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid ${props => props.theme.colors.backgroundLightDark};
  ${({ position }) => position?.toLowerCase() === 'left' && css`
    left: 0;
    margin-left: -1px;
    ${props => props.theme?.rtl && css`
      margin-right: -1px;
      margin-left: 0px;
      right: 0;
      left: initial;
    `}
  `}
  ${({ position }) => position?.toLowerCase() === 'right' && css`
    right: 0;
    margin-right: -1px;
    ${props => props.theme?.rtl && css`
      margin-left: -1px;
      margin-right: 0px;
      left: 0;
      right: initial;
    `}
  `}
`

export const Selected = styled.div`
  padding: 10px 15px;
  font-size: 15px;
  line-height: 17px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 11;
  height: 100%;
`

export const Select = styled.div`
  display: inline-block;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.backgroundLightDark};
  position: relative;
  margin-top:5px;
  ${props => props.disabled && css`
    pointer-events: none;
  `}
  ${props => props.open && css`
    background-color: ${props => darken(0.07, props.theme.colors.backgroundLightDark)};
  `}
`

export const Chevron = styled.div`
  font-size: 13px;
  display: flex;
  align-items: center;
  margin-left: 5px;
  color: ${props => props.theme.colors.white};
`

export const Header = styled.div`
  flex: 1;
  svg {
    font-size: 13px;
  }
`

export const SelectImage = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 1000px;
  margin-left: 5px;
  overflow: hidden;
  ${props => props.theme?.rtl && css`
        margin-left: 5px;
        margin-right: 0;
  `}
  img {
    width: 100%;
    height: 100%;
  }
`
