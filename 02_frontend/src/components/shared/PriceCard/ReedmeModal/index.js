import React from "react";
import { useState,useRef } from "react";
import { Modal } from "../../RModal"
import {Heading,Body,TextInput,DepositeButton} from './styles'
import logo from '../../../../assets/images/logo-white.png'
import reedmeicon from '../../../../assets/images/reedmeicon.png'
import { toast } from "react-toastify";
import { useApi } from "../../../../contexts/ApiContext";
import ReactSwipeButton from 'react-swipe-button'
 

export const ReedmeModal = (props) => {
const {open,onClose,handler,balance,level,data,hasNFT} = props

const [val,setVal] = useState(0)
const [val_2,setVal2] = useState(0)
const [error,setError] = useState(false)
const [{doPost}] = useApi()
const swipebtn =   useRef(null)

const rate = data.discount_rate
const limit = data.discount_limit
const amount = data.free_product_amount
const offer = data.blockreward_offer
const company = data.company
 
const handleClick = async(ele)=>{

      if(!company) {
        swipebtn.current.reset()
        toast.error("Please select Company.",{
          onClose:()=>{
              window.location.href = "../collection/6315d423-5532-47a0-8953-7c336abe503f"
          },
          autoClose : 3000
      })
        return;
      }

      if(val == 0 && level == 1){
      setError(true);
      swipebtn.current.reset()
      return;
    }
    else setError(false)

    if(level == 1 && balance < val || level == 2 && balance < amount) {
      toast("Your BRT balance is low.", {type : "error"})
      swipebtn.current.reset()
      return;
    }
    if(level == 3 && !hasNFT){
        toast.error("You have not Blockreward NFT.")
        swipebtn.current.reset()
        return
    }
    var value = val;
    if(level == 2) value = amount
    else if(level == 3) value = 0
    const response = await doPost('reedmeservice/get_code', {
      address : localStorage.getItem('address'),
      service : level,
      company : company,
      value : value
    })

  if(response.error){
    toast("Server Error" , {type: 'error'})
  }else if(response.result == "failed"){
    toast( response.msg , {type: 'error'})
    return;
  }else{
    console.log(response.result)
    toast("Success" , {type: 'success'})
  }
  onClose() && onClose()

 var offer_value = 0;
 if(level == 1) offer_value = rate * value;
 else if(level == 2) offer_value = amount;
 else offer_value = offer
  handler(offer_value)
 }
const style1 = {
  color:'#05a861',
   
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
        <img src = {logo} style = {{width:30}}/>
        <span style = {{marginLeft:10}}>You have {balance} BRT</span>
      </Heading>
      <Body>
        <h3 style = {{marginTop:20}}> {level < 3 ? 'Enter the amount of tokens' : 'If You have Business NFT'}</h3>
        <h3>{level < 3 ? 'you like to deposite' : 'This Redeem service is free'}</h3>
       {level == 1 && <p>Max. is {limit} tokens</p>}
       
        <TextInput type = "text" value={level == 2 ? amount : val} style = {{marginBottom:10}} onChange={e => 
          {
          
            if(e.target.value == '')
              setVal(0)
            else if(isNaN(parseInt(e.target.value)))
              setVal(0)
            else
              {
                if(parseInt(e.target.value) > limit)
                  {
                    setVal(limit)
                    setVal2(rate*limit)
                  }
                else
                 {
                   setVal(parseInt(e.target.value));
                   setVal2(rate*parseInt(e.target.value))
                  }
              }
              
            // }
          }          
          }  
            />
       { level == 1 &&  <p style = {style1}>{val_2}% off</p>}     
       { level == 3 &&  <p style = {style1}>{offer}% off</p>}     
       
       <p style = {style2}>You must  enter at least 1 token</p>
 
         
          <ReactSwipeButton 
            text='Swipe to Deposite'
            text_unlocked = 'Sending'
            color='#05a861'
            onSuccess={handleClick}
            ref = {swipebtn}
            style = {{marginTop:5}}
          />
      
      </Body>
 
</Modal>
)

}