import styled from 'styled-components'

export const Container = styled.div``

export const InnerContainer = styled.div`
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`