import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ zx }) => zx && css`
    .popup {
      z-index: ${zx} !important;
    }
  `}
`

export const ModalDialog = styled.div`
  position: relative;
  background-color: white ;
  padding: ${({ padding }) => padding || '0px'};
  width: 100vw;
  border-radius: 0px;
  box-sizing: border-box;
  margin-top: auto;
  margin-bottom: auto;
  height: ${({ height }) => height || '100%'};;
  max-height: 100vh;
  overflow: auto;
  
  @media (min-width: 769px) {
    width: ${({ width }) => width || '50%'};
    max-height: 90vh;
    border-radius: 10px;
    height: auto;
  }
`

export const ModalHeader = styled.div`
  display: flex;
   
`

export const ModalTitle = styled.h2`
  text-align: left;
  font-size: 30px;
  letter-spacing: 0px;
  color: #010300;
  opacity: 1;
  margin: 0px 0px;
  margin-bottom: 20px;
  padding-left: 10px;
  text-transform: capitalize;
  flex: 1;
`

export const ModalOrderTypes = styled.div`
  margin-right: 15px;
`
export const ModalIcon = styled.span`
  position: fixed;
  right: 15px;
  top: 10px;
  font-size: 24px;
  cursor: pointer;
  z-index: 2;
  
  svg{
    border-radius: 50%;
  }

  @media(min-width: 769px){
    position: absolute;
  }
`

export const ModalBackHeader = styled.div`
  height: 50px;
  background-color: green;
  width: 100%;
  position: fixed;
  z-index: 2;

  @media (min-width: 769px) {
    display: none;
  }
`
