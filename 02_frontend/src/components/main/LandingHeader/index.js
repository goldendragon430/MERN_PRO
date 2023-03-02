import React, { useState } from 'react'
import { LandingLayout } from '../../shared/LandingLayout'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { useNavigate } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { Button, IconButton } from '../../../styles'
import BsList from '@meronex/icons/bs/BsList'
import MdcClose from '@meronex/icons/mdc/MdcClose'

import {
  Container,
  InnerContainer,
  LeftWrapper,
  RightWrapper,
  MenuListWrapper,
  MenuItem,
  MobileMenuWrapper,
  CloseIcon,
  LogoWrapper,
  MobileLoginWrapper,
  MoblieMenuItem,
  OverLay
} from './styles'

export const LandingHeader = () => {
  const theme = useTheme()
  const { width } = useWindowSize()
  const navigate = useNavigate()
  const [isMobileMenu, setIsMobileMenu] = useState(false)

  const menuList = [
    { id: 'overview', title: 'Overview' },
    { id: 'works', title: 'How it works' }
  ]

  const hadleClickMenu = (path) => {
    document.getElementById(path).scrollIntoView({ behavior: "smooth" })
  }
  
  return (
    <>
      <Container>
        <LandingLayout>
          <InnerContainer>
            <LeftWrapper>
              <img src={theme.images.logo} alt='logo' onClick={() => navigate('/')} />
              {width > 994 && (
                <MenuListWrapper>
                  {menuList.map((item, i) =>
                    <MenuItem key={i} onClick={() => hadleClickMenu(item.id)}>
                      {item.title}
                    </MenuItem>
                  )}
                </MenuListWrapper>
              )}
            </LeftWrapper>
            <RightWrapper>
              {/* {width >= 994 && (
                <>
                  <Button
                    color='primary'
                    naked
                    onClick={() => navigate('./login')}
                  >Log In</Button>
                  <Button
                    color='primary'
                    onClick={() => navigate('./signup')}
                  >Sign Up</Button>
                </>
              )} */}
              {width < 994 && (
                <IconButton onClick={() => setIsMobileMenu(true)}>
                  <BsList />
                </IconButton>
              )}
            </RightWrapper>
          </InnerContainer>
        </LandingLayout>
      </Container>
      <MobileMenuWrapper style={{ width: isMobileMenu && '75%' }}>
        <div>
          <CloseIcon onClick={() => setIsMobileMenu(false)}>
            <MdcClose />
          </CloseIcon>
          <LogoWrapper>
            <img src={theme.images.logo} alt='logo' onClick={() => navigate('/')} />
          </LogoWrapper>
          {menuList.map((item, i) =>
            <MoblieMenuItem key={i} onClick={() => hadleClickMenu(item.id)}>
              {item.title}
            </MoblieMenuItem>
          )}
          {/* <MobileLoginWrapper>
            <Button
              color='primary'
              naked
            >Log In</Button>
            <Button
              color='primary'
            >Sign Up</Button>
          </MobileLoginWrapper> */}
        </div>
      </MobileMenuWrapper>
      {isMobileMenu && (
        <OverLay onClick={() => setIsMobileMenu(false)} />
      )}
    </>
  )
}