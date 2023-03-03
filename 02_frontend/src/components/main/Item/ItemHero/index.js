import React, { useState,useEffect } from 'react'
import { LayoutContainer, Modal } from '../../../shared'
import MdcCheckDecagram from '@meronex/icons/mdc/MdcCheckDecagram'
import BsCardImage from '@meronex/icons/bs/BsCardImage'
import AiOutlineStar from '@meronex/icons/ai/AiOutlineStar'
import BiShareAlt from '@meronex/icons/bi/BiShareAlt'
import { Button, Select } from '../../../../styles'
import BsCameraVideo from '@meronex/icons/bs/BsCameraVideo'
import { useLocation } from "react-router-dom";
import { useWindowSize } from '../../../../hooks/useWindowSize'
import { ShareItem } from '../ShareItem'
import { algodClient } from '../../Mint/Lib/algorand'
import { ExternalWallet } from '../Externalwallet'
import {
  Container,
  ImgWrapper,
  InfoWrapper,
  Heading,
  HeadingTitleWrapper,
  ActionWrapper,
  ActionItem,
  Description,
  Editions,
  HasLoyalty,
  Option,
  Royalty,
  BlockChainBar,
  Table,
  THead,
  TBody,
  TableTitle,
  TableContent,
  TableItemInfo,
  ItemDetail,
  RadioButton,
  RadioButtonWrapper
} from './styles'
import { AlgorandIcon } from '../../../shared/SvgIcons'
import { toast } from 'react-toastify'
import { useApi } from '../../../../contexts/ApiContext'
import { getUSDTBalance,getETHBalance } from '../../../../contract/web3'
 
