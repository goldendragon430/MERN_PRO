import styled from 'styled-components'
import React from 'react'

const ContainerStyled = styled.div`
  padding: 66px 0 40px 0px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
`
export const Container = (props) => {
  return (
    <ContainerStyled
      {...props}
      style={{ backgroundImage: `url(${props.bgimage})` }}
    >
      {props.children}
    </ContainerStyled>
  )
}

export const InnerContainer = styled.div`
   
  width: 100%;
   
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  @media (min-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`

export const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`

export const BottomContent = styled.div`
  display: flex;
  padding: 15px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .hide_mobile {
    display: none;
  }
  > p {
    margin-bottom: 15px;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    > p {
      margin-bottom: 0px;
      .hide_mobile {
        display: inline;
      }
    }
  }
`

export const LeftWrapper = styled.div`
  max-width: 100%;
  width: 100%;
  position: relative;
  > h1 {
    margin-bottom: 25px;
    text-align: center;
    .marker {
      width: fit-content;
      color: #fff;
      white-space: nowrap;
      letter-spacing: -.2px;
      background-color: ${props => props.theme.colors.primary};
      font-size: 20px;
      font-weight: 700;
      line-height: 20px;
      display: block;
      margin: 0 auto;
      padding: 10px;
    }
  }
  h2 {
    letter-spacing: -.2px;
    margin-bottom: 35px;
    font-size: 19px;
    font-weight: 500;
    line-height: 30px;
    text-align: center;
  }

  @media (min-width: 576px) {
    > h1 {
      .marker {
        font-size: 32px;
        padding: 20px 15px 22px;
      }
    }    
  }

  @media (min-width: 1200px) {
    max-width: 50%;
    > h1 {
      text-align: left;
      .marker {
        margin: 0;
      }
    }
    h2 {
      text-align: left;
    }
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  button {
    &:last-child {
      margin-left: 15px;
    }
  }
  @media (min-width: 1200px) {
    justify-content: flex-start;
  }
`

export const RightWrapper = styled.div`
  cursor: pointer;
  width: 100%;
  position: relative;
  height: 325px;
  margin-top: 20px;
  border-radius: 20px;
  flex-direction: column;
  display: flex;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 10px rgb(4 17 29 / 25%);
  > img {
    width: 100%;
    object-fit: cover;
    height: 255px;
  }

  @media (min-width: 1200px) {
    margin-top: 0px;
    margin-left: 55px;
  }
`

export const DetailWrapper = styled.div`
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  padding: 6px 20px;
  display: flex;
  align-items: center;

  > p {
    font-size: 15px;
  }
`

export const LeftSide = styled.div`
  p {
    margin-bottom: 2px;
    font-size: 15px;
    font-weight: 600;
  }
`

export const ArtistWrapper = styled.div`
  display: flex;
  font-size: 15px;
  font-weight: 500;
  align-items: center;
  img {
    width: 23px;
    height: 23px;
    border-radius: 50%;
    margin-right: 7px;
    position: relative;
  }
  svg {
    margin-left: 5px;
    color: ${props => props.theme.colors.primary};
  }
`

export const SocialWrapper = styled.div`
  display: flex;
`

export const SocialItem = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  position: relative;
  > img {
    width: 30px;
    object-fit: cover;
    margin-right: 10px;
  }
  color: ${props => props.theme.colors.white};
  &.discord {
    margin-right: 50px;
    &::after {
      content: "";
      width: 1px;
      height: 30px;
      z-index: 1;
      background: ${props => props.theme.colors.borderColor};
      display: inline-block;
      position: absolute;
      right: -25px;
    }
  }
  .hide_mobile {
    display: none;
  }
  @media (min-width: 769px) {
    .hide_mobile {
      display: block;
    }
  }
`