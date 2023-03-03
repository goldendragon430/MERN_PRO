import styled from 'styled-components'

export const Container = styled.div`
  border-top: 1px solid ${props => props.theme.colors.borderColor};
`

export const InnerContainer = styled.div`
 // max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  > div {
    padding: 20px 0px;
  }

  @media (min-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
    > div {
      padding: 70px 70px 54px;
    }
  }

  @media (min-width: 1300px) {
   flex-direction: row;
  }
`

export const LeftSide = styled.div`
  .marker {
    width: fit-content;
    white-space: nowrap;
    letter-spacing: -.2px;
    background-color: ${props => props.theme.colors.primary};
    padding: 10px 10px 12px;
    font-size: 24px;
    font-weight: 700;
    line-height: 20px;
    display: block;
    margin: 0 auto;
    color: white;
  }

  @media (min-width: 1300px) {
   .marker {
    margin: 0px;
   }
  }
`

export const RightSide = styled.div`
  flex-flow: row;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  padding-right: 0;
  display: flex;
  width: 100%;
  > div {
    width: calc(50% - 50px);
  }
  @media (min-width: 768px) {
    width: 100%;
    > div {
      width: calc(25% - 50px);
    }
  }
`

export const FooterMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 30px 25px;

  > span {
    cursor: pointer;
    line-height: 1.14286;
    font-size: 14px;
    font-weight: 700;
    color: ${props => props.theme.colors.textGray};
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
  span.bold {
    color: ${props => props.theme.colors.white};
  }

  @media (min-width: 769px) {
    margin: 0px 25px;
  }
`