import React, { useState } from 'react'
import { Button, Input } from '../../../styles'
import { LayoutContainer } from '../../shared'
import { useForm } from 'react-hook-form'
import { useLocation } from "react-router-dom";
import { useApi } from '../../../contexts/ApiContext'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useSession } from '../../../contexts/SessionContext'
import {
  Container,
  InnerContainer,
  Head,
  Heading,
  HeadDes,
  FormWraper,
  FormRow,
  FormLabel
} from './styles'
export const SignUpVerify = () => {
  const data = useLocation(); 
  const { register, handleSubmit, formState: { errors }} = useForm()
  const [{ doPost }] = useApi();
  const [isLoading,setIsLoading] = useState(false)
  const [{ auth }, { login } ] = useSession()
  const nagative = useNavigate()
  const onSubmit = async (values) => {
    console.log(values);
    setIsLoading(true)
      const response = await doPost('auth/verifycode', {
      email : data.state.email,
      password : data.state.password,
      code : values.verifycode
    });
    setIsLoading(false)
    if(response.msg == "success"){
      if (response.user != null) {
        // if(data.state.isBusiness)
        //   {
        //     toast('Successfully Registered. Please wait allow of Administrator', { type: 'success' })
        //     nagative('/partner')
        //   }         
        // else{
          await login(response.user)
          localStorage.setItem('email',data.state.email)
          localStorage.setItem('balance',"0")
          localStorage.setItem('address',response.address)
          localStorage.setItem('role',response.role)
          localStorage.setItem('membership',response.membership)
          localStorage.setItem('eth',response.eth)
          nagative('/u/dashboard')
   
        // }
      
      }
    }
    else{
      toast(response.msg, { type: 'error' })    
    }
  }
  return (
    <LayoutContainer>
      <Container>
        <InnerContainer>
          <Head>
            <Heading>Sign Up</Heading>
            <HeadDes>Join Blackward to buy, sell and browse BRTs</HeadDes>
          </Head>
          <FormWraper onSubmit={handleSubmit(onSubmit)}>
            <FormRow>
              <FormLabel>AUTHENTICATION CODE</FormLabel>
              <Input 
                placeholder='Enter the 6-digit code sent to your email or phone' autoComplete='off'
                 {...register(
                  'verifycode')
                }
               />
            </FormRow>

            <FormRow>
              BlockReward <a href="./terms" target="_blank" rel="noreferrer">Terms and Conditions</a> and <a href="./privacy" target="_blank" rel="noreferrer">Privacy Policy</a> apply. This site is protected by Google reCAPTCHA.
            </FormRow>
            <FormRow>
              <Button color="primary" type="submit" isLoading = {isLoading}>Continue</Button>
            </FormRow>
          </FormWraper>
        </InnerContainer>
      </Container>
    </LayoutContainer>
  )
}