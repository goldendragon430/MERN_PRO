import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

 
`
export const ImageWrapper  = styled.img`
    width:200px;
    height:200px;
    cursor:pointer;
    border-radius:10px;
`
export const Card = styled.div`
border-left: 0px solid gray;
padding-left: 15px;
padding-top: 15px;
`
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
  margin-bottom: 30px;
  padding: 50px 20px !important;
  background-repeat: no-repeat;
  background-size: contain;
  background-image:url(https://limewire.com/landing/aitch/images/shapes.png);
  .mySwiper {
    max-width: 1000px;
  }
  @media (min-width: 990px) {
    padding: 100px 0px;
  }
`
export const SwapContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`
export const KLayoutContainer = styled.div`
  max-width: 1000px;
  width: 100%;
  //max-width: 1440px;
  margin: 0 auto;
  padding-left: 0px;
  padding-right: 0px;
  margin : 0px;
  @media (min-width: 768px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`