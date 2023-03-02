import styled, { css } from 'styled-components'

export const Container = styled.div`
  background: ${props => props.theme.colors.backgroundDark};
  margin-bottom: 20px;
  padding: 20px;
  cursor: pointer;
  box-shadow: 0px 0px 20px rgb(0 0 0 / 10%);
  border-radius: 10px;
  transition: all 150ms ease;
  overflow: hidden;
  position: relative;
`

export const ItemTitle = styled.div`
  font-size: 16px;
  line-height: 1.5;
  transition: all 150ms ease;
  position: relative;
  padding-right: 30px;
  font-weight: 100;

  ${({ isOpen }) => isOpen && css`
    font-size: 19px;
  `}
`

export const CollspanIcon = styled.span`
  position: absolute;
  top: 13px;
  right: 15px;

  > svg {
    color: ${props => props.theme.colors.textPrimary};
    transition: all 150ms ease;
  }

  ${({ isOpen }) => isOpen && css`
    > svg {
      transform: rotate(45deg);
    }
  `}
`

export const ItemDescription = styled.div`
  transition: all 150ms ease;
  height: 0px;
  font-weight: 100;
  color: ${props => props.theme.colors.gray};
  overflow: hidden;

  ${({ isOpen }) => isOpen && css`
    height: auto;
    margin-top: 20px;
  `}
`

export const ListContainer = styled.div`
  margin-top: 5px;
`

export const ListItem = styled.div`
  display: flex;
  margin-bottom: 10px;
  > svg {
    color: ${props => props.theme.colors.primary};
    margin-top: 3px;
    margin-right: 7px;
    font-size: 20px;
  }
`

