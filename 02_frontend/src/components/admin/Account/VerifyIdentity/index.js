import React from 'react'
import { useState } from 'react'
import { Button } from '../../../../styles'
import { AdminCard, Modal } from '../../../shared'
import { VerifyStep } from '../VerifyStep'
import {
  CardBody
} from './styles'

export const VerifyIdentity = () => {
  const [verifyOpen, setVerifyOpen] = useState(false)

  return (
    <>
      <AdminCard
        title='Verify Identity'
      >
        <CardBody>
          <p>Verified users can withdraw funds and export purchased NFTs to a blockchain wallet. Getting verified is easy and only takes a few minutes to complete.</p>
          <Button color='gray' onClick={() => setVerifyOpen(true)}>Verify Identity</Button>
        </CardBody>
      </AdminCard>
      <Modal
        open={verifyOpen}
        onClose={() => setVerifyOpen(false)}
        width='420px'
      >
        <VerifyStep
          onClose={() => setVerifyOpen(false)}
        />
      </Modal>
    </>
  )
}
