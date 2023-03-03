import React, { useState } from 'react'
import { LandingLayout } from '../../../shared/LandingLayout'
import { Button } from '../../../../styles'
// import BsPlayFill from '@meronex/icons/bs/BsPlayFill'
import AiOutlineClose from '@meronex/icons/ai/AiOutlineClose'
import Member from '../../../../assets/images/member2.png';
import BsCheckCircle from '@meronex/icons/bs/BsCheckCircle'
import {
  ComponentWraper,
  Container,
  LeftWrapper,
  RightWrapper,
  ButtonGroup,
  LinkContainer,
  PlayWrapper,
  ModalWrapper,
  Overlay,
  VideoWrapper,
  CloseWrapper
} from './styles'

export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
 
  return (
    <>
      <ComponentWraper bgimage="https://limewire.com/landing/aitch/images/dots.png" id="homeHero" data-aos='fade-up' data-aos-delay="200" >
        <LandingLayout>
          <Container>
            <LeftWrapper data-aos='fade-up' data-aos-delay="400">
              <h1>
                {/* <span>Aitch</span> */}
                Block Reward Membership
              </h1>
              <p>
              <span>
              <BsCheckCircle style = {{width: '20px', height: '20px', paddingTop: '5px',marginRight:5,color:'#00a15e'}}/> 
              The Block Reward Membership is the first step into our ecosystem.
              </span>
              </p>
              <p>
              <span>
              <BsCheckCircle style = {{width: '20px', height: '20px', paddingTop: '5px',marginRight:5,color:'#00a15e'}}/> 
              With this membership, you have access to exclusive offers from all businesses in our ecosystem .
              </span>
              </p>
              
              
              <ButtonGroup>
                <a href='/creator/blockreward' >
                <Button color='primary'>Go to membership</Button>
                </a>
              </ButtonGroup>
            </LeftWrapper>
            <RightWrapper data-aos='fade-up' data-aos-delay="600" >
              <LinkContainer>
                <img src={Member} alt='' />
              </LinkContainer>
              {
                // Open Video Watch Modal
                /*
                <LinkContainer onClick={() => setIsModalOpen(true)}>
                <img src={Member} alt='' />
                <PlayWrapper>
                  <BsPlayFill size="30" />
                </PlayWrapper>
              </LinkContainer>
                */
              }
            </RightWrapper>
          </Container>
        </LandingLayout>
      </ComponentWraper>
      {isModalOpen &&
        <ModalWrapper>
          <Overlay>
            <CloseWrapper onClick={() => setIsModalOpen(false)}>
              <AiOutlineClose size="20" />
            </CloseWrapper>
          </Overlay>
          <VideoWrapper>
            <iframe allowFullScreen="allowfullscreen" allow="autoplay; fullscreen" src="https://www.youtube-nocookie.com/embed/c3iM-WHGZpE?autoplay=1&amp;autohide=1&amp;fs=1&amp;rel=0&amp;hd=1&amp;wmode=transparent&amp;enablejsapi=1&amp;html5=1" scrolling="no" title='HomeVideo'></iframe>
          </VideoWrapper>
        </ModalWrapper>
      }
    </>
  )
}