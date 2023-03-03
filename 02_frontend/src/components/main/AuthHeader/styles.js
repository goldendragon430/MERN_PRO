import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0px;
`

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 50px;
    cursor: pointer;
  }
`

export const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    display: none;
    margin-right: 10px;
    @media (min-width: 768px) {
      display: block;
    }
  }
`