import React, { useState,useEffect } from 'react'
import { DashboardHeading } from '../../shared/DashboardHeading';
import { ButtonWrapper } from './styles';
import { Button } from '../../../styles';
import algosdk from 'algosdk'; 
import { base58btc } from 'multiformats/bases/base58';
import { MintCard } from './MintCard';
import { ItemView } from './MintCard/styles'; 
import { algodClient } from './Lib/algorand';
import { MintToken } from './MintToken';
import { toast } from 'react-toastify';
import { useApi } from '../../../contexts/ApiContext';
import { MintDialog } from './MintDialog'; 
import { Modal } from '../../shared';
import { QRCard } from './QRCard';
import { SpinnerLoader } from '../../../components/shared/SpinnerLoader'

export const Mint = () => {

  /**************Common Variables*****************/

  const [nfts,setNFTs] = useState([])  
  const [isMint,setIsMint] = useState(false)
  const [user_address,setUserAddress] = useState(localStorage.getItem("address"))
  const [buttonTitle,setButtonTitle] = useState(user_address?"connected":"Wallet connect")
  const [balance,setBalance] = useState(0)
  const [{ doPost,getRole,doGet }] = useApi()
  const role = getRole()
  const [topLevel,setTopLevel] = useState(1)
  const [loading,setLoading] = useState(false)
 

  /**********AlgoSDK  Variables*********/
 
 const getBalance = async()=>{
  if(user_address){
    const clientInfo = await algodClient.accountInformation(user_address).do();
    const assets = clientInfo.assets   
 
        for (var asset of assets) {
      const asset_map = await LoadNFTs(asset['asset-id'])    
          if(!asset_map['name']  ){  
            // eslint-disable-next-line no-lone-blocks
            {
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
 }

 async function fetchData(){
  const response =  await doPost("membership/get_top_level",{})
  if(response.result == "failed")
      setTopLevel(0)
  else 
      setTopLevel(parseInt(response.result))

  if(user_address){
    try{
      const clientInfo = await algodClient.accountInformation(user_address).do();
      const assets = clientInfo.assets   
     
      var asset_list = []
      for (var asset of assets) {
        const asset_map = await LoadNFTs(asset['asset-id'])    
        const type = role == 0 ? 'mNFT' :'mship'
        if(asset_map['name'] && asset_map['unit_name'] == type) 
          { 
            asset_map['address'] = user_address 
            asset_list.push(asset_map)
          }
        else if(asset_map['unit_name'] == "BRT"){
            setBalance(asset['amount'] / 10 )
          }
      }
      console.log(asset_list)         
      setNFTs(asset_list)
      if(asset_list.length == 0)
          setLoading(true)
    }
    catch(error){
        console.log(error)
    }

  }

}

 useEffect(() => {
  
      fetchData()
   
  }, []);
 

  useEffect(()=>{
    const timeout = setInterval(() => {
       getBalance();      
    }, 3000);  
    return () => clearInterval(timeout);
  },[])

  
  /**************User Functions******************/
  // load Nfts from user Wallet
  
  const LoadNFTs  = async(asset_id)=>{
    try{
      const asset_info = await algodClient.getAssetByID(asset_id).do()
      // console.log(asset_info)
      const reserveURL = asset_info.params.reserve
      const cid = getCID(reserveURL)
      var NFT_metadata = {}
      // console.log(asset_info.params)
      NFT_metadata['unit_name'] = asset_info.params['unit-name']
      if(asset_info.params['decimals'] > 0  &&  NFT_metadata['unit_name'] =="BRT" || NFT_metadata['unit_name'] =="USDC" ) return NFT_metadata;
      NFT_metadata['name'] = asset_info.params['name']
      NFT_metadata['url'] = 'https://ipfs.io/ipfs/'+ cid
      NFT_metadata['id'] = asset_id
      return NFT_metadata;  
    }catch(error){
        console.log(error)

    }
    
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
 
  
  const handleMint = ()=>{
    setIsMint(true)
  }
  
/*****************Document Part*********************/  
  return (  <>
    {!loading &&  role < 2 && <SpinnerLoader/>}

    <div style = {{padding:20,marginTop:20,marginLeft:30}}>
      {
      role < 2 && (
          <>
              <DashboardHeading title = {role == 0 ? 'Platform NFT' : 'Company Membership'} responsive = {true}>
                    <ButtonWrapper>            
                      <Button color='primary' onClick={handleMint} style = {{marginRight:20}}>Mint</Button>
                    </ButtonWrapper>
              </DashboardHeading>
              <ItemView>
                {nfts.map((item, i) => (
                    <MintCard
                      item={item}
                      key={i}
                      loader = {()=>setLoading(true)}            
                    />
                  ))}
              </ItemView>
          </>
        )    
       }
        {role < 3 && role >= 0 && <>
          <DashboardHeading title = 'Send BRT' responsive = {role == 2}/>
          <MintToken balance = {balance} address = {user_address}/>
          </>
          }
        {role == 3 && <>
          <DashboardHeading title = '' responsive = {true}/>
          <QRCard value = {localStorage.getItem('address')} balance = {balance}/>
        </>
        }
    </div>
    <Modal
          width='370px'
          open={isMint}
          onClose={() => setIsMint(false)}
        >
          <MintDialog onClose={() => setIsMint(false)} address = {user_address} level = {topLevel}/>
      </Modal>
 </>


);
}