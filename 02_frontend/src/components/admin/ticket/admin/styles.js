import styled from 'styled-components'

export const Container = styled.div`
  padding: 30px 20px;
  
  @media (min-width: 1200px) {
    padding: 30px 10px 20px 40px;
  }
`
export const ItemView = styled.div`
display: grid;
grid-column-gap: 0px;
grid-template-columns: repeat(auto-fit, minmax(200px, 0fr));
margin-top:50px;
`