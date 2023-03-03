import styled from 'styled-components'

export const Container = styled.div`
  padding: 50px 0px;

  @media (min-width: 990px) {
    padding: 100px 0px;
  }
`

export const Heading = styled.div`
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

export const AccordionContainer = styled.div`
  margin: 50px auto 0px auto;
  max-width: 630px;
`