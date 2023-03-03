import styled from 'styled-components'

export const Container = styled.div`
  box-shadow: 0 0 8px rgb(4 17 29 / 25%);
  padding: 20px 0 21px;
  z-index: 200;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  position: fixed;
  top: 0px;
  background-color: ${props => props.theme.colors.backgroundColor};
`

export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 50px;
    cursor: pointer;
  }
`

export const MenuItem = styled.div`
  margin: 0px 10px;
  cursor: pointer;
  font-size: 14px;
`

export const MenuListWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 400px;
`

export const RightWrapper = styled.div`
  display: flex;
  align-items: center;

  button {
    margin-left: 15px;
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

export const CloseIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  font-size: 24px;
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
export const MoblieMenuItem = styled.div`
    margin: 15px 0px;
    font-size: 16px;
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

