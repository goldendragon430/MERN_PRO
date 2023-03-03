import styled, { css } from 'styled-components'

export const Container = styled.div`

`

export const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.textGray};
  cursor: pointer;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  justify-content: space-between;
  padding: 13px 20px 12px 0;
  font-size: 13px;
  font-weight: 700;

  ${({ open }) => open && css`
    color: ${props => props.theme.colors.white};
    svg {
      transform: rotate(180deg);
      transition: all 0.2s linear;
    }
  `}
`

export const AccordionContent = styled.div`
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  padding: 20px 20px 20px 0;
`