import styled from 'styled-components'

export const Container = styled.div`
  margin: 20px 0px 0px 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */

  @media (min-width: 768px) {
    padding-top: 32px;
    padding-bottom: 78px;
  }

  @media (min-width: 1200px) {
    padding: 66px 0 78px;
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
  max-width: 100%;
  flex-flow: wrap;

  a {
    &:last-child {
      margin-left: 15px;
    }
    margin-bottom: 16px;
    text-decoration: none;
  }

  @media (min-width: 1200px) {
    justify-content: start;
    margin-bottom: 0px;
  }

  @media (min-width: 768px) {
    a {
      margin-bottom: 0px;
    }
  }
`

export const RightWrapper = styled.div`
  flex: 1;
  display: none;
  img {
    height: 120px;
  }
  
  @media (min-width: 1200px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`