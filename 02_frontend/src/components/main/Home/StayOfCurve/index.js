import React from 'react'
import { Button, Input } from '../../../../styles'
import { LayoutContainer } from '../../../shared'
import {
  Container,
  SubscribeWrapper
} from './styles'

export const StayOfCurve = () => {
  return (
    <LayoutContainer>
      <Container>
        <h2>Stay ahead of the curve!</h2>
        <p>Sign up for our weekly newsletter to be among the first to get notified about new releases, collections and drops.</p>
        <SubscribeWrapper>
          <Input
            placeholder='Enter your email address'
          />
          <Button color='primary'>Subscribe</Button>
        </SubscribeWrapper>
      </Container>
    </LayoutContainer>
  )
}
