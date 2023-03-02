import styled from 'styled-components'

export const ComponentWraper = styled.div`
  background: ${props => props.theme.colors.backgroundLightGray};
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 66px 0px 20px;

  @media (min-width: 1200px) {
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
    margin-bottom: 13px;
    font-size: 16px;
    font-weight: 500;
    line-height: 30px;
    text-align: center;
  }

  @media (min-width: 768px) {
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
      width: 500px;
    }
  }
`

export const RightWrapper = styled.div`
  flex: 1;
  display: none;
  margin-top: 20px;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    justify-content: center;
    display: flex;
  }
  @media (min-width: 1200px) {
    justify-content: flex-end;
    margin-top: 0px;
    margin-bottom: 0px;
  }
`

export const ImgWrapper = styled.div`
  width: fit-content;
  img {
    height:520px;
  }
  h2 {
    font-size: 28px;
    margin-bottom: 15px;
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    margin-bottom: 50px;
  }

  @media (min-width: 1200px) {
    justify-content: start;
    margin-bottom: 0px;
  }
`