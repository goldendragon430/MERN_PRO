import React, { useState } from 'react'
import BsBoxArrowInDownLeft from '@meronex/icons/bs/BsBoxArrowInDownLeft'
import { AdminOriginalCard } from '../../../shared/AdminOriginalCard'
import BsBoxArrowUpRight from '@meronex/icons/bs/BsBoxArrowUpRight'
import FaExchangeAlt from '@meronex/icons/fa/FaExchangeAlt'
import commingImg from '../../../../assets/images/comming.png'
import { Modal } from '../../../shared'
import { WithDraw } from '../WithDraw'
import { Convert } from '../Convert'
import { Deposit } from '../Deposit'
import {
  Container,
  Heading,
  CardContent,
  CardFooter,
  TransactionItem
} from './styles'

export const WalletItem = (props) => {
  const { wallet } = props
  const [depositOpen, setDepositOpen] = useState(false)
  const [withDrawOpen, setWithDrawOpen] = useState(false)
  const [convertOpen, setConvertOpen] = useState(false)
  return (
    <>
      <Container style = {{pointerEvents:wallet.disabled?"none":"initial"}}>
        <AdminOriginalCard>
          <Heading>
            <div>
            {wallet?.icon}
            <span>{wallet.name} Wallet</span>
            </div>
            {wallet.disabled && <img src ={commingImg} style ={{width:50}} />}
          </Heading>
          <CardContent>
            <h4>{wallet?.price} {wallet?.name}</h4>
            <p>Available for withdrawal: {wallet.price} {wallet?.name}</p>
          </CardContent>
          <CardFooter>
            <TransactionItem onClick={() => setDepositOpen(true)}>
              <BsBoxArrowUpRight />
              <span>Deposit</span>
            </TransactionItem>
            <TransactionItem onClick={() => setWithDrawOpen(true)}>
              <BsBoxArrowInDownLeft />
              <span>Withdraw</span>
            </TransactionItem>
            <TransactionItem onClick={() => setConvertOpen(true)}  style = {{pointerEvents:"none"}} >
              <FaExchangeAlt />
              <span>Convert</span>
            </TransactionItem>
          </CardFooter>
        </AdminOriginalCard>
      </Container>
      <Modal
        width='420px'
        open={depositOpen}
        onClose={() => setDepositOpen(false)}
      >
        <Deposit
          onClose={() => setDepositOpen(false)}
          wallet={wallet}
        />
      </Modal>
      <Modal
        width='420px'
        open={withDrawOpen}
        onClose={() => setWithDrawOpen(false)}
      >
        <WithDraw
          onClose={() => setWithDrawOpen(false)}
          wallet={wallet}
        />
      </Modal>
      <Modal
        width='420px'
        open={convertOpen}
        onClose={() => setConvertOpen(false)}
      >
        <Convert
          onClose={() => setConvertOpen(false)}
          wallet={wallet}
        />
      </Modal>
    </>
  )
}
