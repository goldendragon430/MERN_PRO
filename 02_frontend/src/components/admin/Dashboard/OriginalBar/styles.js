import styled, { css } from 'styled-components'

export const OriginalWrapper = styled.div`
  position: relative;
  box-shadow: 0 7px 14px rgb(60 66 87 / 10%), 0 3px 6px rgb(0 0 0 / 10%);
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  opacity: .5;
  -webkit-mask: linear-gradient(270deg,#fff,rgba(0,0,0,.2));
  ${({ bgimage }) => css`
    background: #fff url(${bgimage}) 50%/cover;
  `}
  width: 100%;
  height: 250px;
  @media (min-width: 768px) {
    height: 120px;
  }
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  > img {
    height: 45px;
    margin: 10px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  
  button {
    width: 100%;
    border-radius: 50px;
    position: relative;

    &:last-child{
      margin-left: 0px;
      margin-top: 10px;
      padding-right: 35px;
      &:hover{
        > svg {
          transform: translateX(4px);
        }
      }
      > svg {
        transition: all 0.3s;
        position: absolute;
        right: 14px;
      }
    }
    @media (min-width: 768px) {
      width: initial;
      &:last-child{
        margin-left: 10px;
        margin-top: 0px;
      }
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    width: inherit;
  }
`
