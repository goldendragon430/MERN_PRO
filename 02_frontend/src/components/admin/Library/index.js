import React, { useState } from 'react'
import { Button } from '../../../styles'
import { Tabs, Modal } from '../../shared'
import { AdminOriginalCard } from '../../shared/AdminOriginalCard'
import { DashboardHeading } from '../../shared/DashboardHeading'
import { NoResult } from '../../shared/NoResult'
import { ClaimCode } from './ClaimCode'
import { ExternalWallet } from './ExternalWallet'
import {
  Container,
  ButtonWrapper,
  CardWrapper,
  CardInnerWrapper,
  CardBody
} from './styles'

export const Library = () => {
  const tabList = [
    { key: 'all', name: 'All Items' }
  ]

  const [isClaimCode, setIsClaimCode] = useState(false)
  const [isExternalWallet, setIsExternalWallet] = useState(false)

  return (
    <>
      <Container>
        <DashboardHeading title='Your Library' responsive = {true}>
          <ButtonWrapper>
            <Button color='primary' onClick={() => setIsClaimCode(true)}>Got a Claim Code?</Button>
            <Button color='primary' onClick={() => setIsExternalWallet(true)}>External Wallet</Button>
          </ButtonWrapper>
        </DashboardHeading>
        <CardWrapper>
          <AdminOriginalCard>
            <CardInnerWrapper>
              <Tabs
                tabList={tabList}
                selectedTab='all'
              />
              <CardBody>
                <NoResult
                  content='No items found'
                />
              </CardBody>
            </CardInnerWrapper>
          </AdminOriginalCard>
        </CardWrapper>
      </Container>
      <Modal
        width='420px'
        open={isClaimCode}
        onClose={() => setIsClaimCode(false)}
      >
        <ClaimCode onClose={() => setIsClaimCode(false)} />
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
