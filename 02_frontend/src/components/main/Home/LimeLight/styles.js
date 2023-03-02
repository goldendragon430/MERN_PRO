import styled from 'styled-components'

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > h2 {
    margin-bottom: 20px;
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 7px;
    display: flex;
  }
`

export const SwiperWrapper = styled.div`
  padding-bottom: 30px;
`
