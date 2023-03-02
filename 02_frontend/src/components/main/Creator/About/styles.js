import styled from 'styled-components'

export const Summary = styled.div`
  h2 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 7px;
  }
  p {
    font-size: 15px;
  }
`

export const DetailBox = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.lightGray};
  border-radius: 10px;
  margin-top: 25px;
  flex-direction: column;
  margin-bottom: 30px;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`

export const DetailItem = styled.div`
  width: 100%;
  margin: 10px 0px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  > p {
    font-size: 15px;
    font-weight: 600;
  }
  > div {
    display: flex;
    align-items: center;
    font-size: 14px;
    svg {
      margin-right: 5px;
    }
  }
  @media (min-width: 769px) {
    width: 25%;
  }
`
