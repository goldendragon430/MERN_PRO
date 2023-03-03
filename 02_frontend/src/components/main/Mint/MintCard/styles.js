import styled from 'styled-components'
export const ItemView = styled.div`
display: grid;
grid-column-gap: 0px;
grid-template-columns: repeat(auto-fit, minmax(200px, 0fr));
margin-top:50px;
`
export const Container = styled.div`
width:150px;
height:200px;
margin-bottom:20px;
justify-content:center;
text-align:center;
`
export const Content = styled.div`
width:150px;
height:150px;
justify-content:center;
display:flex;
align-content:center;
background:white;
border-radius:5px;

`