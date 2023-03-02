import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 10px;
`

export const ToolBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Heading = styled.div`
  display: flex;
  align-content: center;
  align-items: center;

  h2 {
    margin-right: 30px;
    font-size: 26px;
    font-weight: 700;
  }
  button {
    margin-right: 15px;
    svg {
      margin-right: 5px;
      font-size: 18px;
    }
  }
`

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-bottom: 10px;
  button {
    width: 100%;
    svg {
      margin-right: 10px;
    }
  }
`

export const ExtraContent = styled.div``