import React ,{useState,useEffect} from 'react'

import { 
    Container,
    ItemView,
    Header
 } from './styles'
 import { useApi } from '../../../../contexts/ApiContext'
 import { algodClient } from '../../../main/Mint/Lib/algorand'
 import algosdk from 'algosdk'
 import { base58btc } from 'multiformats/bases/base58';
 import { MintCard } from '../../../main/Mint/MintCard'
 import { Modal } from '../../../shared'
 import { QRModal } from '../../../shared/PriceCard/QRModal'
import { toast } from 'react-toastify'
 

 export const TicketWallet = () =>{

const [nfts,setNFTs] = useState([])
const [{doPost}] = useApi()
const [qropen,setQROpen] = useState(false)
const [qrvalue,setQRValue] = useState('')
const [balance,setBalance] = useState(0)
const user_address = localStorage.getItem('address')
const [loading,setLoading] = useState(false)

const getCID  = (reserve)=>{
    const data = algosdk.decodeAddress(reserve)
    let newArray = new Uint8Array(34);

    newArray[0] = 18;
    newArray[1] = 32;
    let i = 2;
    data.publicKey.forEach((byte) => {
      newArray[i] = byte;
      i++;
    });
    let encoded = base58btc.baseEncode(newArray);
    return encoded
  }
const onClick = async (name) =>{

    const response = await doPost('ticket/get_price',{
      ticket_name : name
    })
    if(response.error || response.result =='failed'){
      toast.error("Server Error")
      return;
    }else{
      const price_data = 1
      if(balance < price_data)
      {
        toast.error("Your BRT balance is low.")
        return;
      }
    }
    setQRValue(localStorage.getItem('address') + '$' + name)
    setQROpen(true)
    console.log(localStorage.getItem('address'), name)
}
const LoadNFT = async ()=>{
    
    const clientInfo = await algodClient.accountInformation(localStorage.getItem('address')).do();
    const assets = clientInfo.assets   
    const temp = []
    for (var asset of assets) {
      const asset_info = await algodClient.getAssetByID(asset['asset-id']).do()
      var NFT_metadata = {}

      if(asset_info.params['unit-name'] == "mTicket"){
        const reserveURL = asset_info.params.reserve
        const cid = getCID(reserveURL)
        NFT_metadata['name'] = asset_info.params['name']
        NFT_metadata['url'] = 'https://ipfs.io/ipfs/'+ cid
        NFT_metadata['id'] = asset['asset-id']
        temp.push(NFT_metadata)  
      }
    }
    if(temp.length == 0)
      setLoading(true)

    setNFTs(temp)
}
const getBalance = async()=>{
  if(user_address){
    const clientInfo = await algodClient.accountInformation(localStorage.getItem('address')).do();
    const assets = clientInfo.assets    
 
    for (var asset of assets) {
      const asset_info = await algodClient.getAssetByID(asset['asset-id']).do()
      if(asset_info.params['unit-name'] == 'BRT'){
        setBalance(asset['amount'] / 10 )
        return;
      }
    }
    }
 }
useEffect(()=>{
    LoadNFT()
},[])

useEffect(()=>{
  const timeout = setInterval(() => {
     getBalance();      
  }, 3000);  
  return () => clearInterval(timeout);
},[])

    return (

            <Container>
           
              <Header>
                <h2>Tickets</h2>
                 
                </Header>
                <ItemView>
                    {nfts.map((item, i) => (
                      <div onClick = {e=>{onClick(item.name)}}>      
                        <MintCard
                            item={item}
                            key={i}  
                            ticket = {false}    
                            loader = {()=>setLoading(true)}      
                        />
                      </div>
                  
                  ))}
               </ItemView>
               <Modal
                width='370px'
                open={qropen}
                onClose={() => setQROpen(false)}
                >
                <QRModal onClose={() => setQROpen(false)}  value = {qrvalue} />
                </Modal>          
            </Container>    
        )
}