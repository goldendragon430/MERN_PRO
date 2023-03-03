import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`

export const ImgWrapper = styled.div`
  border-radius: 20px;
  width: 100%;
  position: relative;
  overflow: hidden;
  border: 2px solid ${props => props.theme.colors.borderColor};
  padding: 10px;
  margin-top: 15px;

  > img {
    width: 100%;
    object-fit: cover;
    border-radius: 20px;
  }

  @media (min-width: 576px) {
    width: 350px;
    height: 350px;
    img {
      height: 100%;
    }
  }
`

export const InfoWrapper = styled.div`
  flex: 1;
  padding-top: 5px;
  margin-top: 15px;

  > button {
    width: 100%;
  }

  @media (min-width: 576px) {
    > button {
      width: auto;
    }
  }

  @media (min-width: 1200px) {
    padding-left: 25px;
  }
`

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
`

export const HeadingTitleWrapper = styled.div`
  width: 100%;
  > h2 {
    font-weight: 700;
    margin-top: 1px;
    font-size: 24px;
    text-align: center;
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      font-size: 14px;
      margin-right: 5px;
    }
    svg {
      font-size: 17px;
      color: ${props => props.theme.colors.primary};
    }
  }

  @media (min-width: 576px) {
    width: auto;
    h2 {
      text-align: left;
    }
    > div {
      justify-content: flex-start;
    }
  }
`

export const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ActionItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 10px;
  transition: all 0.3s linear;
  svg {
    font-size: 16px;
    margin-right: 5px;
  }
  background-color: ${props => props.theme.colors.backgroundLightDark};
  border-radius: 8px;
  width: calc(50% - 10px);
  padding: 10px;
  &:hover {
    color: ${props => props.theme.colors.textGray};
  }

  @media (min-width: 576px) {
    margin-top: 0px;
    background-color: transparent;
    width: auto;
    margin-left: 10px;
  }
`

export const Description = styled.div`
  margin-bottom: 15px;
  button {
    cursor: pointer;
    border: none;
    background: transparent;
    margin-left: 2px;
    color: ${props => props.theme.colors.textGray};
  }
`

export const Editions = styled.div`
  margin-bottom: 15px;
  color: ${props => props.theme.colors.textGray};
  .limited_to {
    border-right: 1px solid ${props => props.theme.colors.borderColor};
    margin-right: 9px;
    padding-right: 13px;
    font-weight: 600;
  }
`

export const HasLoyalty = styled.div`
  label {
    font-size: 15px;
  }
  > div {
    display: flex;
    align-content: center;
    > span {
      font-size: 26px;
      font-weight: 700;
      text-transform: uppercase;
      margin-right: 10px;
    }
  }
`

export const Option = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;

  > span {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }
`

export const Royalty = styled.div`
  margin-bottom: 15px;
  font-size: 12px;
  margin-top: 10px;
  color: ${props => props.theme.colors.textGray};
`

export const BlockChainBar = styled.div`
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-radius: 10px;
  margin-top: 30px;
  display: flex;
  .block {
    padding: 9px 10px 5px 15px;
    width: 40%;
    display: none;
    max-width: 370px;
  }
  .eth {
    padding: 10px 20px;
  }

  @media (min-width: 576px) {
    .block {
      display: block;
    }
    .eth {
      border-left: 1px solid ${props => props.theme.colors.borderColor};
    }
  }
`

export const EthereumWrapper = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 16px;
    margin-right: 5px;
  }
  span {
    font-size: 14px;
  }
`
