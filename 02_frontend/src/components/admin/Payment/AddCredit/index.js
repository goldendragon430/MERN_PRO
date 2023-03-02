import React,{useState} from 'react'
import { Button, Input, OriginalSelect } from '../../../../styles'
import { useForm } from 'react-hook-form'
import CreditCardInput from 'react-credit-card-input';
import RiShieldKeyholeLine from '@meronex/icons/ri/RiShieldKeyholeLine'
import { useApi } from '../../../../contexts/ApiContext'
import {toast} from 'react-toastify'

import {
  Container,
  Heading,
  Body,
  Form,
  FormGroup,
  ErrorMessage,
  ButtonWrapper
} from './styles'

export const AddCredit = (props) => {
  const {
    onClose
  } = props

  const { register, handleSubmit, formState: { errors }} = useForm()
  const [cardNumber,setCardNumber] = useState('')
  const [expiry,setExpiry] = useState('')
  const [cvc,setCVC] = useState('')
  const [{doPost}] = useApi()


  function creditCardType(cc) {
  let amex = new RegExp('^3[47][0-9]{13}$');
  let visa = new RegExp('^4[0-9]{12}(?:[0-9]{3})?$');
  let cup1 = new RegExp('^62[0-9]{14}[0-9]*$');
  let cup2 = new RegExp('^81[0-9]{14}[0-9]*$');

  let mastercard = new RegExp('^5[1-5][0-9]{14}$');
  let mastercard2 = new RegExp('^2[2-7][0-9]{14}$');

  let disco1 = new RegExp('^6011[0-9]{12}[0-9]*$');
  let disco2 = new RegExp('^62[24568][0-9]{13}[0-9]*$');
  let disco3 = new RegExp('^6[45][0-9]{14}[0-9]*$');
  
  let diners = new RegExp('^3[0689][0-9]{12}[0-9]*$');
  let jcb =  new RegExp('^35[0-9]{14}[0-9]*$');


  if (visa.test(cc)) {
    return 'VISA';
  }
  if (amex.test(cc)) {
    return 'AMEX';
  }
  if (mastercard.test(cc) || mastercard2.test(cc)) {
    return 'MASTERCARD';
  }
  if (disco1.test(cc) || disco2.test(cc) || disco3.test(cc)) {
    return 'DISCOVER';
  }
  if (diners.test(cc)) {
    return 'DINERS';
  }
  if (jcb.test(cc)) {
    return 'JCB';
  }
  if (cup1.test(cc) || cup2.test(cc)) {
    return 'CHINA_UNION_PAY';
  }
  return undefined;
}

  const onCardNumberChange = (e) =>{
    setCardNumber(e.target.value)
  }
  const onExpiryChange = (e) =>{
    setExpiry(e.target.value)
  }
  const onCVCChange = (e) =>{
    setCVC(e.target.value)
  }

  const onSubmit = async (values) => {
  
    
    if(!creditCardType(cardNumber.replaceAll(' ',''))){
      toast.error("Please enter the card number1.")
      return;
    }

    const response = await doPost('credit/new',{
      firstname : values.firstname,
      lastname : values.lastname,
      cardnumber : cardNumber,
      expiredate : expiry,
      cvc : cvc,
      address : localStorage.getItem('address'),
      type : creditCardType(cardNumber.replaceAll(' ',''))
    })

    if(response.result == 'failed' || response.error){
      toast.error("Server Error")
    }
    else{
      toast.success("Successfully added",{
        onClose : ()=>{
          window.location.reload(false)
        }
      })
    }
    onClose() && onClose()

  }

  return (
    <Container>
      <Heading>
        <span>Add Credit Card</span>
      </Heading>
      <Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <label style = {{marginBottom:10,fontSize:14}}>To add a new credit card, please enter your card details below and submit</label>
          <FormGroup isHalf>
            <label>First Name</label>
            <Input
              styleType='admin'
              autoComplete='off'
              {...register(
                'firstname',
                {
                  required: {
                    value: true,
                    message: 'The field is required*'
                  },
                }
              )}
            />
            {errors?.firstname && <ErrorMessage>{errors?.firstname?.message}</ErrorMessage>}
          </FormGroup>
          <FormGroup isHalf>
            <label>Last Name</label>
            <Input
              styleType='admin'
              autoComplete='off'
              {...register(
                'lastname',
                {
                  required: {
                    value: true,
                    message: 'The field is required*'
                  },
                }
              )}
            />
            {errors?.lastname && <ErrorMessage>{errors?.lastname?.message}</ErrorMessage>}
          </FormGroup>
          
          <FormGroup>
            <label style = {{marginBottom:10,display:'block'}}>Card Details</label>
            <CreditCardInput
              cardNumberInputProps={{ value: cardNumber, onChange: onCardNumberChange }}
              cardExpiryInputProps={{ value: expiry, onChange: onExpiryChange }}
              cardCVCInputProps={{ value: cvc, onChange: onCVCChange }}
              fieldClassName="input"
            />
           </FormGroup>
          <FormGroup style = {{display : 'flex' ,alignItems : 'center',marginTop:10}}>   
            <RiShieldKeyholeLine/> 
            &nbsp;&nbsp;<label style = {{fontSize : 14}}>Your transaction is protected by Checkout Ltd</label>
          </FormGroup>
           <label style = {{marginBottom:10,fontSize:14}}>Checkout Ltd. is the certified payment service provider of LimeWire GmbH. Submit below to process your transaction and compelte your purchase. </label>
         <ButtonWrapper>
           <Button color='primary' type='submit'>
              Add Card
            </Button>
           <Button color='primary' onClick = {onClose}>
              Cancel
            </Button>
         </ButtonWrapper>
        </Form>
      </Body>
    </Container>
  )
}
