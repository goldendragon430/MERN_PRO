import styled from 'styled-components'

export const Container = styled.div`
  padding: 40px 0 20px;
  text-align: center;
  
  p {
    font-weight: 100;
    line-height: 1.71429;
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

export const ItemWraper = styled.a`
  color: ${props => props.theme.colors.textPrimary};
  text-decoration: none;
  display: block;
  margin-bottom: 25px;

  span {
    display: block;
    font-weight: 600;
  }
`