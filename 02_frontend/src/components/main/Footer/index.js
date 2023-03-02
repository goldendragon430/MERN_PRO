import React from 'react'
import {
  Container,
  InnerContainer,
  LeftSide,
  RightSide,
  FooterMenu
} from './styles'

export const Footer = () => {
  const marketPlaceList = [
    { name: 'Trending', path: '' },
    { name: 'Categories', path: '' },
    { name: 'Block Reward Membership', path: '' },
  ]

  const resourceList = [
    { name: 'About Block Reward', path: '' },
    { name: 'Block Reward Token', path: '' },
    { name: 'Partner With US', path: '' },
    {name:'FAQ',path:''}
  ]
  
  const accountList = [
    { name: 'Dashboard', path: '' },
    { name: 'Your Membership', path: '' },
    { name: 'Login', path: '' },
    { name: 'Sign Up', path: '' },
  ]

  const companyList = [
    { name: 'About Us', path: '' },
    { name: 'Careers', path: '' },
    { name: 'Press', path: '' }
  ]

  return (
    <Container>
      <InnerContainer>
        {/* <LeftSide>
          <span className="marker">BlockReward is back</span>
          <span className="marker">to bring digital collectibles</span>
          <span className="marker">to everybody.</span>
        </LeftSide> */}
        <RightSide>
          <FooterMenu>
            <span className='bold'>Membership Market</span>
            {marketPlaceList.map((menu, i) => (
              <span key={i}>{menu.name}</span>
            ))}
          </FooterMenu>
          <FooterMenu>
            <span className='bold'>Resources</span>
            {resourceList.map((menu, i) => (
              <span key={i}>{menu.name}</span>
            ))}
          </FooterMenu>
          <FooterMenu>
            <span className='bold'>Account</span>
            {accountList.map((menu, i) => (
              <span key={i}>{menu.name}</span>
            ))}
          </FooterMenu>
          {/* <FooterMenu>
            <span className='bold'>Company</span>
            {companyList.map((menu, i) => (
              <span key={i}>{menu.name}</span>
            ))}
          </FooterMenu> */}
        </RightSide>
      </InnerContainer>
    </Container>
  )
}
