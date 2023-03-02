import styled from 'styled-components'

export const Container = styled.div`
  margin: 20px 0px 0px 0px;
  padding: 0px;
  height: auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 50px 0px;
    height: 400px;
  }

  @media (min-width: 1200px) {
    margin: 20px 0px;
    padding: 66px 0 78px;
    height: 400px;
    flex-direction: row;
  }
`

export const LeftWrapper = styled.div`
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
    margin-bottom: 25px;
    font-size: 16px;
    font-weight: 500;
    line-height: 25px;
    text-align: center;
  }

  @media (min-width: 768px) {
    > h1 {
      .marker {
        font-size: 32px;
        padding: 20px 15px 22px;
      }
    }   
    h2 {
      width: 480px;
      margin: 0 auto 30px;
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
      width: 500px;
      margin: 0 0 35px;
    }
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;

  a {
    text-decoration: none;
  }

  @media (min-width: 768px) {
    margin-bottom: 50px;
  }

  @media (min-width: 1200px) {
    justify-content: start;
    margin-bottom: 0px;
  }
`

export const RightWrapper = styled.div`
  flex: 1;
  display: none;
  img {
    height: 400px;
    position: relative;
    top: -66px;
  }
  @media (min-width: 1200px) {
    display: block;
    text-align: right;
    margin-top: 0px;
    margin-bottom: 0px;
  }
`