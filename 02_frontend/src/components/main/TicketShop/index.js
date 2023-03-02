import React,{useEffect,useState} from 'react'
import { Container,ImageWrapper ,SubContainer} from './styles';
import BRBanner2 from '../../../assets/images/CBDPlus_Banner_productsite.jpg';
import { MintCard } from '../Mint/MintCard';
import { useApi } from '../../../contexts/ApiContext';
import algosdk from 'algosdk'
import { base58btc } from 'multiformats/bases/base58';
import { algodClient } from '../../main/Mint/Lib/algorand'
import { UserTicket } from './UserTicket';
export const TicketShop = () => {
const [tickets, setTickets] = useState([])
const [{doPost}] = useApi()
const [nfts,setNFTs] = useState([])
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
const LoadNFT = async () =>{
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
  setNFTs(temp)
}
useEffect(()=>{
LoadNFT()
},[])
return (  
    <Container>
       <ImageWrapper>
            <img src = {BRBanner2} />        
       </ImageWrapper>
        
      <SubContainer>
      <h2 style = {{marginLeft:40,marginTop:30}}>Tickets Offered</h2>
      <UserTicket/>           
      </SubContainer>  
    </Container>
  );
}