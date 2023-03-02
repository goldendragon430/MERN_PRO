import React from 'react'
import { LayoutContainer } from '../../../shared'
import { Button } from '../../../../styles'
import { useTheme } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import BsCheckCircle from '@meronex/icons/bs/BsCheckCircle'
import {
  ComponentWraper,
  Container,
  LeftWrapper,
  RightWrapper,
  ButtonGroup,
  ImgWrapper
} from './styles'
const collectionId = '6315d423-5532-47a0-8953-7c336abe503f'
export const LmwrHero = () => {
  const theme = useTheme()
  const navigate = useNavigate()
  const style1 = {display:'flex',marginTop: '17vw',marginRight: '1vw',alignItems:'center'}
  const style2 = {height:50,width:200,fontSize:18}
  const style3 = {color:'white',textDecoration:'auto'}
  const screenWidth = window.innerWidth;
  return (
    <ComponentWraper>
      <LayoutContainer>
        <Container>
          <LeftWrapper>
            <h1>
              <span className="marker">Block Reward Token What it is</span> <span className="marker">and how it works</span>
            </h1>
            <p>
              <span>
              <BsCheckCircle style = {{width: '20px', height: '20px', paddingTop: '5px',marginRight:5,color:'#00a15e'}}/> 
              Block Reward Token is earned on purchases from businesses in the ecosystem and can be used to redeem discounts, offers, and other promotions.
              </span>
              </p>
              <p>
              <span>
              <BsCheckCircle style = {{width: '20px', height: '20px', paddingTop: '5px',marginRight:5,color:'#00a15e'}}/> 
              Block Reward Token is hosted on Algorand Blockchain for easy accounting and public ledger analytics.
              </span>
              </p>
          </LeftWrapper>
              
          <RightWrapper>
            <ButtonGroup style={style1} >
              <Button color='primary' style={style2}  onClick={() => navigate(`/collection/${collectionId}`)} >Use  BRT</Button>
            </ButtonGroup>
            <ImgWrapper>
              {/* <h2>Timeline</h2> */}
              <img src={theme.images.timeLine}   alt='' />
            </ImgWrapper>
          </RightWrapper>
        </Container>
      </LayoutContainer>
    </ComponentWraper>
  )
}
