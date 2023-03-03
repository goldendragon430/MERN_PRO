import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 60px;
  > h2 {
    letter-spacing: -.2px;
    font-size: 26px;
    font-weight: 700;
    text-align: center;
  }
  > p {
    font-size: 17px;
    font-weight: 400;
    margin-bottom: 20px;
  }
`

export const SubscribeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    margin-left: 15px;
    margin-top: 10px;
  }
  input {
    margin-top: 10px;
  }
`