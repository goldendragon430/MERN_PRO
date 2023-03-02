import styled, { css } from 'styled-components'
export const Heading = styled.div`
  padding: 0px 20px 12px 10px;
  background:white;
  height: 0px;
 
`

export const Body = styled.div`
  padding: 0 0px 15px;
  background:white;
  color:black
  height: 200px;
  display : grid;
  justify-items : center;
  h5{
    margin-top:10px;
    color : black;
    height : 30px;
    font-size : 14px;
    text-align:center;
  }
 
`

export const Container = styled.div`
 border :5px solid #48992d;
 margin-top : 10px;
 @media (max-width: 2000px) {
  width : calc(20% - 10px); 
 } 
 @media (max-width: 1400px) {
  width : calc(25% - 10px); 
 }
 @media (max-width: 800px) {
  width : calc(33.3% - 10px); 
 }
 @media (max-width: 600px) {
  width : calc(50% - 10px); 
 } 
 @media (max-width: 400px) {
  width : calc(100% - 10px); 
 }
 cursor : pointer;

 `
export const SubContainer = styled.div`
width : 100%;
height : 70px;
background : #48992d;
color : white;
text-align : center;
justify-items:center;
align-content : center;
display:grid;
p{
  font-size : 14px;
}
`