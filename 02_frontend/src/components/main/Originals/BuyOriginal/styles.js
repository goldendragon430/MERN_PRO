import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => props.theme.colors.primaryContrast};
`

export const InnerContainer = styled.div`
  //max-width: 1440px;
  width: 100%;
  //max-width: 1440px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`

export const ContentContainer = styled.div`
  padding: 40px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > h2 {
    font-size: 22px;
    font-weight: 600;
    width: 25%;
  }
  p {
    width: 75%;
  }

  @media (min-width: 769px) {
    > p {
      width: 40%;
    }
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  > button {
    white-space: nowrap;
  }

  @media (min-width: 576px) {
    justify-content: flex-end;
    width: 20%;

    > div {
      width: 100%;
    }
  }
`