import React from 'react'
import { LayoutContainer } from '../../../shared'
import MdcCheckDecagram from '@meronex/icons/mdc/MdcCheckDecagram'
import BsLightningFill from '@meronex/icons/bs/BsLightningFill'
import { useWindowSize } from '../../../../hooks/useWindowSize'
import {
  Container,
  UserInfoWrapper,
  UserInfo,
  InfoWrapper,
  InfoTopeWrapper,
  FormWrapper,
  ImageWrapper
} from './styles'
import { Button, Input } from '../../../../styles'
import BRBanner from '../../../../assets/images/BR_Banner_productsite.jpg';
import BRBanner2 from '../../../../assets/images/CBDPlus_Banner_productsite.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const CreatorHero = () => {
  const { width } = useWindowSize()
  let url = window.location.href;
  return (
    <LayoutContainer>
      <Container>
        <ImageWrapper>
          {/* <Carousel showStatus={false} className='banner-carousel'> */}
                {/* <div className='carousel-img-wrapper'>
                    <img src={BRBanner} />
                </div> */}
                {url.includes("blockreward") &&
                <div className='carousel-img-wrapper'>
                    <img src={BRBanner} width="100%" />
                </div>}
                {url.includes("Redeem")&&
                  <div className='carousel-img-wrapper'>
                  <img src={BRBanner2} width="100%" />
              </div>}
          {/* </Carousel> */}
          {/* {width > 1200 && (
            <UserInfoWrapper>
              <img src='https://d2tg7hjmtin7hh.cloudfront.net/thumbs/creator_page_avatar/4d9f/4d9fcc43-169d-4d01-9e26-40fb4074ee13_small.png' alt='' />
              <UserInfo>
                <span>Gramatik</span>
                <MdcCheckDecagram />
              </UserInfo>
            </UserInfoWrapper>
          )} */}
          {/* {width > 769 && (
            <InfoWrapper>
              <InfoTopeWrapper>
                <BsLightningFill />
                <span>Be the first to know about upcoming drops</span>
              </InfoTopeWrapper>
              <FormWrapper>
                <Input
                  placeholder='Enter email to get notified'
                />
                <Button
                  color='primary'
                >
                Get notified
                </Button>
              </FormWrapper>
            </InfoWrapper>
          )} */}
        </ImageWrapper>
      </Container>
    </LayoutContainer>
  )
}