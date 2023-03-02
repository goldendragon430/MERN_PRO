import React from "react";
import { useState } from "react";
import { Modal } from "../../RModal"
import {Heading,Body,TextInput,DepositeButton} from './styles'
import logo from '../../../../assets/images/logo-white.png'
import reedmeicon from '../../../../assets/images/reedmeicon.png'
export const UpgradeModal = (props) => {
const {open,onClose,onUpgrade} = props
const [val,setVal] = useState(0)
const [error,setError] = useState(false)
const handleClick = ()=>{
 val==0?setError(true):setError(false);
 onUpgrade();
  onClose();
}
const style1 = {
  color:'#05a861',
  marginTop:5,
  marginBottom:5,
  display:(error==false?'block':'none')
}
const style2 = {
  color:'red',
  background:'lightred',
  marginTop:5,
  marginBottom:5,
  display:(error==true?'block':'none')
}
return (
  <Modal
  width='300px'
  open={open}
  onClose={onClose}
>
      <Heading>
        <span style = {{marginLeft:10}}>Upgrade Membership</span>
      </Heading>
      <Body>
        <h3 style = {{marginTop:20}}>Current Balance: <span> 50 USD</span></h3>
        <h3>Upgrade Fee: <span>30 USD</span></h3>
        <div style = {{border:'1px solid black',width:250,marginTop:10}}></div>
        <h3 style = {{color:'red',marginTop:10}}>Result Balance: <span>20 USD</span></h3>
       <DepositeButton onClick = {handleClick} >
          <img src = {reedmeicon} style = {{width:30,height:30,marginRight:10,marginLeft:3}}/>
         <p style = {{fontSize:12,display:'contents' }} >Upgrade</p> 
        </DepositeButton>
      </Body>
 
</Modal>
)

}