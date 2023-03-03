import styled from 'styled-components'

export const Container = styled.div`
  padding: 30px 20px;
`

export const Heading = styled.div`
  text-align: center;
  > h3 {
    font-size: 26px;
  }
  p {
    margin-top: 8px;
    font-size: 14px;
    span {
      font-weight: 600;
    }
  }
`

export const Body = styled.div`
  margin-top: 25px;
`

export const WalletItem = styled.div`
  padding: 14px 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  .bar {
    height: 28px;
    width: 2px;
    background-color: rgba(0,147,75,.25);
    margin-right: 10px;
    transition: all 0.3s linear;
  }
  img {
    width: 20px;
    height: 20px;
    object-fit: cover;
  }
  p {
    margin-left: 10px;
    font-size: 18px;
  }
  &:hover {
    .bar {
      background-color: ${props => props.theme.colors.primary};
    }
  }
`