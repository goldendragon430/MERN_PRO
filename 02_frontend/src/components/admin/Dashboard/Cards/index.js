import React,{useState,useEffect} from 'react'
import { AdminOriginalCard } from '../../../shared/AdminOriginalCard'
import { Tabs } from '../../../shared'
import { NoResult } from '../../../shared/NoResult'
import AiFillStar from '@meronex/icons/ai/AiFillStar';
import { algodClient } from '../../../main/Mint/Lib/algorand';
import algosdk from 'algosdk';
import { base58btc } from 'multiformats/bases/base58';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import {Navigation} from 'swiper'
import EnChevronRight from '@meronex/icons/en/EnChevronRight'
import EnChevronLeft from '@meronex/icons/en/EnChevronLeft'

import {
  CardsWrapper,
  Offers,
  Starred,
  CardInnerWrapper,
  CardBody,
  StarredCardHeader,
  ItemView,
  SwiperWrapper,
  SwapContainer,
  KLayoutContainer
} from './styles'
import { MintCard } from '../../../main/Mint/MintCard';
import { useApi } from '../../../../contexts/ApiContext';
export const Cards = () => {

  const offerList = [
    { key: 'received', name: 'Your Membership' },
  ]
  const [nfts,setNFTs] = useState([])  
  const [user_address,setUserAddress] = useState(localStorage.getItem("address"))
  const [{getRole}] = useApi()
  const role = getRole()

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
 

  useEffect(() => {
    async function fetchData(){
      if(user_address){
        try{
          const clientInfo = await algodClient.accountInformation(user_address).do();
          const assets = clientInfo.assets   
          // console.log(assets)
          var asset_list = []
          for (var asset of assets) {
            const asset_map = await LoadNFTs(asset['asset-id'])    
           
            if(asset_map['name']) 
              { 
                asset_map['address'] = user_address 
                asset_list.push(asset_map)
                 
              }
            
          }         
          setNFTs(asset_list)  
        }
        catch(error){
            console.log(error)
        }
    
      }
    
    }
      fetchData()
      
  }, []);

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



  return (
    <CardsWrapper>
      <Offers>
        <AdminOriginalCard>
          <CardInnerWrapper>
            <Tabs
              tabList={offerList}
              selectedTab='received'
            />
            <CardBody >
              {/* <NoResult
                content='No offers found'
              />  
              { nfts.length > 0 && role > 0 ?
                <ItemView>
                  {nfts.map((item, i) => (
                    <MintCard
                      item={item}
                      key={i}            
                    />))
                    }
                  </ItemView>:
                 <NoResult  content='No offers found' />
                }*/}
              <>
              <KLayoutContainer>
                  <SwapContainer>
            
                  <SwiperWrapper>
                  {nfts.length > 1
                  && <Swiper
                      slidesPerView={3}
                      spaceBetween={30}
                      loop
                      autoplay
                      modules={[Navigation]}
                      className='mySwiper'
                      breakpoints={{
                        0: {
                          slidesPerView: 2
                        },
                        300: {
                          slidesPerView: 2
                        },
                        550: {
                          slidesPerView: 2
                        },
                        769: {
                          slidesPerView: 3
                        },
                        1000: {
                          slidesPerView: 3
                        },
                        1400: {
                          slidesPerView: 3,
                          spaceBetween: 30
                        }
                      }}
                      navigation={{
                        nextEl: '.swiper-btn-next',
                        prevEl: '.swiper-btn-prev',
                      }}
                    >
            
                        {nfts.map((item, i) => (
                          <SwiperSlide key={i}>
                            <MintCard
                              item={item}
                              key={i}            
                            />
                          </SwiperSlide>
                      ))}
                    </Swiper>
                  }
                  {nfts.length == 1
                  && <Swiper
                      slidesPerView={3}
                      spaceBetween={30}
                      loop
                      autoplay
                      modules={[Navigation]}
                      className='mySwiper'
                      breakpoints={{
                        0: {
                          slidesPerView: 1
                        },
                        300: {
                          slidesPerView: 1
                        },
                        550: {
                          slidesPerView: 1
                        },
                        769: {
                          slidesPerView: 1
                        },
                        1000: {
                          slidesPerView: 1
                        },
                        1400: {
                          slidesPerView: 1,
                          spaceBetween: 30
                        }
                      }}
                      navigation={{
                        nextEl: '.swiper-btn-next',
                        prevEl: '.swiper-btn-prev',
                      }}
                    >
            
                        {nfts.map((item, i) => (
                          <SwiperSlide key={i}>
                            <MintCard
                              item={item}
                              key={i}            
                            />
                          </SwiperSlide>
                      ))}
                    </Swiper>
                  }
                    </SwiperWrapper>
                  </SwapContainer>
              </KLayoutContainer>
              </>
            </CardBody>
          </CardInnerWrapper>
        </AdminOriginalCard>
      </Offers>
      <Starred>
        <AdminOriginalCard>
          <CardInnerWrapper>
            <StarredCardHeader>
              <AiFillStar/>
              Quick View
            </StarredCardHeader>
            <CardBody>
              <NoResult
                content='No items found'
              />
            </CardBody>
          </CardInnerWrapper>
        </AdminOriginalCard>
      </Starred>
    </CardsWrapper>
  )
}