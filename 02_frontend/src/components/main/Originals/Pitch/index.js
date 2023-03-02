import React from 'react'
import { LayoutContainer } from '../../../shared'
import { useWindowSize } from '../../../../hooks/useWindowSize'
import {
  Container,
  LeftWrapper,
  RightWrapper
} from './styles'

export const Pitch = () => {
  const { width } = useWindowSize()

  return (
    <LayoutContainer>
      <Container>
        <LeftWrapper>
          <h2>Introducing: BlockReward Originals</h2>
          <p>LimeWire Originals is a limited collection of 10,000 Original NFTs minted on the Ethereum blockchain, featuring 10,000 unique and rare avatars with a variety of traits and attributes.</p>
          <p>Owning a LimeWire Original represents the highest level of membership the LimeWire community has to offer. If you own one, you are not only owning a digital avatar, you are gaining access to a series of perks and experiences exclusive to LimeWire Original holders. This includes regular invite-only, physical LimeWire events across the world featuring performances of artists on LimeWire, early access to high-profile NFT collections dropping on the marketplace, access to limited merch collections, as well as rewards of our LMWR token to LimeWire Original holders when the token launches in Q4 of this year.</p>
        </LeftWrapper>
        {width > 1023
          ? <RightWrapper bgimage='https://limewire.com/originals_4_sneak_peek.8a5d1c81.png' />
          : <img src='https://limewire.com/originals_4_sneak_peek_horizontal.7642ff99.png' alt='' />}
        
      </Container>
    </LayoutContainer>
  )
}
