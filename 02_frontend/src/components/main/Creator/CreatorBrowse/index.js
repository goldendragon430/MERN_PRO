import React, { useState } from 'react'
import { useEffect } from 'react'
import BsMusicNoteBeamed from '@meronex/icons/bs/BsMusicNoteBeamed'
import GoDeviceCameraVideo from '@meronex/icons/go/GoDeviceCameraVideo'
import CrPart from '@meronex/icons/cr/CrPart'
import CgMenuGridR from '@meronex/icons/cg/CgMenuGridR'
import MdPhotos from '@meronex/icons/ios/MdPhotos'
import WiStars from '@meronex/icons/wi/WiStars'
import GoGear from '@meronex/icons/go/GoGear'
import { LayoutContainer } from '../../../shared'
import { BrowseContent } from '../../Browse/BrowseContent'
import { FilterSideBar } from '../../Browse/FilterSideBar'
import { Container } from './styles'

import {
  useLocation,
  useNavigate,
  createSearchParams,
  useParams
} from 'react-router-dom';




export const CreatorBrowse = () => {
  const { artist } = useParams()

  const [filterValues, setFilterValues] = useState({
    item_type: '',
    sale_type: '',
    creator: '',
    creator_type: '',
    category: '',
    from: '',
    to: '',
    market: '',
    sort: ''
  })

  const listingTypes = [
    { key: 'NFT_ITEM', name: 'Item' },
    { key: 'COLLECTION', name: 'Collection' }
  ]

  const saleTypes = [
    { key: 'RESTAURANTS_AND_BARS', name: 'Restaurants and Bars' },
    { key: 'RETAIL', name: 'Retail' },
    { key: 'BEAUTY', name: 'Beauty' },
    { key: 'HEALTH_AND_FITNESS', name: 'Health and Fitness' },
  ]

  const marketList = [
    { key: 'PRIMARY', name: 'Primary' },
    { key: 'SECONDARY', name: 'Secondary' }
  ]

  const creatorFilterList = [
    { key: 'VERIFIED_CREATOR', name: 'Verified Creators' },
    { key: 'NEW_CREATOR', name: 'New Creators' },
  ]

  const categoryList = [
    { key: 'MUSIC', name: 'Music', icon: <BsMusicNoteBeamed /> },
    { key: 'VIDEO', name: 'Video', icon: <GoDeviceCameraVideo /> },
    { key: 'ART', name: 'Art', icon: <CrPart /> },
    { key: 'COLLECTIBLE', name: 'Collectible', icon: <CgMenuGridR /> },
    { key: 'PHOTOGRAPHY', name: 'Photography', icon: <MdPhotos /> },
    { key: 'ENTERTAINMENT', name: 'Entertainment', icon: <WiStars /> },
    { key: 'BLOCK_REWARD', name: 'Block reward', icon: <GoGear /> }
  ]

  const creatorList = [
    { id: '1er5-12kl-1', name: 'ÆON7', photo: 'https://d2tg7hjmtin7hh.cloudfront.net/thumbs/creator_page_avatar/4224/4224b28f-c148-4876-b803-42f4c6784f2b_small.png' },
    { id: '1er5-12kl-2', name: 'Aitch', photo: 'https://d2tg7hjmtin7hh.cloudfront.net/thumbs/creator_page_avatar/2843/28433c6b-8efa-453f-bd4f-73b4314862fc_small.png' },
    { id: '1er5-12kl-3', name: 'CJ Fly', photo: 'https://d2tg7hjmtin7hh.cloudfront.net/thumbs/creator_page_avatar/9bde/9bdea7aa-fcf7-4d6e-830a-a6e287ddac47_small.png' },
    { id: '1er5-12kl-4', name: 'FNX', photo: 'https://d2tg7hjmtin7hh.cloudfront.net/thumbs/creator_page_avatar/4224/4224b28f-c148-4876-b803-42f4c6784f2b_small.png' },
    { id: '1er5-12kl-5', name: 'BXB LOVE', photo: 'https://d2tg7hjmtin7hh.cloudfront.net/thumbs/creator_page_avatar/60bd/60bd37bf-aefa-4b89-901f-8da4e325d69f_small.png' },
    { id: '1er5-12kl-6', name: 'ÆON7', photo: 'https://d2tg7hjmtin7hh.cloudfront.net/thumbs/creator_page_avatar/4224/4224b28f-c148-4876-b803-42f4c6784f2b_small.png' },
    { id: '1er5-12kl-7', name: 'ÆON7', photo: 'https://d2tg7hjmtin7hh.cloudfront.net/thumbs/creator_page_avatar/4224/4224b28f-c148-4876-b803-42f4c6784f2b_small.png' },
    { id: '1er5-12kl-8', name: 'ÆON7', photo: 'https://d2tg7hjmtin7hh.cloudfront.net/thumbs/creator_page_avatar/4224/4224b28f-c148-4876-b803-42f4c6784f2b_small.png' },
    { id: '1er5-12kl-9', name: 'ÆON7', photo: 'https://d2tg7hjmtin7hh.cloudfront.net/thumbs/creator_page_avatar/4224/4224b28f-c148-4876-b803-42f4c6784f2b_small.png' },
    { id: '1er5-12kl-10', name: 'ÆON7', photo: 'https://d2tg7hjmtin7hh.cloudfront.net/thumbs/creator_page_avatar/4224/4224b28f-c148-4876-b803-42f4c6784f2b_small.png' }
  ]

  const location = useLocation()
  const navigate = useNavigate()

  const handleChangeFilter = (key, value) => {
    setFilterValues({
      ...filterValues,
      [key]: filterValues[key] === value ? '' : value
    })
  }

  // console.log(artist)

  // useEffect(() => {
  //   if (!location.state?.active) return
  //   const queryParams = new URLSearchParams(location.search)
  //   const sort = queryParams.get('sort')
  //   const creatorType = queryParams.get('creator_type')
  //   if (sort) {
  //     setFilterValues({
  //       sort: sort
  //     })
  //     return
  //   }
  //   if (creatorType) {
  //     setFilterValues({
  //       creator_type: creatorType
  //     })
  //     return
  //   }
  // }, [location])

  const getFilterName = (key, value) => {
    if (key === 'item_type') return listingTypes.find(item => item.key === value).name
    if (key === 'sale_type') return saleTypes.find(item => item.key === value).name
    if (key === 'creator_type') return creatorFilterList.find(item => item.key === value).name
    if (key === 'creator') return creatorList.find(item => item.id === value).name
    if (key === 'category') return categoryList.find(item => item.key === value).name
    if (key === 'market') return marketList.find(item => item.key === value).name
    if (key === 'from') return `From $${value}`
    if (key === 'to') return `To $${value}`
  }

  useEffect(() => {
    const _filterValues = {...filterValues}
    if (!_filterValues) return
    Object.keys(_filterValues).forEach(key => {
      if (_filterValues[key] === '') {
        delete _filterValues[key]
      }
    });
    
    navigate({
      pathname: `/creator/${artist}`,
      search: `?${createSearchParams(_filterValues)}`,
    });
  }, [filterValues])

  return (
    <LayoutContainer>
      <Container>
        <FilterSideBar
          filterValues={filterValues}
          handleChangeFilter={handleChangeFilter}
          listingTypes={listingTypes}
          saleTypes={saleTypes}
          marketList={marketList}
          creatorFilterList={creatorFilterList}
          categoryList={categoryList}
          creatorList={creatorList}
          isCreator 
        />
        <BrowseContent
          filterValues={filterValues}
          handleChangeFilter={handleChangeFilter}
          getFilterName={getFilterName}
          isCreator
        />
      </Container>
    </LayoutContainer>
  )
}
