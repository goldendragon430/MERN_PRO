import React from 'react'
import { Button, Input } from '../../../../styles'

import {
  Container,
  HeroBackDrop,
  FormContainer,
  Head,
  Heading,
  HeadDes,
  FormWraper,
  FormRow,
  FormLabel
} from './styles'

export const Newsletter = () => {
  return (
    <Container>
      <HeroBackDrop bgimage='https://limewire.com/originals_banner.6fcca762.png' />
      <FormContainer>
        <Head>
          <Heading>BlockReward Originals Waitlist</Heading>
          <HeadDes>Enter your email below to be among the first to be notified about future LimeWire Originals drops.</HeadDes>
        </Head>
        <FormWraper>
          <FormRow>
            <FormLabel>EMAIL</FormLabel>
            <Input placeholder='Enter email address'/>
          </FormRow>
          <FormRow>
            By signing up, you agree to the <a href="./terms" target="_blank" rel="noreferrer">Terms and Conditions</a> and <a href="./privacy" target="_blank" rel="noreferrer">Privacy Policy</a> and to receive updates from BlockReward.
          </FormRow>
          <Button color="primary">Join Waitlist</Button>
        </FormWraper>
      </FormContainer>
    </Container>
  )
}
