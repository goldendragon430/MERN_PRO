import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  padding: 50px 0;

  @media (min-width: 990px) {
    flex-direction: row;
  }
`

export const LeftWrapper = styled.div`
  width: 100%;
  padding: 0px;

  @media (min-width: 990px) {
    padding: 0px 20px 0px 0px;
    width: 50%;
  }
`

export const CardContainer = styled.div`
  border-radius: 24px;
  overflow: hidden;
  display : flex;
  justify-content:center;
  img {
    max-width:100%;
    height:auto;
  }
`

export const VideoContainer = styled.div`
  padding-top: 100%;
  position: relative;
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const TableContainer = styled.div`
  display: grid;
  grid-template-columns: [first] auto [second] 1fr;
`

export const  CardInfo = styled.div`
  padding: 16px 52px 16px 52px;
  border-bottom: 1px solid rgba(119, 126, 144, .2);
  border-right: 1px solid rgba(119, 126, 144, .2);
  font-weight: 400;
  font-size: 14px;
  align-items: center;
  display: flex;
  &:nth-child(2n) {
    border-right: 0;
  }
  &:nth-last-child(1), &:nth-last-child(2) {
    border-bottom: 0;
  }
`

export const RightWrapper = styled.div`
  width: 100%;
  padding: 0px 0px 40px 0px;
  
  > h1 {
    font-size: 38px;
    font-weight: 500;
    margin-bottom: 30px;
  }

  > p {
    margin-bottom: 15px;
  }

  @media (min-width: 990px) {
    padding: 0px 0px 0px 20px;
    width: 50%;
  }
`

export const SoldOut = styled.div`
    color: ${props => props.theme.colors.primary};
    font-size: 13px;
    text-transform: uppercase;
    font-weight: 700;
    display: inline-flex;
    letter-spacing: 10px;
    margin-bottom: 5px;
    align-items: center;
    > span {
      background: #FB000F;
      padding: 4px 9px;
      display: inline-flex;
      color: #fff;
      border-radius: 4.71429px;
      text-align: center;
      letter-spacing: 2px;
      font-weight: 700;
      position: relative;
      align-items: center;
      &::before{
        content: '';
        background: #fff;
        height: 10px;
        width: 10px;
        display: block;
        border-radius: 100%;
        margin-right: 4px;
      }
    }
`
export const ItemContainer = styled.div`
  margin-bottom: 40px;
`

export const CheckItem = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  > svg {
    color: ${props => props.theme.colors.primary};
    margin-right: 10px;
    font-size: 25px;
  }

  > span {
    cursor: pointer;
    color: ${props => props.theme.colors.primary};
    margin-left: 8px;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    text-transform: uppercase;
  }
`