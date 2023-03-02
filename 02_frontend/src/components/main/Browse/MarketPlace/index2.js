import React from 'react'
import { Button, Select } from '../../../../styles'
import { CreatorCard,PriceCard } from '../../../shared'
import MdcClose from '@meronex/icons/mdc/MdcClose'
import { useNavigate } from 'react-router-dom'
import memberphoto1 from '../../../../assets/images/memberships/membership1.jpg'
import memberphoto2 from '../../../../assets/images/memberships/membership2.jpg'
import memberphoto3 from '../../../../assets/images/memberships/membership3.jpg'
import CBD_image from '../../../../assets/images/cbdbutton.jpg' 

import Video1 from "../../../../assets/video/Silver-GreenBackGround_1.mp4"
import Video3 from "../../../../assets/video/Animate-Black.mp4"
import Video2 from "../../../../assets/video/Animate-Gold.mp4"

import {
  Container,
  FilterGroup,
  ContentHeader,
  Option,
  MarketListWrapper,
  FilterButtonGroup,
  PriceContainer,
  ImageWrapper
} from './styles'

export const MarketPlace = (props) => {
  const {
    filterValues,
    handleChangeFilter,
    getFilterName,
    isCreator,
    isCollection
  } = props
  const navigate = useNavigate()

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

  const creatorList = [
    { artist: 'Gramatik', title: 'Gramatik - Analog Droid', media_type: 'video', edition: 'Single Item (1-of-1)', price: 15, release_type: 'Not for sale', photo: memberphoto1,video:Video1},
    { artist: 'Gramatik', title: 'Gramatik - Analog Droid', media_type: 'music', edition: 'Single Item (1-of-1)', price: 15, release_type: 'Not for sale', photo: memberphoto2,video:Video2},
    { artist: 'Gramatik', title: 'Gramatik - Analog Droid', media_type: 'video', edition: 'Single Item (1-of-1)', price: 15, release_type: 'Not for sale', photo: memberphoto3,video:Video3},
    // { artist: 'Gramatik', title: 'Gramatik - Analog Droid', media_type: 'video', edition: 'Single Item (1-of-1)', price: 15, release_type: 'Not for sale', photo: 'https://d2tg7hjmtin7hh.cloudfront.net/thumbs/nft_item_cover/dd12/dd12b890-fcc2-4a94-b475-4cc09fccd79d_large.png'},
   ]
  
  const priceList = [
    {title:'5%' , subtitle:'per 1 BRT (limit 5BRT)'},
    {title:'Free Product' , subtitle:'40 BRT'},
    // {title:'Gold Member Offer' , subtitle:'10BRT'},
    {title:'Block Reward NFT' , subtitle:'exclusive'},
  ]
  let url = window.location.href;
  return(
    <Container>
      {url.includes("browse")&&
      <ImageWrapper src = {CBD_image} onClick = {()=>{navigate('/creator/CBD_plus_mebership')}} />
      }
     {
          !url.includes("blockreward") && !url.includes("browse")&&        
          <MarketListWrapper>   
              {priceList.map((item, i) => (
                  <PriceCard
                    item={item}
                  />
                ))}  
            </MarketListWrapper>
          }
      {
          !url.includes("CBD_plus") && 
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
      }
      {
         !url.includes("CBD_plus") && 
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
        }
      {
          !url.includes("CBD_plus") &&   
      <MarketListWrapper>
       
        {creatorList.map((item, i) => (
          <CreatorCard
            item={item}
            type={1}
            key={i}
            isCreator={isCreator}
          
          />
        ))}
      </MarketListWrapper>
      }
 
    </Container>
  )
}
