import React ,{useState,useEffect} from 'react'

import { 
    Container
 } from './styles'
 import { CreatorCard } from '../../../shared'
import { useApi } from '../../../../contexts/ApiContext'
import { MarketListWrapper } from '../../../main/Browse/MarketPlace/styles'
export const UserTicket = () =>{

const [nfts,setNFTs] = useState([])
const [{doPost}] = useApi()
const LoadNFT = async ()=>{
    const response = await doPost('ticket/get', {})
    var NFTLIST = response.data
    var array = []
     
    for(var i=0; i< NFTLIST.length ;i ++) {
      array.push({data:NFTLIST[i],photo:NFTLIST[i].picture, video : NFTLIST[i].video ,price : NFTLIST[i].usdc  })
   }
   setNFTs(array)
}
useEffect(()=>{
    LoadNFT()
},[])
    return (
            <Container>
                <MarketListWrapper>
                    {nfts.map((item, i) => (
                    <CreatorCard
                        item={item}
                        type={1}
                        key={i}
                        isCreator={false}
                        isBlockreward = {false} 
                    />
                    ))}
                </MarketListWrapper>    
            </Container>    
        )
}