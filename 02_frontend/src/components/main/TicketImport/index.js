import React, { useState,useEffect } from 'react'
import { LayoutContainer, Modal } from '../../shared'
import MdcCheckDecagram from '@meronex/icons/mdc/MdcCheckDecagram'
import AiOutlineStar from '@meronex/icons/ai/AiOutlineStar'
import BiShareAlt from '@meronex/icons/bi/BiShareAlt'
import { Button, Select } from '../../../styles'
import { useLocation } from "react-router-dom";
import { ShareItem } from '../Collection/ShareItem'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { algodClient } from '../Mint/Lib/algorand'
import {
  Container,
  ImgWrapper,
  InfoWrapper,
  Heading,
  HeadingTitleWrapper,
  ActionWrapper,
  ActionItem,
  Description,
 
  HasLoyalty,
  Option,
 
} from './styles'
 
import { toast } from 'react-toastify'
import { useApi } from '../../../contexts/ApiContext'
export const TicketImport = (props) => {
  
  const { width } = useWindowSize()
  const [currency, setCurrency] = useState('algo')
  const [openShare, setOpenShare] = useState(false)
  const data = useLocation(); 
  const [user_address,setUserAddress] = useState(localStorage.getItem("address"))
  const [balance,setBalance] = useState([])
  const [isLoading,setIsLoading] = useState(false)
  const creatorOptions = [
    { value: 'algo', content: <Option><span className='name'>ALGO</span></Option> },
    { value: 'usdc', content: <Option><span className='name'>USDC</span></Option> }, 
  ]
   
  const [price,setPrice] = useState(data.state.algo)
  const [{doPost,getRole}] = useApi()
  const role = getRole()
  const [hasTicket,setHasTicket] = useState(true)
  const getBalance = async()=>{
    if(user_address){
      const clientInfo = await algodClient.accountInformation(user_address).do();
      const assets = clientInfo.assets   
      var price_list = []
      price_list[0] = (clientInfo['amount'] - 0.301 * 1000000) / 1000000;// Algo balance
      var has_ticket = false 
      for (var asset of assets) {
        const asset_map = await LoadNFTs(asset['asset-id'])    
            if(!asset_map['name']  ){  
              {
                if(asset_map['unit_name'] == "USDC") {
                  price_list[1] = asset['amount'] / 1000000;// USDC balance
                  continue;
                }
                if(asset_map['unit_name'] == 'mTicket'){
                  has_ticket = true
                }
               } 
            }
      }
      setHasTicket(has_ticket)
      setBalance(price_list) 
              
    }
   }
  const buyHandler = async()=>{
    setIsLoading(true)
    if(balance.length == 0) return;
    if(currency == 'algo' && price > balance[0]){
        toast("Your algo balance is lower(current - "+balance[0]+" ALGO )",{type:"error"})
        setIsLoading(false)
        return;
    }
    if(currency == 'usdc' && price > balance[1]){
        toast("Your usdc balance is lower(current - "+balance[1]+" USDC )",{type:"error"})
        setIsLoading(false)
        return;
    }
        
        setIsLoading(true)
        const response = await doPost('ticket/buy',{
          address:user_address,
          ticket:data.state._id,
          currency:currency
        }) 
        if(response.error || response.result == 'failed') {
          toast.error("Server Error")
        }
        else
          toast('Success',{type:"success"})
        setIsLoading(false)
         setHasTicket(true)
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
 
 
   useEffect(()=>{
    getBalance()
    console.log(data.state)
    },[])

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
                <h2>{data.state.name}</h2>
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
                  onChange={val => {setCurrency(val);setPrice( val == "algo" ? data.state.algo:data.state.usdc ) }}
                />
              </div>             
            { !hasTicket &&  <Button color='primary' naked  style = {{marginTop:20}} onClick = {buyHandler} isLoading = {isLoading}>Buy Ticket</Button>}
          
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
    </>
  )
}
