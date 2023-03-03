import React from 'react'
import { LandingLayout } from '../../../shared/LandingLayout';
import { Button } from '../../../../styles'

import {
  Container,
  LeftWrapper,
  RightWrapper,
  SoldOut,
  CardContainer,
  ImageContainer,
  TableContainer,
  CardInfo,
  ButtonWrapper
} from './styles.js'

export const Limited = () => {
  return (
    <LandingLayout>
      <Container>
        <LeftWrapper data-aos='fade-up' data-aos-delay="200">
          <SoldOut>
            cd or vinyl
            <span>Live drop</span>
          </SoldOut>
          <h1>Limited Edition Album Bundle</h1>
          <p>Close To Home is also available as a limited edition collectible only on LimeWire. Along with the unique album artwork, you will also receive a signed poster and your choice of either the limited edition album CD or Vinyl. Vintage, yes, but also the future - because your collectible bundle will count towards the chart position and help Aitch rise to #1 in the UK charts. Now that is a first in the music industry.</p>
          <ButtonWrapper data-aos='fade-up' data-aos-delay="300">
            <Button color='primary'>BUY CD BUNDLE</Button>
            <Button color='primary' naked>Buy VINYL bundle</Button>
          </ButtonWrapper>
        </LeftWrapper>
        <RightWrapper data-aos='fade-up' data-aos-delay="300">
          <CardContainer>
            <ImageContainer>
              <img src='https://limewire.com/landing/aitch/images/cd-vinyl.jpg' alt='' />
            </ImageContainer>
            <TableContainer>
              <CardInfo>Available CD Bundles</CardInfo>
              <CardInfo>224 / 250 at $25 each</CardInfo>
              <CardInfo>Available Vinyl Bundles</CardInfo>
              <CardInfo>226 / 250 at $50 each</CardInfo>
            </TableContainer>
          </CardContainer>
        </RightWrapper>
      </Container>
    </LandingLayout>
  );
}
