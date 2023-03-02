import React,{useEffect} from 'react'
import {
  Container,
  Heading,
  Body,
  WalletItem
} from './styles'
import MyAlgoIcon from '../../../../assets/images/myalgo.png'
import PeraIcon from '../../../../assets/images/metamask.svg'
import MyAlgoConnect from '@randlabs/myalgo-connect';
import {PeraWalletConnect} from '@perawallet/connect';
export const ExternalWallet = () => {
  const connectMyAlgo = async() => {
   
   const myAlgoConnect = new MyAlgoConnect();
   const accountsSharedByUser = await myAlgoConnect.connect()
   const userData = {name:accountsSharedByUser[0].name,account:accountsSharedByUser[0].address}
   localStorage.setItem('myalgo',JSON.stringify(userData))
  }
  const connectMetaMask  = async() =>{
    if(window.ethereum){
       
        window.ethereum.request({method:'eth_requestAccounts'})
        .then(res=>{
                const userData = {name:'Account1',account:res[0]}
                localStorage.setItem('metamask',JSON.stringify(userData))
        })
  
    }else{
      alert("install metamask extension!!")
    }
    
  }
  const walletList = [
    { key: 'myalgo', name: 'MyAlgo Wallet', icon: MyAlgoIcon, handler : connectMyAlgo ,disabled:false},
    { key: 'pera', name: 'Metamask', icon: PeraIcon, handler : connectMetaMask,disabled:true }
  ]
   
  
  useEffect(()=>{
     
  },[])

  return (
    <Container>
      <Heading>
        <h3>Connect your Wallet</h3>
        <p>By connecting your wallet, you agree to our <br /> <span>Terms of Service</span> and our <span>Privacy Policy</span></p>
      </Heading>
      <Body>
        {walletList.map((item, i) => (
          <WalletItem key={i} onClick = {item.handler}>
            <div className='bar' />
            <img src={item.icon} alt='' />
            <p>{item.name}</p>
          </WalletItem>
        ))}
      </Body>
    </Container>
  )
}
