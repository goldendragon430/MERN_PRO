import styled from 'styled-components'

export const Container = styled.div`
  padding: 40px 0;
  h2 {
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 20px;
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const FaqItem = styled.div`
  font-weight: 600;
  line-height: 25px;
  width: 100%;
  margin-bottom: 30px;

  h4 {
    margin-bottom: 5px;
  }
  p {
    font-weight: 400;
  }

  @media (min-width: 576px) {
    width: 47.5%;
  }
`
