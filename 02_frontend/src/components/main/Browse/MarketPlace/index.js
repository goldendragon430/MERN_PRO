import React,{useState,useEffect} from 'react'
import { Button, Select } from '../../../../styles'
import { CreatorCard,PriceCard } from '../../../shared'
import MdcClose from '@meronex/icons/mdc/MdcClose'
import { useLocation, useNavigate } from 'react-router-dom'

import 'swiper/css'
import 'swiper/css/navigation'
import {Navigation} from 'swiper'
import EnChevronRight from '@meronex/icons/en/EnChevronRight'
import EnChevronLeft from '@meronex/icons/en/EnChevronLeft'
import { Swiper, SwiperSlide } from 'swiper/react'
import { IconButton } from '../../../../styles'
import { LayoutContainer } from '../../../shared'
import {
  Container,
  FilterGroup,
  ContentHeader,
  Option,
  MarketListWrapper,
  FilterButtonGroup,
  PriceContainer,
  ImageWrapper,
  Card,
  ButtonGroup,
  SwiperWrapper,
  SwapContainer,
  KLayoutContainer
} from './styles'
import { useApi } from '../../../../contexts/ApiContext'
import { toast } from 'react-toastify'

export const MarketPlace = (props) => {
  const {
    filterValues,
    handleChangeFilter,
    getFilterName,
    isCreator,
    isCollection
  } = props
  const navigate = useNavigate()
  const data = useLocation()
  const [MembershipList,setMembershipList] = useState([])
  const [blockrewardNFTList,setBlockrewardNFTList] = useState([])
  const priceOptions = [
    { value: 'usd', content: <Option><span className='name'>USD</span></Option> },
    { value: 'usdc', content: <Option><span className='name'>USDC</span></Option> },
    { value: 'algo', content: <Option><span className='name'>ALGO</span></Option> },
    { value: 'btc', content: <Option><span className='name'>BTC</span></Option> },
    { value: 'eth', content: <Option><span className='name'>ETH</span></Option> },
    { value: 'eur', content: <Option><span className='name'>EUR</span></Option> },
    { value: 'gbp', content: <Option><span className='name'>GBP</span></Option> },
  ]

  const typeList = [
    { value: 'trending', content: <Option><span className='name'>Trending</span></Option>, name: 'Trending' },
    { value: 'comming_soon', content: <Option><span className='name'>Comming Soon</span></Option>, name: 'Comming Soon' },
    { value: 'highest_price', content: <Option><span className='name'>Price (Highest)</span></Option>, name: 'Price (Highest)' },
    { value: 'lowest_price', content: <Option><span className='name'>Price (Lowest)</span></Option>, name: 'Price (Lowest)' },
    { value: 'recently_created', content: <Option><span className='name'>Recently Created</span></Option>, name: 'Recently Created' },
    { value: 'recently_sold', content: <Option><span className='name'>Recently Sold</span></Option>,  name: 'Recently Sold' }
  ]

  const [priceList,setPriceList] = useState([])
  const [tempdata,setTempData] = useState([])
  const [business,setBusiness] = useState('')
  let url = window.location.href;

  const [{doPost}] = useApi()
  async function fetch(){  
    const response = await doPost('membership/get', {id:filterValues['creator'],type:filterValues['sale_type']})
     var NFTLIST = response.result
     var array = []
      
     for(var i=0; i< NFTLIST.length ;i ++) {
       array.push({data:NFTLIST[i],photo:NFTLIST[i].picture, video : NFTLIST[i].video ,price : NFTLIST[i].usdc  })
    }
    setMembershipList(array)
   }
 async function fetchData(){  
     const response = await doPost('membership/get_blockreward_nft')
      var NFTLIST = response.result
      var array = []
      console.log(NFTLIST.length)
      for(var i=0; i< NFTLIST.length ;i ++) {
        array.push({data:NFTLIST[i],photo:NFTLIST[i].picture, video : NFTLIST[i].video ,price : NFTLIST[i].usdc  })
     }
     setBlockrewardNFTList(array)
    }
 async function getDiscountData(company){
 
  if(!company || !company.address) return;

    const response = await doPost('discount/get',{
      address : company.address
    })
    if(response.error || response.result =='failed'){
      toast.error("Server Error")
    }else{

      if(response.data){
        var list = []
        list.push({title:response.data.discount_rate + '%', subtitle : 'per 1 BRT (limit '+response.data.discount_limit+' BRT)' , grade : 1,data:response.data})   
        list.push({title:"Free Product", subtitle : response.data.free_product_amount+' BRT' , grade : 2,data:response.data})   
        list.push({title:"Block Reward NFT", subtitle : 'exclusive' , grade : 3,data:response.data})   
        setPriceList(list)  
      }else{
        const data = {discount_rate:5,discount_limit:5,free_product_amount:40,nft_offer:15,company:company.address}
        const priceList = [
          {title:'5%' , subtitle:'per 1 BRT (limit 5BRT)',grade : 1,data:data},
          {title:'Free Product' , subtitle:'40 BRT',grade : 2,data:data},
          {title:'Block Reward NFT' , subtitle:'exclusive',grade : 3,data : data},
        ]
        setPriceList(priceList)
      }
    }
 }
 const getData = async()=>{
   if(data.state && data.state.address) {
    setBusiness(data.state.address)
     
   }
  const response = await doPost('auth/get_business_list',{

  })
  if(response.error || response.result == 'failed'){
    toast.error("Server Error")
  }else{
    setTempData(response.result)
  } 
}
  useEffect( ()=>{
    fetch()
    fetchData()
    getDiscountData(data.state)
    getData()
  }  ,[filterValues])
  return(
    <Container>
      {/* Redeem Discount Part */}

      {
        url.includes("Redeem_Discount") && (
          <MarketListWrapper>   
          {priceList.map((item, i) => (
              <PriceCard
                item={item}
                key = {i}
              />
            ))}  
        </MarketListWrapper>
        )
      }
      
      {/* All Browse Page */}
      {
        url.includes("browse")&&(
        <>
          <KLayoutContainer>
             <h2>
              Businesses
             </h2>
              <SwapContainer>
   
              <SwiperWrapper>
              {
                tempdata.length > 1 &&
               <Swiper
                  slidesPerView={5}
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
                      slidesPerView: 2
                    },
                    769: {
                      slidesPerView: 3
                    },
                    1000: {
                      slidesPerView: 4
                    },
                    1400: {
                      slidesPerView: 5,
                      spaceBetween: 30
                    }
                  }}
                  navigation={{
                    nextEl: '.swiper-btn-next',
                    prevEl: '.swiper-btn-prev',
                  }}
                >
        
                    {tempdata.map((item, i) => (
                      <SwiperSlide key={i}>
                        <Card>
                          <ImageWrapper src = { process.env.REACT_APP_SERVER_URL + 'fileservice/get_profile_file?name=' + item.path + '.jpg'} onClick = {()=>{    navigate('/creator/Redeem_Membership',{state:{address:item.path}}) }} />
                      </Card>
                      </SwiperSlide>
                  ))}
                </Swiper>
              }
              {
                tempdata.length == 1 &&
               <Swiper
                  slidesPerView={5}
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
        
                    {tempdata.map((item, i) => (
                      <SwiperSlide key={i}>
                        <Card>
                          <ImageWrapper src = { process.env.REACT_APP_SERVER_URL + 'fileservice/get_profile_file?name=' + item.path + '.jpg'} onClick = {()=>{    navigate('/creator/Redeem_Membership',{state:{address:item.path}}) }} />
                      </Card>
                      </SwiperSlide>
                  ))}
                </Swiper>
              }
                </SwiperWrapper>
              </SwapContainer>
          </KLayoutContainer>
          <ContentHeader>
            <h2>
              Blockreward NFT
            </h2>
          </ContentHeader>
           <MarketListWrapper style = {{paddingTop:0}}>
           {blockrewardNFTList.map((item, i) => (
              <CreatorCard
                item={item}
                type={1}
                key={i}
                isCreator={isCreator}
                isBlockreward = {true} 
              />
            ))}
          </MarketListWrapper>

           <ContentHeader>
              <h2>{isCreator ? 'Browse' : (isCollection ? 'Browse BlockReward Originals' : 'Membership Market')}</h2>
              <FilterGroup>
                <Select
                  notReload
                  placeholder='Select unit'
                  options={priceOptions}
                  defaultValue='usdc'
                  onChange={val => console.log(val)}
                />
                <Select
                  notReload
                  placeholder='Sort by'
                  options={typeList}
                  defaultValue={filterValues?.sort || ''}
                  onChange={val => handleChangeFilter('sort', val)}
                />
              </FilterGroup>
           </ContentHeader>
          <FilterButtonGroup>
          {filterValues && Object.keys(filterValues).some(key => filterValues[key]) && (
            filterValues && Object.keys(filterValues).map(key => filterValues[key] && (
              key === 'sort' ? (
                <Button
                  key={key}
                  color='primary'
                  onClick={() => handleChangeFilter('sort', filterValues[key])}
                >
                  {typeList.find(item => item.value === filterValues[key])?.name} <MdcClose />
                </Button>
              ) : (
                <Button
                  key={key}
                  color='primary'
                  onClick={() => handleChangeFilter(key, filterValues[key])}
                >
                  {getFilterName(key, filterValues[key])} <MdcClose />
                </Button>
              )
            ))
          )}
          </FilterButtonGroup>
          <MarketListWrapper>
            {MembershipList.map((item, i) => (
              <CreatorCard
                item={item}
                type={1}
                key={i}
                isCreator={isCreator}
                isBlockreward = {false} 
              />
            ))}
          </MarketListWrapper>
     
          </>
        )
      }

      {/* Business Membership Page Part */}
      {
        url.includes("Redeem_Membership") && (
          <> <ContentHeader>
          <h2>Business Membership Market</h2>
          <FilterGroup>
            <Select
              notReload
              placeholder='Select unit'
              options={priceOptions}
              defaultValue='usdc'
              onChange={val => console.log(val)}
            />
            <Select
              notReload
              placeholder='Sort by'
              options={typeList}
              defaultValue={filterValues?.sort || ''}
              onChange={val => handleChangeFilter('sort', val)}
            />
          </FilterGroup>
        </ContentHeader>
         <FilterButtonGroup>
         {filterValues && Object.keys(filterValues).some(key => filterValues[key]) && (
           filterValues && Object.keys(filterValues).map(key => filterValues[key] && (
             key === 'sort' ? (
               <Button
                 key={key}
                 color='primary'
                 onClick={() => handleChangeFilter('sort', filterValues[key])}
               >
                 {typeList.find(item => item.value === filterValues[key])?.name} <MdcClose />
               </Button>
             ) : (
               <Button
                 key={key}
                 color='primary'
                 onClick={() => handleChangeFilter(key, filterValues[key])}
               >
                 {getFilterName(key, filterValues[key])} <MdcClose />
               </Button>
             )
           ))
         )}
       </FilterButtonGroup>
       <MarketListWrapper>
       
       {MembershipList.map((item, i) => (
         item.data.creator == business && <CreatorCard
           item={item}
           type={1}
           key={i}
           isCreator={isCreator}
           isBlockreward = {false} 
         />
       ))}
     </MarketListWrapper>
     </>
        )
      }
      {/* Blockreward NFT Page */}
      
      {
        url.includes("blockreward") && (
         <> <ContentHeader>
          <h2>{isCreator ? 'Browse' : (isCollection ? 'Browse BlockReward Originals' : 'Membership Market')}</h2>
          <FilterGroup>
            <Select
              notReload
              placeholder='Select unit'
              options={priceOptions}
              defaultValue='usdc'
              onChange={val => console.log(val)}
            />
            <Select
              notReload
              placeholder='Sort by'
              options={typeList}
              defaultValue={filterValues?.sort || ''}
              onChange={val => handleChangeFilter('sort', val)}
            />
          </FilterGroup>
        </ContentHeader>
         <FilterButtonGroup>
         {filterValues && Object.keys(filterValues).some(key => filterValues[key]) && (
           filterValues && Object.keys(filterValues).map(key => filterValues[key] && (
             key === 'sort' ? (
               <Button
                 key={key}
                 color='primary'
                 onClick={() => handleChangeFilter('sort', filterValues[key])}
               >
                 {typeList.find(item => item.value === filterValues[key])?.name} <MdcClose />
               </Button>
             ) : (
               <Button
                 key={key}
                 color='primary'
                 onClick={() => handleChangeFilter(key, filterValues[key])}
               >
                 {getFilterName(key, filterValues[key])} <MdcClose />
               </Button>
             )
           ))
         )}
       </FilterButtonGroup>
       <MarketListWrapper>
       
       {blockrewardNFTList.map((item, i) => (
         <CreatorCard
           item={item}
           type={1}
           key={i}
           isCreator={isCreator}
           isBlockreward = {false} 
         />
       ))}
     </MarketListWrapper>
     </>
     )
      }


            


    </Container>)
}