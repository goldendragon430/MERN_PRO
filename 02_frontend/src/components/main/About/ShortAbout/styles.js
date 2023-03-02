import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px 0px;
  text-align: center;

  iframe{
    max-width: 100% !important;
  }

  p {
    line-height: 1.71429;
    font-weight: 100;
  }

  @media (min-width: 768px) {
    text-align: left;
  }
`

export const SectionHeader = styled.div`
  margin-bottom: 20px;
  h2 {
    letter-spacing: -.2px;
    font-size: 26px;
    font-weight: 700;
  }
`