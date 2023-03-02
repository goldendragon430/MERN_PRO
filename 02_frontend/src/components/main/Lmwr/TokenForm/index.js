import React from 'react'
import { Button, Input } from '../../../../styles'
import {
  ComponentWraper,
  Container,
  Head,
  Heading,
  HeadDes,
  FormWraper,
  FormRow,
  FormLabel
} from './styles'

export const TokenForm = () => {
  return (
    <ComponentWraper bgimage="https://limewire.com/bubbles_grey.87c4385f.svg">
      <Container>
        <Head>
          <Heading>Public Token Sale</Heading>
          <HeadDes>Enter your email below to be among the first to be notified about the LMWR public token sale.</HeadDes>
        </Head>
        <FormWraper>
          <FormRow>
            <FormLabel>EMAIL</FormLabel>
            <Input placeholder='Enter email address'/>
          </FormRow>
          <FormRow>
            By signing up, you agree to the <a href="./terms" target="_blank" rel="noreferrer">Terms and Conditions</a> and <a href="./privacy" target="_blank" rel="noreferrer">Privacy Policy</a> and to receive updates from BlockReward.
          </FormRow>
          <Button color="primary">Be the first to know</Button>
        </FormWraper>
      </Container>
    </ComponentWraper>
  )
}
