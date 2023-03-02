import styled from 'styled-components'

export const Container = styled.div`
  padding: 30px 30px;
`
export const ItemView = styled.div`
display: grid;
grid-column-gap: 0px;
grid-template-columns: repeat(auto-fit, minmax(200px, 0fr));
margin-top:50px;
`
export const Header = styled.div`
display: flex;
justify-content: space-between;
`