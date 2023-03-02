import styled from 'styled-components'
export const Container = styled.div`
width:200px;
height:200px;
border-radius:10px;
border:0px solid white;
background: linear-gradient(#05a861, #03834b);
display: grid;
justify-items: center;
`
export const TitleDiv = styled.p`
 
  color:white;
  text-align: center;
  margin-top: 20px;
  font-size: 22px;
  `
export const SubtitleDiv = styled.p`
  color:#a5d3bf;
  font-size:14px;
  text-align: center;
`
export const Button  = styled.button`
width:150px;
height:40px;
background:#cbcb06;
border:0px solid gray;
border-radius:5px;
cursor:pointer;
display: inline-flex;
justify-content: center;
align-items: center;
@media (min-width: 768px) {
  
}
&:hover{
   background:#ffff00;
}
`
 

