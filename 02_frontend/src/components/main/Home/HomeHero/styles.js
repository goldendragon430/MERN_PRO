import styled from 'styled-components'

export const Container = styled.div`
  padding: 50px 0px;
`

export const InnerContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  //max-width: 1440px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
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
  height: 195px;
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
    height: 135px;
  }
  @media (min-width: 700px) {
   > img{
      height: 255px;
    }
      height: 300px;
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