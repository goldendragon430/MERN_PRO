import styled, { css } from 'styled-components'

export const Container = styled.div`
  grid-gap: 25px;
  scroll-snap-type: x mandatory;
  overscroll-behavior-x: contain;
  height: 28px;
  width: 100%;
  grid-auto-columns: max-content;
  grid-auto-flow: column;
  margin-bottom: 15px;
  font-family: DM Sans,sans-serif;
  display: grid;
  overflow-x: auto;
  overflow-y: hidden;
`

export const Tab = styled.span`
  font-size: 14px;
  cursor: pointer;

  ${({ active }) => active && css`
    pointer-events: none;
    border-bottom: 2px solid ${props => props.theme.colors.white};
    font-weight: 600;
  `}
`