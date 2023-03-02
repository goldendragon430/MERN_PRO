import React ,{useState,useEffect} from 'react'
import { 
    Container,
    ItemView
 } from './styles'
import { DashboardHeading } from '../../../shared/DashboardHeading'
import { ButtonWrapper } from '../../Library/styles'
import { Button } from '../../../../styles'
import { Modal } from '../../../shared'
import {TicketMintDialog } from '../ticketMintDialog'
import algosdk from 'algosdk'
import { base58btc } from 'multiformats/bases/base58';
import { algodClient } from '../../../main/Mint/Lib/algorand'
import { MintCard } from '../../../main/Mint/MintCard'
import { useApi } from '../../../../contexts/ApiContext'
import { TicketHistory } from '../TicketHistory'
import { SpinnerLoader } from '../../../shared/SpinnerLoader'



export const AdminTicket  = ()=>{

    const [isMint,setIsMint] = useState(false)
    const [nfts,setNFTs] = useState([])
    const [{getRole,doPost}] = useApi()
    const role = getRole()
  const [loading,setLoading] = useState(false)

    const handleMint = ()=>{
        setIsMint(true)
    }
 
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

        // const response = await doPost('membership/remove',{
        //   address : localStorage.getItem('address'),
        //   unit_name : 'mTicket'
        // })
        // return;
        
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
    return (<>
          
   
   
                <Container>
                   <DashboardHeading title = "Ticket &nbsp; Mint" responsive = {true}>
                            <ButtonWrapper>            
                            <Button color='primary' onClick={handleMint} style = {{marginRight:20}}>Mint</Button>
                            </ButtonWrapper>
                    </DashboardHeading>
                    <ItemView>
                    {nfts.map((item, i) => (       
                      <MintCard
                        item={item}
                        key={i}  
                        ticket = {role == 0}  
                        loader = {()=>setLoading(true)}        
                      />
                  
                  ))}
                    </ItemView>
                    <TicketHistory responsive = {false}/>
                </Container>
                <Modal
                    width='370px'
                    open={isMint}
                    onClose={() => setIsMint(false)}
                    >
                      <TicketMintDialog  onClose={() => setIsMint(false)}  />
                </Modal>
        </>
    )
}