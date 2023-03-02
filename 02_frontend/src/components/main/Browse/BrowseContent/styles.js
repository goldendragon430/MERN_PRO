import styled from 'styled-components'

export const Container = styled.div`
  flex-grow: 1;
  
  @media (min-width: 1200px) {
    border-left: 1px solid ${props => props.theme.colors.borderColor};
    padding-left: 30px;
  }
`
