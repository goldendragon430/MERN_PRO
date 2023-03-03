import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 35px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-direction: column-reverse;

  @media (min-width: 994px) {
    flex-direction: row;
  }
`

export const Graphic = styled.div`
  height: 300px;
  flex: 0 0 55%;
  img {
    width: 100%;
    object-fit: contain;
  }
`

export const DetailsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  > h3 {
    margin-bottom: 15px;
    font-size: 26px;
    font-weight: 700;
  }
  h4 {
    letter-spacing: -.2px;
    font-size: 17px;
    font-weight: 400;
    line-height: 26px;
  }

  @media (min-width: 994px) {
    max-width: 40%;
    align-items: flex-start;
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
  button {
    margin-bottom: 20px;
    margin-right: 15px;
  }
`
