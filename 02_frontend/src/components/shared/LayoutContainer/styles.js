import styled from 'styled-components'

export const Container = styled.div``

export const InnerContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  //max-width: 1440px;
  margin: 0 auto;
  padding-left: 5px;
  padding-right: 5px;

  @media (min-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`