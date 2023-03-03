import React from 'react'
import { LandingLayout } from '../../../shared/LandingLayout'
import FiUserPlus from '@meronex/icons/fi/FiUserPlus'
import { useNavigate } from 'react-router-dom'
import BiWallet from '@meronex/icons/bi/BiWallet'
import HiOutlineCalendar from '@meronex/icons/hi/HiOutlineCalendar'

import { 
  Container,
  Heading,
  IteamContainer,
  ItemWrapper,
  ServiceIcon
} from './styles'

export const Works = () => {
  const nagative = useNavigate()

  return (
    <Container id="works">
      <LandingLayout>
        <Heading data-aos='fade-up' data-aos-delay="200">
          <h2>How does it work?</h2>
          <p>Whether you’re new to drops or a seasoned collector - let us quickly run you through the simple steps to take part.</p>
        </Heading>
        <IteamContainer>
          <ItemWrapper data-aos='fade-up' data-aos-delay="100">
            <ServiceIcon>
              <FiUserPlus />
            </ServiceIcon>
            <h3>Sign up on Limewire</h3>
            <p><span onClick={() => nagative('/signup')}>Sign up</span> to set up your Limewire account.</p>
          </ItemWrapper>
          <ItemWrapper data-aos='fade-up' data-aos-delay="200">
            <ServiceIcon>
              <BiWallet />
            </ServiceIcon>
            <h3>Deposit Funds</h3>
            <p>Top up your account, so you are ready when the collection drops.</p>
          </ItemWrapper>
          <ItemWrapper data-aos='fade-up' data-aos-delay="300">
            <ServiceIcon>
              <HiOutlineCalendar />
            </ServiceIcon>
            <h3>Be early</h3>
            <p>Collections are limited in quantity. Make sure to get your collectible before it’s sold out.</p>
          </ItemWrapper>
        </IteamContainer>
      </LandingLayout>
    </Container>
  )
}