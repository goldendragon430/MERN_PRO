import React from 'react'
import { Button } from '../../../../styles'
import { useWindowSize } from '../../../../hooks/useWindowSize'
import {
  Container,
  InnerContainer,
  ContentContainer,
  ButtonWrapper
} from './styles'

export const BuyOriginal = () => {
  const { width } = useWindowSize()

  return (
    <Container>
      <InnerContainer>
        <ContentContainer>
          {width > 769 && <h2>Buy a BlockReward Original</h2>}
          {width > 577 && <p>BlockReward Originals are minted in stages. Join our purchase waitlist to be the first to know when another batch is scheduled to drop.</p>}
          <ButtonWrapper>
            <Button color='primary'>Join Waitlist</Button>
          </ButtonWrapper>
        </ContentContainer>
      </InnerContainer>
    </Container>
  )
}
