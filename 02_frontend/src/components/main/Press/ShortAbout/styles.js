import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px 0 0;
  text-align: center;
  
  p {
    font-weight: 100;
    line-height: 1.71429;
  }

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
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