import styled from 'styled-components'

export const Container = styled.div`
  padding: 50px 0px;
  background: ${props => props.theme.colors.backgroundLightGray};

  @media (min-width: 990px) {
    padding: 100px 0px;
  }
`

export const Heading = styled.div`
  margin-bottom: 40px;
  text-align: center; 
  > h2 { 
    font-size: 28px;
    font-weight: 500;
    margin-bottom: 5px;
    @media (min-width: 990px) {
      font-size: 38px;
    }
  }
`

export const IteamContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const ItemWrapper = styled.div`
  width: 100%;
  padding: 0px 10px; 
  text-align: center;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > h3 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 8px;
  }

  > p {
    line-height: 1.6;
    font-size: 16px;
    font-weight: 100;
    > span {
      color: ${props => props.theme.colors.primary};
      cursor: pointer;
    }
  }

  @media (min-width: 490px) {
    width: 50%;
  }

  @media (min-width: 990px) {
    margin-bottom: 0px;
    width: 33.33%;
  }
`

export const ServiceIcon = styled.span`
  width: 60px;
  height: 60px;
  background: ${props => props.theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  > svg {
    font-size: 25px;
  }
`