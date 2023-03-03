import React,{useEffect} from 'react'
import {
  Container,
  Heading,
  Body,
  WalletItem
} from './styles'

export const ExternalWallet = () => {
  const walletList = [
    { key: 'wallet_connect', name: 'WalletConnect', icon: 'https://limewire.com/wallet_connect.6ae02c97.svg' },
    { key: 'metamask', name: 'Metamask', icon: 'https://limewire.com/metamask.2fa1ea46.svg' }
  ]
  useEffect(()=>{
    console.log("asdf")
  },[])
  return (
    <Container>
      <Heading>
        <h3>Connect your Wallet</h3>
        <p>By connecting your wallet, you agree to our <br /> <span>Terms of Service</span> and our <span>Privacy Policy</span></p>
      </Heading>
      <Body>
        {walletList.map((item, i) => (
          <WalletItem key={i}>
            <div className='bar' />
            <img src={item.icon} alt='' />
            <p>{item.name}</p>
          </WalletItem>
        ))}
      </Body>
    </Container>
  )
}
