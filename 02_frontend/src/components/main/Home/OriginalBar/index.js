import React, { useState } from 'react'
import { Button } from '../../../../styles';
import { useTheme as useOriginalTheme } from 'styled-components'
import { useTheme } from '../../../../contexts/ThemeContext'
import { useWindowSize } from '../../../../hooks/useWindowSize'
import BsChevronRight from '@meronex/icons/bs/BsChevronRight'
import { Modal } from '../../../shared'
 
import { useNavigate } from 'react-router-dom'

import {
  OriginalWrapper,
  BackgroundWrapper,
  LogoWrapper,
  ButtonWrapper
} from './styles'

import BRBanner from '../../../../assets/images/BR_Banner_productsite.jpg';

export const OriginalBar = () => {
  const themeOriginal = useOriginalTheme()
  const navigate = useNavigate()
  const [theme ] = useTheme()
  const { width } = useWindowSize()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const collectionId = '6315d423-5532-47a0-8953-7c336abe503f'

  return (
    <>
      <OriginalWrapper>
        <BackgroundWrapper bgimage={BRBanner} />
        <LogoWrapper>
          {width > 1180 &&
            <img src={theme?.isLightMode ? themeOriginal.images.logoDark : themeOriginal.images.logo} alt='logo' />
          }
        </LogoWrapper>
        <ButtonWrapper>
           <Button color="primary" onClick={() => navigate(`/collection/${collectionId}`)}>
            Redeem Discounts
            <BsChevronRight />
          </Button>
        </ButtonWrapper>
      </OriginalWrapper>
 
    </>
  )
}