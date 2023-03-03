import React from 'react'
import { LayoutContainer } from '../../../shared'
import { Community } from '../../../shared/Community'

import {
  ComponentWraper
} from './styles'

export const CommunityBar = () => {
  return (
    <ComponentWraper>
      <LayoutContainer>
        <Community />
      </LayoutContainer>
    </ComponentWraper>
  )
}
