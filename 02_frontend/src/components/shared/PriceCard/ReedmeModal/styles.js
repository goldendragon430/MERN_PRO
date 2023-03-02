import styled, { css } from 'styled-components'
export const Heading = styled.div`
  padding: 15px 20px 12px 10px;
  background:#05a861;
  height:55px;
  span {
    max-width: 300px;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 18px;
    font-weight: 500;
    display: inline-block;
    overflow: hidden;
  }
`

export const Body = styled.div`
  padding: 0 20px 15px;
  color:black;
  justify-items: center;
  display: grid;
`
export const TextInput = styled.input`
    width:100px;
    height:40px;
    border:1px solid gray;
    color:black;
    background:transparent;  
    border-radius:20px;
    text-align:center;
    font-size:20px;
    margin-top:5px;
`
export const DepositeButton = styled.div`
background:black;
border-radius:17px;
width:200px;
height:35px;
color:white;
display:flex; 
align-items:center;
cursor:pointer;

&:hover {
  background-color: #383838;
}

`