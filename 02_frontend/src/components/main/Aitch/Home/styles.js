import styled from 'styled-components'

export const ComponentWraperStyled = styled.div`
  padding: 150px 0px 60px 0px;
  background-size: 304px 264px;
  background-repeat: no-repeat;
  background-position: 190% 150px;

  @media (min-width: 768px) {
    background-position:  100% 150px;
  }

  @media (min-width: 1200px) {
    background-position:  85% 150px;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 990px) {
    flex-direction: row;
  }
`

export const LeftWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding: 20px 0px;
  
  @media (min-width: 990px) {
    padding: 20px 20px 20px 0px;
    text-align: left;
    width: 50%;
  }

  h1{
    line-height: 1;
    font-weight: 500;
    margin-bottom: 30px;
    font-size: 36px;

    > span{
      display: block;
      color: ${props => props.theme.colors.primary};
      font-weight: 100;
    }

    @media (min-width: 768px) {
      font-size: 50px;
    }
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  button {
    color: ${props => props.theme.colors.yellow};
  }
  a {
    text-decoration:none;
  }
  @media (min-width: 990px) {
    justify-content: start;
  }
`

export const RightWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding: 0px;
  
  @media (min-width: 990px) {
    padding: 0px 0px 0px 20px;
    text-align: left;
    width: 50%;
  }
`

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;

  > img {
    max-width: 100%;
    height: 434px;
    object-fit: cover;
    border-radius: 20px;
  }
`

export const PlayWrapper = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background: #ffffff;
  border-radius: 50%;

  > svg {
    color: ${props => props.theme.colors.primary};
  }
`

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 300;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Overlay = styled.div`
  background: #1e1e1e;
  opacity: 0.9;
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 44px;
  z-index: 300;
`

export const CloseWrapper = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  cursor: pointer;
`

export const VideoWrapper = styled.div`
  width: calc(100% - 88px);
  max-width: 1510px;
  z-index: 400;
  background-color: black;
  position: relative;
  padding-bottom: 51.25%;
  overflow: hidden;

  @media (min-width: 1280px) {
    padding-bottom: 44%;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`

export const ComponentWraper = (props) => {
  return (
    <ComponentWraperStyled {...props} style={{backgroundImage: `url(${props.bgimage})`}}>
      {props.children}
    </ComponentWraperStyled>
  )
}