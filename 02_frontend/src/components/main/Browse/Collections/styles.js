import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 20px;
`

export const ContentHeader = styled.div`
  > h2 {
    font-size: 26px;
    font-weight: 700;
  }
`

export const CreatorList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-left: 0px;
  padding-top: 20px;
  > div {
    width: 100%;
    margin: 15px 0px;
  }

  @media (min-width: 576px) {
    width: calc(100% + 20px);
    margin-left: -10px;
    > div {
      margin: 10px;
      width: calc(50% - 20px);
    }
  }

  @media (min-width: 768px) {
    width: calc(100% + 20px);
    margin-left: -10px;
    > div {
      margin: 10px;
      width: calc(33.33% - 20px);
    }
  }

  @media (min-width: 994px) {
    width: calc(100% + 30px);
    margin-left: -15px;
    > div {
      margin: 15px;
      width: calc(25% - 30px);
    }
  }
`