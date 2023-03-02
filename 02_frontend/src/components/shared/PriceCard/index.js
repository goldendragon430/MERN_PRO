import React from 'react'
import { useState ,useEffect} from 'react'
import logoPng from '../../../assets/images/logo-short.png'
import { ReedmeModal } from './ReedmeModal'
import { algodClient } from '../../main/Mint/Lib/algorand';
import { Modal } from '../Modal'; 
import { QRModal } from './QRModal';
import { PercentModal } from './PercentModal';
import {
  Container,
  TitleDiv,
  SubtitleDiv,
  Button
  
} from './styles'
import { useApi } from '../../../contexts/ApiContext';

export const PriceCard = (props) => {

  const {
    item
   } = props

   const [open,setOpen] = useState(false)
   const [open2,setOpen2] = useState(false)
  //  const [qropen,setQROpen] = useState(false)
   const [user_address,setUserAddress] = useState(localStorage.getItem("address"))
   const [qrvalue,setQRValue] = useState('')
   const [value,setValue] = useState(0)
   const [balance,setBalance] = useState(0)
   const [{doPost}] = useApi()
   const [hasPlatformNFT,setHasPlatFormNFT] = useState(false)

  //  const openQRModal = (val)=>{
  //   setQRValue(val)
  //   setQROpen(true)
  //  }
   const handler = (val) =>{
      setOpen2(true)
      setValue(val)
   }

   const getBalance = async()=>{
    if(user_address){
      const clientInfo = await algodClient.accountInformation(user_address).do();
      const assets = clientInfo.assets   
          for (var asset of assets) {
            const asset_map = await LoadNFTs(asset['asset-id'])  
            if(asset_map['unit_name'] == 'mNFT') setHasPlatFormNFT(true)
            if(!asset_map['name']  ){  
                if(asset_map['unit_name'] == "USDC") {
                    continue;
                }
               
                  setBalance(asset['amount'] / 10 )
                  localStorage.setItem('balance',asset['amount'] / 10 )
                  await doPost('auth/update_balance', {
                  email : localStorage.getItem('email'),
                  balance : asset['amount'] / 10
                })
              
            }
      }
     
    }
   }
  
   const LoadNFTs  = async(asset_id)=>{
    try{
      const asset_info = await algodClient.getAssetByID(asset_id).do()
      var NFT_metadata = {}
      // console.log(asset_info.params)
      NFT_metadata['unit_name'] = asset_info.params['unit-name']
      if(asset_info.params['decimals'] > 0  &&  NFT_metadata['unit_name'] =="BRT" || NFT_metadata['unit_name'] =="USDC" ) return NFT_metadata;
      NFT_metadata['name'] = asset_info.params['name']
      NFT_metadata['id'] = asset_id
      return NFT_metadata;  
    }catch(error){
        console.log(error)

    }
  }

  
  useEffect(()=>{
    getBalance();
    const timeout = setInterval(() => {
       getBalance();      
    }, 5000);  
    return () => clearInterval(timeout);
  },[])

  return (
      <Container>
        <TitleDiv> {item.title} </TitleDiv>
        <SubtitleDiv>{item.subtitle}</SubtitleDiv>
        <Button onClick={()=>setOpen(true)} ><p>Redeem</p> <img src = {logoPng} style = {{width:20,marginLeft:10}}></img> </Button>    
        <ReedmeModal open = {open} onClose = {setOpen} handler = {handler} balance = {balance} level = {item.grade} data = {item.data} hasNFT = {hasPlatformNFT}/>
        {/* <Modal
          width='370px'
          open={qropen}
          onClose={() => setQROpen(false)}
        >
          <QRModal onClose={() => setQROpen(false)}  value = {qrvalue} />
        </Modal>  */}
    
          <Modal
            width='350px'
            open={open2}
            onClose={() => setOpen2(false)}
            type = 'black'
          >
          <PercentModal onClose = {()=>setOpen2(false)} value = {value} />

          </Modal> 
     
      </Container>
  )
}