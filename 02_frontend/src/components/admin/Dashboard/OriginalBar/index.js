import React, { useState } from 'react'
import { Button } from '../../../../styles';
import { useTheme as useOriginalTheme } from 'styled-components'
import { useTheme } from '../../../../contexts/ThemeContext'
import { useWindowSize } from '../../../../hooks/useWindowSize'
import BsChevronRight from '@meronex/icons/bs/BsChevronRight'
import { Modal } from '../../../shared'
import { ClaimCode } from '../ClaimCode'
import { ExternalWallet } from '../ExternalWallet'
import { useNavigate } from 'react-router-dom'

import {
  OriginalWrapper,
  BackgroundWrapper,
  LogoWrapper,
  ButtonWrapper
} from './styles'

import BRBanner from '../../../../assets/images/BR_Banner_productsite.jpg';
import { useApi } from '../../../../contexts/ApiContext';
export const OriginalBar = () => {
  const themeOriginal = useOriginalTheme()
  const navigate = useNavigate()
  const [theme ] = useTheme()
  const { width } = useWindowSize()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isExternalWallet, setIsExternalWallet] = useState(false)
  const [{getRole}] = useApi()
  const role = getRole()
  const collectionId = '6315d423-5532-47a0-8953-7c336abe503f'

  return (
    <>
      <OriginalWrapper>
        {role < 3 &&<BackgroundWrapper bgimage={BRBanner} />}
        <LogoWrapper>
          {width > 1180 && role < 3 && 
            <img src={theme?.isLightMode ? themeOriginal.images.logoDark : themeOriginal.images.logo} alt='logo' />
          }
        </LogoWrapper>
        <ButtonWrapper>
           <Button color="primary" onClick={() => setIsModalOpen(true)}>Got a Claim Code?</Button>  
           <Button color="primary" onClick={() => setIsExternalWallet(true)} style  = {{marginLeft:10}} > External Wallet</Button>  
 
        </ButtonWrapper>
      </OriginalWrapper>
      <Modal
        width='420px'
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <ClaimCode onClose={() => setIsModalOpen(false)} />
      </Modal>
       <Modal
        width='450px'
        open={isExternalWallet}
        onClose={() => setIsExternalWallet(false)}
      >
        <ExternalWallet onClose={() => setIsExternalWallet(false)} />
      </Modal>
    </>
  )
}