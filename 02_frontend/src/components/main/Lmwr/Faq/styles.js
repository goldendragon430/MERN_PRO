import styled from 'styled-components'

export const ComponentWraper = styled.div`
  background: ${props => props.theme.colors.lightGray};
  padding: 40px 0 80px;
`
export const FaqHeader = styled.div`
  margin-bottom: 20px;
  h2 {
    letter-spacing: -.2px;
    font-size: 26px;
    font-weight: 700;
  }
`

export const FaqMain = styled.div`
  flex-flow: wrap;
  justify-content: space-between;
  margin-top: 50px;
  margin-bottom: -30px;
  display: flex;
`

export const FaqItem = styled.div`
  width: 100%;
  margin-bottom: 30px;
  letter-spacing: -.2px;
  line-height: 25px;
  font-size: 15px;

  b {
    margin-bottom: 5px;
  }
  p {
    font-weight: 100;
  }

  @media (min-width: 768px) {
    width: 47.5%;
  }
`
