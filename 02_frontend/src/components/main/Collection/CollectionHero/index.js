import React from 'react'
import { LayoutContainer } from '../../../shared'
import MdcCheckDecagram from '@meronex/icons/mdc/MdcCheckDecagram'
import bannerImg from '../../../../assets/images/BR_Banner_productsite.jpg'

import {
  Container,
  Toolbar,
  LeftToolbar,
  RightToolbar
} from './styles'

export const CollectionHero = () => {
  return (
    <LayoutContainer>
      <Container>
        <img src= {bannerImg} alt='' />
        <Toolbar>
          <LeftToolbar>
            <span>BlockReward</span>
            <MdcCheckDecagram />
          </LeftToolbar>
          <RightToolbar>
            <a href='https://twitter.com/limewire' rel="noreferrer" target='_blank'>
              <img src='https://limewire.com/colored_logo_twitter.c72b619d.svg' alt='' />
              <span>BlockReward</span>
            </a>
            <a href='https://instagram.com/limewire' rel="noreferrer" target='_blank'>
              <img src='https://limewire.com/colored_logo_instagram.cc727337.svg' alt='' />
              <span>BlockReward</span>
            </a>
          </RightToolbar>
        </Toolbar>
      </Container>
    </LayoutContainer>

  )
}
