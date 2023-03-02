import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`

export const Content = styled.div`
  min-height: 800px;
  width: 100%;

  @media (min-width: 1200px) {
    width:250px;
    border-left: 1px solid ${props=> props.theme.colors.borderColor};
    flex-grow: 1;
    max-width:1800px;
  }
   
   
`