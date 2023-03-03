import styled from 'styled-components'

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`

export const Offers = styled.div`
  width: 100%;
  @media (min-width: 1200px) {
    width: 63%;
  }
`

export const Starred = styled.div`
  width: 100%;
  @media (min-width: 1200px) {
    width: 35%;
  }
`

export const CardInnerWrapper = styled.div`
  padding: 15px 20px;
`

export const CardBody = styled.div`
  margin-top: 15px;
  height: 300px;
  display:flex;
  align-items:center;
  max-width:500px;
`

export const StarredCardHeader = styled.div`
  display: flex;
  align-items: center;
  height: 28px;
  width: 100%;
  margin-bottom: 15px;
  > svg {
    margin-right: 6px;
  }
`
export const ItemView = styled.div`
display: flex;
grid-column-gap: 20px;
grid-template-columns: repeat(auto-fit, minmax(200px, 0fr));
 
`
export const SwapContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (min-width: 1200px) {
    flex-direction: row;
  }
`
export const KLayoutContainer = styled.div`
  
  
  margin: 0 auto;
  padding-left: 0px;
  padding-right: 0px;
  margin : 0px;
  @media (min-width: 768px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`
export const SwiperWrapper = styled.div`
  margin-bottom: 30px;
  max-width: 600px;
  padding: 50px 20px !important;
  background-repeat: no-repeat;
  background-size: contain;
  background-image:url(https://limewire.com/landing/aitch/images/shapes.png);
  .mySwiper {
    max-width: 1400px;
  }
  @media (min-width: 990px) {
    padding: 100px 0px;
  }
  @media (max-width: 769px) {
    max-width: 350px;
    padding: 20px 0px !important;
  }
`