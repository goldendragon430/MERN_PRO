import React from 'react'
import { LayoutContainer } from '../../shared'
import { PressHero } from './PressHero'
import { CommunityBar } from './CommunityBar'
import { ShortAbout } from './ShortAbout'
import { Media } from './Media'

export const Press = () => {
  return (
    <LayoutContainer>
      <PressHero />
      {/* <CommunityBar />
      <ShortAbout />
      <Media /> */}
    </LayoutContainer>
  )
}