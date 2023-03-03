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

export const ResetPassword = (props) => {
  const {register, handleSubmit, formState: { errors }} = useForm()
  const [isLoading, setIsLoading] = useState(false)
  const nagative = useNavigate()
  const [{ auth }, { login } ] = useSession()
  const [{ doPost }] = useApi()
  const query = new URLSearchParams(window.location.search);
  const token = query.get('token')
  const onSubmit = async (values) => {
    try {
      setIsLoading(true)
      const response = await doPost('auth/resetPassword', {
        token : token,
        newpassword : values.password
      })
      if (response.msg != null) {
        toast(response.msg, { type: 'error' })
        setIsLoading(false)
      }
      if (response.user != null) {
        setIsLoading(false)
        toast('Success', { type: 'success' })
        await login(response.user)
        nagative('/u/dashboard')
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
            <Heading>Reset Password</Heading>
            <HeadDes>To recover your BlockReward account, enter your new password</HeadDes>
          </Head>
          <FormWraper onSubmit={handleSubmit(onSubmit)}>
            <FormRow>
              <FormLabel>NEW PASSWORD</FormLabel>
              <Input 
                placeholder='Enter new password' autoComplete='off'
                {...register(
                  'password')}
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