export const ItemHero = (props) => {
  
  const { width } = useWindowSize()
  const [currency, setCurrency] = useState('algo')
  const [isMore, setIsMore] = useState(true)
  const [openShare, setOpenShare] = useState(false)
  const data = useLocation(); 
  const [user_address,setUserAddress] = useState(localStorage.getItem("address"))
  const [balance,setBalance] = useState([])
  const [isLoading,setIsLoading] = useState(false)
  const [level,setLevel] = useState(0)
 
  const creatorOptions = [
    { value: 'algo', content: <Option><span className='name'>ALGO</span></Option> },
    { value: 'usdc', content: <Option><span className='name'>USDC</span></Option> }, 
    { value: 'eth', content: <Option><span className='name'>ETH</span></Option> }, 
    { value: 'usdt', content: <Option><span className='name'>USDT</span></Option> }, 
  ]
  const [isExternalWallet, setIsExternalWallet] = useState(false)
   
  const [price,setPrice] = useState(data.state.algo)
  const [{doPost,getRole}] = useApi()
  const role = getRole()
  const [type,setType] = useState('wallet') 
  const [config,setConfig] = useState({})
  const [process,setProcess] = useState('') //


  const startMint = async ()=>{

    try{
      var url = ''
      if(process == 'buy'){
        url = 'membership/buy_card';
      }else if (process == 'upgrade'){
        url = 'membership/update_card';
      }else{
        return;
      }
  
      setIsLoading(true)
  
      const response = await doPost(url, {
        address:localStorage.getItem('address'),
        membership:data.state._id
      })
      setIsLoading(false)
      
      if(response.result == 'failed' || response.error) {
        toast.error("Server Error")
      }else{
        toast.success("Success",{
          onClose:()=>{
                  localStorage.setItem('membership',data.state.level)
                  window.location.href = '/browse'
          },
          autoClose : 3000
        })
      }
    }catch(err){
      console.log(err)
      toast.error("Server Error")
    }
  
  }
  const upgradeHandler = async()=>{

    if(balance.length == 0) return;
 
    if(type == 'strip'){
      const response = await doPost('membership/stripe', {
        address:user_address,
        membership:data.state._id,
        })
      if(response.error || response.result == 'failed'){
        toast.error("Server Error")
      }
      else{
        const purchase_info = {
          type : 'update',
          membership : data.state._id,
          address   : user_address,
          level : data.state.level
        }
        localStorage.setItem('stripe',JSON.stringify(purchase_info))
        window.location.href = response.url
      }
      return;
    }
    
    else if(type == 'wallet')
    {
      if(currency == 'algo'){
        if(price > balance[0]){
          toast("Your algo balance is lower(current - "+balance[0]+" ALGO )",{type:"error"})
          return;
        }
      }
      else if(currency == 'usdc'){
        if(price > balance[1]){
          toast("Your usdc balance is lower(current - "+balance[1]+" USDC )",{type:"error"})
          return;
        }
       }
 
       else if(currency == 'eth'){
        if(price > balance[2]){
          toast("Your ETH balance is lower(current - "+balance[2]+" ETH )",{type:"error"})
          return;
        }
      }else{

        if(price > balance[3]){
          toast("Your USDT balance is lower(current - "+balance[3]+" USDT )",{type:"error"})
          return;
        }
      }
      // newly added 12/23
      
          setIsLoading(true)
          const response = await doPost('membership/upgrade', {
            address:user_address,
            membership:data.state._id,
            currency:currency
          })
          if(response.result == 'failed' || response.error) {
            toast.error("Server Error")
          }
          else
          {
  
            localStorage.setItem('membership',data.state.level)
            setLevel(data.state.level)
            // toast("Success",{type:"success"})
            toast.success("Success",{
              onClose : ()=>{
                window.location.href = '/browse'
              },
              autoClose : 3000
            })
          }
          setIsLoading(false)
  
    }
    else {
      setIsExternalWallet(true)
      setConfig(
        {
          currency : currency,
          type  : 'upgrade',
          amount : price,
          membership : data.state._id
        }
      )
      setProcess('upgrade')
    }
  }
  const buyHandler = async()=>{
    if(balance.length == 0) return;
    if(type == 'strip'){
      const response = await doPost('membership/stripe', {
        address:user_address,
        membership:data.state._id,
        })
      if(response.error || response.result == 'failed'){
        toast.error("Server Error")
      }
      else{
        const purchase_info = {
          type : 'buy',
          membership : data.state._id,
          address   : user_address,
          level : data.state.level
        }
        localStorage.setItem('stripe',JSON.stringify(purchase_info))    
        window.location.href = response.url
      }
      return;
    }
    else if (type == 'wallet') {
      if(currency == 'algo'){
        if(price > balance[0]){
          toast("Your algo balance is lower(current - "+balance[0]+" ALGO )",{type:"error"})
          return;
        }        
      }
      else if(currency == 'usdc'){
        if(price > balance[1]){
          toast("Your usdc balance is lower(current - "+balance[1]+" USDC )",{type:"error"})
          return;
        }
         
      }
      else if(currency == 'eth'){
        if(price > balance[2]){
          toast("Your ETH balance is lower(current - "+balance[2]+" ETH )",{type:"error"})
          return;
        }
      }else{

        if(price > balance[3]){
          toast("Your USDT balance is lower(current - "+balance[3]+" USDT )",{type:"error"})
          return;
        }
      }
 // newly added 12/23
      setIsLoading(true)
      const response = await doPost('membership/buy', {
        address:user_address,
        membership:data.state._id,
        currency:currency
      })

      if(response.result == 'failed' || response.error) {
        toast.error("Server Error")
      }
      else
      {

        localStorage.setItem('membership',data.state.level)
        setLevel(data.state.level)
        // toast("Success",{type:"success"})
        toast.success("Success",{
          onClose : ()=>{
            window.location.href = '/browse'
          },
          autoClose : 3000
        })
  }
      setIsLoading(false)
    }
    else {
      setIsExternalWallet(true)
      setConfig(
        {
          currency : currency,
          type  : 'buy',
          amount : price,
          membership : data.state._id
        }
      )
      setProcess('buy')
    }
  }
   
  const LoadNFTs  = async(asset_id)=>{
    try{
      const asset_info = await algodClient.getAssetByID(asset_id).do()
      var NFT_metadata = {}
      NFT_metadata['unit_name'] = asset_info.params['unit-name']
      return NFT_metadata;  
    }catch(error){
        console.log(error)
    }
    
  }
   const getBalance = async()=>{
    if(user_address){
      const clientInfo = await algodClient.accountInformation(user_address).do();
      const assets = clientInfo.assets   
      var price_list = []
      price_list[0] = (clientInfo['amount'] - 0.301 * 1000000) / 1000000;// Algo balance
  
      for (var asset of assets) {
        const asset_map = await LoadNFTs(asset['asset-id'])    
            if(!asset_map['name']  ){  
              {
                if(asset_map['unit_name'] == "USDC") {
                  price_list[1] = asset['amount'] / 1000000;// USDC balance
                  continue;
                }
               } 
            }
      }

      // newly added 12/23
      const eth_addr = localStorage.getItem('eth')
      const balance_e = await getETHBalance(eth_addr)
      price_list[2] = balance_e
      const balance_d = await getUSDTBalance(eth_addr)
      price_list[3] = balance_d  

      console.log(price_list)
      setBalance(price_list) 
              
    }
   }




   const getMyLevel = async() =>{
    const company = data.state.creator;
    const response = await doPost('membershipshop/get_level',{
      user_id : user_address,
      company_id : company
    })
    if(response.error || response.result == 'failed'){
      toast.error("Server Error")
    }else{
     const level =  response.data
     setLevel(level)
    }
   }
   const clearHistory = () =>{
    localStorage.removeItem("stripe")
   }
   useEffect(()=>{
    getBalance()
    getMyLevel()
    clearHistory()
    console.log(data.state)
    }
    ,[])

 const onChangeCurrency = (val) =>{
  setCurrency(val)
  if(val == 'algo'){
    setPrice(data.state.algo)
  }
  else if(val == 'usdc' || val == 'usdt')
  {
    setPrice(data.state.usdc)
  }
  else{
    setPrice(data.state.eth)
  }
 }
  return (
    <>
      <LayoutContainer>
        {width < 576 && (
          <ActionWrapper>
            <ActionItem>
              <AiOutlineStar />
              <span>0 stars</span>
            </ActionItem>
            <ActionItem onClick={() => setOpenShare(true)}>
              <BiShareAlt />
              <span>Share</span>
            </ActionItem>
          </ActionWrapper>
        )}
        <Container>
          <ImgWrapper style = {{marginBottom:15}}>
            <video
              controlsList="nodownload"
              loop
              controls
              muted
              playsInline=""
              autoPlay
              src= {data.state.video}
              poster="https://api.limewire.com/catalog/cached/nft-items/77447f4a-fe9f-4472-89ac-250d4bcfea26/cover-image?size=medium"
            >
				  </video>
          </ImgWrapper>
          <InfoWrapper>
            <Heading>
              <HeadingTitleWrapper>
                <div>
                  <span>BlockReward</span>
                  <MdcCheckDecagram />
                </div>
                <h2>{data.state.type}</h2>
              </HeadingTitleWrapper>
             
            </Heading>
            <Description>
              
              {data.state.description}
            </Description>
            
            <HasLoyalty>
              <label>Sale Details</label>
              <div>
                <span style = {{display : 'flex' , alignItems:'center'}}> {price}</span>
                <Select
                  notReload
                  placeholder='Select creator'
                  options={creatorOptions}
                  defaultValue={currency}
                  onChange={val => onChangeCurrency(val)}
                />
              </div>
              <div style = {{display : 'flex'}}>
  
                <RadioButtonWrapper><RadioButton type = 'radio' checked = {type == 'wallet'} value = 'wallet' onChange = {e=>setType(e.target.value)} /> Wallet</RadioButtonWrapper>
                <RadioButtonWrapper><RadioButton type = 'radio' checked = {type == 'strip'} value = 'strip' onChange = {e=>setType(e.target.value)} /> Credit Card</RadioButtonWrapper>
                <RadioButtonWrapper><RadioButton type = 'radio' checked = {type == 'external'} value = 'external' onChange = {e=>setType(e.target.value)} /> External</RadioButtonWrapper>
                 
                </div>
              {
                  level == 0  && role > 1 &&  <Button color='primary' naked  style = {{marginTop:20}} onClick = {buyHandler} isLoading = {isLoading}>Buy Membership</Button>
              }
              {
                  level > 0 && role > 1  && level < data.state.level  &&  <Button color='primary' naked  style = {{marginTop:20}} onClick = {upgradeHandler} isLoading = {isLoading}>Upgrade Membership</Button>
              }
               
              {/* <Button color='primary' naked  style = {{marginTop:20}} onClick = {buyHandler} isLoading = {isLoading}>Buy Membership</Button> */}
            </HasLoyalty>
            
          </InfoWrapper>
        </Container>
        
      </LayoutContainer>
      <Modal
        width='420px'
        open={openShare}
        onClose={() => setOpenShare(false)}
      >
        <ShareItem onClose={() => setOpenShare(false)} />
      </Modal>
      <Modal
        width='420px'
        open={isExternalWallet}
        onClose={() => setIsExternalWallet(false)}
      >
       <ExternalWallet onClose={() => setIsExternalWallet(false)} config = {config} handler = {startMint} />
      </Modal>
    </>
  )
}
