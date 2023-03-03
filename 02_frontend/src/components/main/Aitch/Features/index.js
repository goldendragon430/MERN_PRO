import React from 'react'
import { LandingLayout } from '../../../shared/LandingLayout'
import BsCheckCircle from '@meronex/icons/bs/BsCheckCircle'
import { Button } from '../../../../styles'
import Token from '../../../../assets/images/token.png';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  LeftWrapper,
  RightWrapper,
  CardContainer,
  VideoContainer,
  TableContainer,
  CardInfo,
  SoldOut,
  ItemContainer,
  CheckItem,
  ButtonWrapper
} from './styles.js'

export const Features = () => {
  const navigate = useNavigate()
  const screenWidth = window.innerWidth;
  return (
    <LandingLayout>
      <Container id="overview">
        <LeftWrapper data-aos='fade-up' data-aos-delay="300">
          <CardContainer>
              <img src={Token}  style = {{width: screenWidth < 1000 ? '60%' :'100%'  }}  alt='' />
          </CardContainer>
          {
          // Original Card Container
          /* 
          <CardContainer>
            <VideoContainer>
              <video autoPlay muted loop>
                <source src="https://limewire.com/landing/aitch/videos/close-to-home.mp4" type="video/mp4" />
              </video>
            </VideoContainer>
            <TableContainer>
              <CardInfo>Available Items</CardInfo>
              <CardInfo>0 / 600</CardInfo>
              <CardInfo>Price</CardInfo>
              <CardInfo>$15 each</CardInfo>
              <CardInfo>Chance of Prize</CardInfo>
              <CardInfo>8% (46/ 600)</CardInfo>
            </TableContainer>
          </CardContainer> 
          */}
        </LeftWrapper>
        <RightWrapper data-aos='fade-up' data-aos-delay="200">
          {/* <SoldOut>
            Real life perks
            <span>Sold out</span>
          </SoldOut> */}
          <h1>Overview</h1>
          <p>
              <span>
              <BsCheckCircle style = {{width: '20px', height: '20px', paddingTop: '5px',marginRight:5,color:'#00a15e'}}/> 
              Businesses will have a dedicated page offering exclusive discounts and limited time offers to their membership holders. 
              </span>
              </p>
              <p>
              <span>
              <BsCheckCircle style = {{width: '20px', height: '20px', paddingTop: '5px',marginRight:5,color:'#00a15e'}}/> 
              Businesses will offer upgradable memberships through our platform 
              </span>
              </p>
              <p>
              <span>
              <BsCheckCircle style = {{width: '20px', height: '20px', paddingTop: '5px',marginRight:5,color:'#00a15e'}}/> 
              Owning one membership in the ecosystem unlocks smaller discounts offered by businesses; full discounts offered are reserved for membership owners.
              </span>
              </p>
              <p>
              <span>
              <BsCheckCircle style = {{width: '20px', height: '20px', paddingTop: '5px',marginRight:5,color:'#00a15e'}}/> 
              You must hold a membership to access the businesses discount offering page.
              </span>
              </p>
          {/* <ItemContainer>
            <CheckItem>
              <BsCheckCircle />
              5x VIP access for life for you and a friend
            </CheckItem>
            <CheckItem>
              <BsCheckCircle />
              10x Unlimited pass for shows next year for you and a friend
            </CheckItem>
            <CheckItem>
              <BsCheckCircle />
              1x Shopping trip with Aitch treating you
            </CheckItem>
            <CheckItem>
              <BsCheckCircle />
              16x Signed physical artworks on canvas & <span>more</span>
            </CheckItem>
          </ItemContainer> */}
          <ButtonWrapper data-aos='fade-up' data-aos-delay="300">
            <Button color='primary' onClick={()=>navigate('/creator/blockreward')}>Go to membership</Button>
          </ButtonWrapper>
        </RightWrapper>
      </Container>
    </LandingLayout>
  );
}
