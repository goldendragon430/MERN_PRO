import React, { useState } from 'react'
import MdContentCopy from '@meronex/icons/md/MdContentCopy'
import {
  Container,
  Heading,
  Body,
  Description,
  DepositAddressWrapper,
  DepositAddressBox,
  WraningMessage
} from './styles'
import { Button } from '../../../../styles'

export const Deposit = (props) => {
  const { wallet, onClose } = props
  const [text,setText] = useState('Please do not send any digital assets other than '+ wallet.alias+' to the deposit address shown above, otherwise these assets will be lost.')
  return (
    <Container>
      <Heading>
        <span>Deposit {wallet.name}</span>
      </Heading>
      <Body>
        <Description>To make a deposit, please transfer {wallet.name} to the deposit address below. Once the transfer is received, you will receive an email.</Description>
        <DepositAddressWrapper>
          <label>Deposit Address</label>
          <DepositAddressBox>
            <span>{wallet.address}</span>
            <MdContentCopy onClick = {()=>{ navigator.clipboard.writeText(wallet.address); setText("Copied address to Clipboard !!! ") }}  />
          </DepositAddressBox>
        </DepositAddressWrapper>
        <WraningMessage>
        {text}
        </WraningMessage>
        <Button color='primary' naked onClick={() => onClose()}>Done</Button>
      </Body>
    </Container>
  )
}
