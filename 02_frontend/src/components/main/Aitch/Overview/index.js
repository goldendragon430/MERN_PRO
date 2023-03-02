import React from 'react'
import { LandingLayout } from '../../../shared/LandingLayout'
import Logo from "../../../../assets/images/logo-short.png"

import {
  Container,
  InnerContainer,
  ItemContainer,
  ItemWrapper
} from './styles'

export const Overview = () => {

  const data = [
    {
      image: 'https://limewire.com/landing/aitch/images/editiontime.png',
      title: 'Unique membership',
      description: 'Block Reward membership allows access to discounts offered by multiple business on our platform.'
    },
    {
      image: 'https://limewire.com/landing/aitch/images/mysterybox.png',
      title: 'Earn tokens on purchases',
      description: 'Membership holders earn a percentage back in tokens when making a purchase from a business in the Block Reward ecosystem. '
    },
    {
      image: 'https://limewire.com/landing/aitch/images/disc.png',
      title: 'Use BRT to redeem discounts',
      description: 'Each business in our ecosystem will have a dedicated page where user deposit tokens and redeem discounts and special offers.'
    },
  ]

  return (
    <Container bgimage="https://limewire.com/landing/aitch/images/shapes.png"   id="works">
      <LandingLayout>
        <InnerContainer>
          <h2 data-aos='fade-up' data-aos-delay="200">How it works</h2>
        </InnerContainer>
        <ItemContainer>
          {data.map((item, i) =>
            <ItemWrapper key={i} data-aos='fade-up' data-aos-delay={(i+1)*100}>
              <img src={Logo} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </ItemWrapper>
          )}
        </ItemContainer>
      </LandingLayout>
    </Container>
  );
}