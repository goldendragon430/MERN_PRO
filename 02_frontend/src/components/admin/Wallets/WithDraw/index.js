import React,{useState} from 'react'
import { toast } from 'react-toastify'
import { Button, Input } from '../../../../styles'
import { useApi } from '../../../../contexts/ApiContext'
import {
  Container,
  Heading,
  Body,
  Description,
  FromWrapper,
  FromBox,
  WraningMessage,
  ButtonWrapper,
  FormGroup
} from './styles'
 
export const WithDraw = (props) => {
  const { wallet, onClose } = props
  const [receiver,setReceiver] = useState('')
  const [amount,setAmount] = useState(0)
  const [isLoading,setIsLoading] = useState(false)
  const [{doPost}] = useApi()
 
  
  const onWithdraw = async()=>{
    const sender_addr = wallet.address;
    const amount_value = parseFloat(amount)
    if(amount_value == 0 || amount_value > wallet.price) {
      toast('Invalid amount',{type:'error'})
      return;
    }
    
    try{
      setIsLoading(true)
      var response;
      switch(wallet.name){
        case "ALGO":
           response = await doPost('auth/transfer_algo', {
            address: sender_addr,  
            receiver : receiver,
            amount : amount
          })

          break;
        case "USDC":
          response = await doPost('auth/transfer_usdc', {
            address: sender_addr,  
            receiver : receiver,
            amount : amount
          })
          break; 
        case "ETH" :
         response = await doPost('auth/transfer_eth',{
          address : sender_addr,
          receiver : receiver,
          amount : amount
         }) 
          break;
        case "USDT" :
        response = await doPost('auth/transfer_usdt',{
          address : sender_addr,
          receiver : receiver,
          amount : amount
        }) 
          break;
        case "MATIC" :
          response = await doPost('auth/transfer_matic',{
            address : sender_addr,
            receiver : receiver,
            amount : amount
          }) 
            
        break;

        case "TST" :
          response = await doPost('auth/transfer_tst',{
            address : sender_addr,
            receiver : receiver,
            amount : amount
          }) 
        
        break;              
      }
      if(response.error)
        toast('Please confirm balance or network connection',{type:'error'})
      else
        toast('Successfully sent',{type:'success'})
    }
    catch(err){
      toast('Server Error',{type:'error'})
      console.log(err)
    }
    setIsLoading(false)
    onClose()
    // window.location.reload(false)
  }
  return (
    <Container>
      <Heading>
        {wallet?.icon}
        <span>Withdraw {wallet.name}</span>
      </Heading>
      <Body>
        <Description>To make a withdrawal, please enter an amount and wallet address below. Once your withdrawal has been processed, you will receive an email.</Description>
        <FromWrapper>
          <label>From</label>
          <FromBox>
            <div>
              <span>Wallet balance</span>
              <span className='price'>{wallet?.name} {wallet.price}</span>
            </div>
            <div>
              <span>Available for withdrawal</span>
              <span className='price'>{wallet?.name} {wallet.price > 0 ? parseFloat(wallet.price*1000)/1000 : 0}</span>
            </div>
            <div>
              <span>Reserved Funds</span>
              <span className='price'>{wallet?.name} 0.00</span>
            </div>
          </FromBox>
        </FromWrapper>
        <FormGroup>
          <label>Amount ({wallet?.name})</label>
          <Input
            styleType='admin'
            placeholder={`${wallet.name} 0.00`}
            value = {amount}
            onChange = {(e)=>{setAmount(e.target.value)}}
            required
          />
        </FormGroup>
        <FormGroup>
          <label>Wallet Address</label>
          <Input
            styleType='admin'
            placeholder={`Enter ${wallet.name} Wallet Address`}
            value = {receiver}
            onChange = {(e)=>{setReceiver(e.target.value)}}
            required
          />
        </FormGroup>
        {/* <WraningMessage>
        Please always double-check your wallet address before submitting a withdrawal request.
        </WraningMessage> */}
        <ButtonWrapper>
          <Button
            color='primary'
            type='submit'
            onClick={() => onWithdraw()}
            isLoading = {isLoading}
          >
            Withdraw {wallet?.name}
          </Button>
          <Button color='primary' type='button' naked onClick={() => onClose()}>Cancel</Button>
        </ButtonWrapper>
      </Body>
    </Container>
  )
}
