import React from 'react'
import { useNavigate } from 'react-router';
import { Button } from '../../../../styles';
import { LandingLayout } from '../../../shared/LandingLayout'

import {
  Container,
  Content,
  ButtonWrapper
} from './styles'

export const Catch = () => {
  const navigate = useNavigate();
  return (  
    <Container bgimage="https://limewire.com/landing/aitch/images/shapes.png">
      <LandingLayout>
        {/* <Content data-aos='fade-up' data-aos-delay="200">
          <h2>Catch the drop!</h2>
          <p>Already have your BlockReward account set up? Then you’re good to go - but don’t wait too long, the drop is now live.</p>
        </Content> */}
        <ButtonWrapper data-aos='fade-up' data-aos-delay="300">
          <Button color='gray' onClick={() => navigate("/creator/blockreward")}>Go to membership</Button>
        </ButtonWrapper>
      </LandingLayout>
    </Container>
  );
}