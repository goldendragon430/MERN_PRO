import React, { useEffect, useState } from 'react'
import { AdminOriginalCard } from '../../../shared/AdminOriginalCard'
import FaExchangeAlt from '@meronex/icons/fa/FaExchangeAlt'
import {toast} from 'react-toastify'
import {
  Container,
  Heading,
  CardContent,
  CardFooter,
  TransactionItem,
  HeadingContainer
} from './styles'
import MdContentCopy from '@meronex/icons/md/MdContentCopy'
import MyAlgoConnect from '@randlabs/myalgo-connect';
import {PeraWalletConnect} from '@perawallet/connect';
import RiErrorWarningFill from '@meronex/icons/ri/RiErrorWarningFill';
import commingImg from '../../../../assets/images/comming.png'
import { useEthers } from '@usedapp/core'
export const ExternalWalletItem = (props) => {
  const { wallet } = props
  const [depositOpen, setDepositOpen] = useState(false)
  const [withDrawOpen, setWithDrawOpen] = useState(false)
  const [convertOpen, setConvertOpen] = useState(false)
  const [name,setName] = useState('Not Connected')
  const [account,setAccount] = useState(wallet?.Account)
  const [isConnected,setIsConnected] = useState(false)
  const { activateBrowserWallet, deactivate } = useEthers();

  const MyAlgoWalletConnect = async()=>{
    if(isConnected){
      setIsConnected(false)
      setAccount('Not Connected')
      setName('Not Connected')
      localStorage.removeItem('myalgo')
    }
    else{
      const myAlgoConnect = new MyAlgoConnect();
      const accountsSharedByUser = await myAlgoConnect.connect()
      setAccount(accountsSharedByUser[0].address)
      setName (accountsSharedByUser[0].name)  
      setIsConnected(true)
      const userData = {name:accountsSharedByUser[0].name,account:accountsSharedByUser[0].address}
      localStorage.setItem('myalgo',JSON.stringify(userData))
    }
     
  }
  const MetaMaskConnectHandler = async() =>{
    if(window.ethereum){
      if(!isConnected){
        window.ethereum.request({method:'eth_requestAccounts'})
        .then(res=>{
                setAccount(res[0])
                setIsConnected(true)
                setName('Account1') 
                const userData = {name:'Account1',account:res[0]}
                localStorage.setItem('metamask',JSON.stringify(userData))
        })
    }
      else{
            deactivate()
            setAccount('Not Connected')
            setIsConnected(false)
            setName('Not Connected') 
            localStorage.removeItem('metamask')
      }
       
    }else{
      alert("install metamask extension!!")
    }
   
  }
  const ConnectWallet = async()=>{
    const type = wallet?.value;
    if(type == 'myalgo') MyAlgoWalletConnect()
    if(type == 'metamask') MetaMaskConnectHandler()
  }

  useEffect(()=>{
    
    const data = localStorage.getItem(wallet?.value)
    if(data){
      setIsConnected(true)
      const parsed_d = JSON.parse(data)
      setAccount(parsed_d.account)
      setName(parsed_d.name)
    }
 

  },[]);
  return (
    <>
      <Container >
        <AdminOriginalCard>
          <Heading>
            <HeadingContainer>
             <img src = {wallet?.icon} />
             <span>{wallet.name}</span>
            </HeadingContainer>
            {!isConnected && 
            <HeadingContainer>                     
               <RiErrorWarningFill /> 
                <p>Disconnected</p> 
            </HeadingContainer>}
          </Heading>
          <CardContent>
            <p>User Name :&nbsp;&nbsp; {name}</p> 
            <p>Account &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; {account.substring(0,35)}...<MdContentCopy onClick = {()=>{if(isConnected == false) return;navigator.clipboard.writeText(account);toast.info("Copied your Account address to Clipboard")}}/> </p>
          </CardContent>
          <CardFooter>
            <TransactionItem onClick = {ConnectWallet} >
              <FaExchangeAlt />
              <span>{isConnected?'Disconnect':'Connect'}</span>
            </TransactionItem>
          </CardFooter>
        </AdminOriginalCard>
      </Container>
      
    </>
  )
}
