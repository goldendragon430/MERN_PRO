
import styled from 'styled-components'

export const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 15px;
  }
`

export const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  button.round {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 7px;
    display: flex;
  }
`

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 50px;

  margin-left: 0px;
  width: 100%;

  > div {
    width: 100%;
    margin: 10px 0px;
  }

  @media (min-width: 576px) {
    margin-left: -10px;
    width: calc(100% + 20px);

    > div {
      width: calc(50% - 20px);
      margin: 10px;
    }
  }

  @media (min-width: 768px) {
    > div {
      width: calc(33.33% - 20px);
      margin: 10px;
    }
  }

  @media (min-width: 993px) {
    > div {
      width: calc(25% - 20px);
      margin: 10px;
    }
  }
`
