import styled, { css } from 'styled-components'

export const Container = styled.div`
  box-shadow: 0 0 8px rgb(4 17 29 / 25%);
  padding: 20px 0 21px;
  position: relative;
  z-index: 10;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  ${({ noShadow }) => noShadow && css`
    box-shadow: none;
  `}
`

export const InnerContainer = styled.div`
  //max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 50px;
    cursor: pointer;
  }
`

export const SearchWrapper = styled.div`
  background-color: ${props => props.theme.colors.lightGray};
  border-radius: 8px;
  position: relative;
  margin-top: 20px;
  
  input {
    padding-right: 35px;
    width: 100%;
  }
  svg {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 20px;
  }

  @media (min-width: 576px) {
    margin-top: 0px;
    margin-left: 20px;
    input {
      width: 150px;
    }
    width :150px;
  }

  @media (min-width: 768px) {
    input {
      width: 150px;
    }
    width :150px;

  }

  @media (min-width: 1200px) {
    input {
      width: 250px;
    }
    width :250px;

  }
`

export const MenuItem = styled.div`
  margin: 0px 10px;
  position: relative;
  &:hover {
    .drop-down {
      max-height: 500px;
    }
  }
  .search-items{
      max-height: 300px;
      overflow-y : inherit;
  }
`

export const MenuListWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`

export const MenuItemContent = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px 0px;

  span {
    font-size: 14px;
    font-weight: 700;
    user-select: none;
  }
  svg {
    margin-left: 5px;
  }
`

export const RightWrapper = styled.div`
  display: flex;
  align-items: center;

  button {
    margin-left: 15px;
  }
`

export const DropDownList = styled.div`
  max-height: 0px;
  border-radius: 8px;
  overflow: hidden;
  position: absolute;
  transition: all 0.2s linear;
  width: 215px;
  top: 100%;
  background-color: ${props => props.theme.colors.backgroundLightDark};
`

export const DropDownItem = styled.div`
  padding: 16px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all .1s;
  svg {
    transition: all .1s;
  }
  &:hover {
    background-color: ${props => props.theme.colors.backgroundActive};
    svg {
      transform: translateX(5px);
    }
  }
`

export const MobileMenuWrapper = styled.div`
  & > div {
    padding: 1.8em 1.8em 1.8em 1.8em;
    font-size: 1.15em;
    position: relative;
  }
  position: fixed;
  right: inherit;
  z-index: 1100;
  width: 0%;
  height: 100%;
  transition: all 0.5s ease 0s;
  top: 0px;
  left: 0px;
  overflow: auto;
  background: ${props => props.theme.colors?.backgroundColor};
`

export const MobileMenuItem = styled.div`
  padding: 12px 0px;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  & > span {
    font-size: 16px;
    cursor: pointer;
    color: ${props => props.theme.colors.textGray};
  }
`

export const OverLay = styled.div`
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  opacity: 1;
  transition: opacity 0.3s ease 0s;
  top: 0px;
  left: 0px;
`

export const LogoWrapper = styled.div`
  cursor: pointer;
  height: 50px;
  > img {
    height: 100%;
  }
`

export const MobileLoginWrapper = styled.div`
  button {
    width: 100%;
    margin: 15px 0px;
  }
`

export const CloseIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  font-size: 24px;
`

export const MobileDropDown = styled.div`
  > div {
    font-size: 14px;
    cursor: pointer;
    padding: 5px 0px 5px 10px;
    transition: all 0.3s linear;
    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`

export const DashboardBtnWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const AccountWrapper = styled.div`
  position: relative;
  margin-left: 20px;
`

export const RoundLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  > img {
    width: 42px;
    min-width: 42px;
    height: 42px;
  }
`

export const DashboardMenuList = styled.div`
  background-color: ${props => props.theme.colors.backgroundLightDark};
  border-radius: 8px;
  overflow: hidden;
  width: 215px;
`

export const UserInfoWrapper = styled.div`
  padding: 7px 16px 5px;
  span {
    font-size: 14px;
    font-weight: 600;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
    display: block;
    &.email {
      font-weight: 400;
    }
  }
`

export const LogoutWrapper = styled.div`
  padding: 16px;
  font-size: 14px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all .1s;
  &:hover {
    background-color: ${props => props.theme.colors.backgroundActive};
  }
  svg {
    font-size: 18px;
  }
  span {
    margin-left: 5px;
  }
`

export const MobileDashboardMenuWrapper = styled.div`
  h2 {
    margin-top: 20px;
    cursor: pointer;
    font-size: 20px;
  }
`

export const ThemeMode = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.3s linear;
  svg {
    font-size: 24px;
  }
  &:hover {
    background-color: ${props => props.theme.colors.backgroundLightDark};
  }
`
