import React from 'react'
import { useState } from 'react'
import { Button, Input } from '../../../styles'
import { LayoutContainer } from '../../shared'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useSession } from '../../../contexts/SessionContext'
import { useApi } from '../../../contexts/ApiContext'

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

export const ForgotPassword = () => {
  const {register, handleSubmit, formState: { errors }} = useForm()
  const [isLoading, setIsLoading] = useState(false)
  const nagative = useNavigate()
  const [{ auth }, { login } ] = useSession()
  const [{ doPost }] = useApi()
  const onSubmit = async (values) => {
    try {
      setIsLoading(true)
      const response = await doPost('auth/sendResetEmail', values)
      if (response.status == 2) {
        toast(response.msg, { type: 'error' })
        setIsLoading(false)
      }
      if (response.status == 3) {
        setIsLoading(false)
        toast(response.msg, { type: 'success' })
      }
    } catch (error) {
      toast(error, { type: 'error' })
      setIsLoading(false)
    }
  }
  return (
    <LayoutContainer>
      <Container>
        <InnerContainer>
          <Head>
            <Heading>Forgot Password</Heading>
            <HeadDes>To recover your BlockReward account, enter your email address below</HeadDes>
          </Head>
          <FormWraper onSubmit={handleSubmit(onSubmit)}>
            <FormRow>
              <FormLabel>EMAIL</FormLabel>
              <Input 
                placeholder='Enter your email' autoComplete='off'
                {...register(
                  'email')}
               />
            </FormRow>
            <FormRow>
              <Button color="primary" type="submit">Continue</Button>
            </FormRow>
            <FormRow>
              BlockReward <a href="./terms" target="_blank" rel="noreferrer">Terms and Conditions</a> and <a href="./privacy" target="_blank" rel="noreferrer">Privacy Policy</a> apply. This site is protected by Google reCAPTCHA.
            </FormRow>
          </FormWraper>
        </InnerContainer>
      </Container>
    </LayoutContainer>
  )
}