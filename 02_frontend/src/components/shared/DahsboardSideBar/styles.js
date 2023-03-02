import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: fixed;
  background: ${props => props.theme.colors.backgroundPage};
  z-index: 1000;
  transition: all 0.25s ease;
  height: calc(var(--vh, 1vh) * 100);
  width: 100vw;
  background-color: ${props => props.theme.colors?.backgroundColor};
  top: 0px;
  left: 0px;
  min-height: 100%;
  width: 275px;
  box-shadow: 0 19px 38px rgb(0 0 0 / 30%), 0 15px 12px rgb(0 0 0 / 22%);
  ${({ isCollapse }) => isCollapse && css`
    margin-left: -500px;
  `}
  > button {
    width: 46px;
    height: 46px;
    background-color: ${props => props.theme.colors?.backgroundColor};
    border-radius: 0px;
    border-bottom-right-radius: 15px;
    justify-content: center;
    align-items: center;
    display: flex;
    position: absolute;
    top: 0;
    right: -46px;
    box-shadow: 0 1px 2px rgb(0 0 0 / 35%);
  }
  .account {
      > div {
        padding-left: 20px;
      }
    }
    .creator {
      padding-left: 20px;
    }

  @media (min-width: 768px) {
    .account {
      > div {
        padding-left: 30px;
      }
    }
    .creator {
      padding-left: 30px;
    }
  }

  @media (min-width: 1200px) {
    position: relative;
    width: 250px;
    margin-left: 0px;
    box-shadow: none;
    .account {
      > div {
        padding-left: 0px;
      }
    }
    .creator {
      padding-left: 0px;
    }
  }
`

export const MenuListWrapper = styled.div`
  width: 100%;
  > div:not(:last-child) {
    margin-bottom: 10px;
  }
`

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: color 0.3s linear;
  &:hover {
    color: ${props => props.theme.colors.textGray};
  }
  span {
    margin-left: 10px;
    font-size: 14px;
  }
  svg {
    font-size: 18px;
  }
`

export const NewCreatorItem = styled.div`
  display: flex;
  align-items: center;
  padding: 13px 20px 12px 0;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  cursor: pointer;
  transition: color 0.3s linear;
  &:hover {
    color: ${props => props.theme.colors.textGray};
  }
  span {
    font-size: 14px;
    margin-left: 10px;
  }
  svg {
    font-size: 18px;
  }
`