import React, { useState } from 'react'
import { useEffect } from 'react'
import BsMusicNoteBeamed from '@meronex/icons/bs/BsMusicNoteBeamed'
import GoDeviceCameraVideo from '@meronex/icons/go/GoDeviceCameraVideo'
import CrPart from '@meronex/icons/cr/CrPart'
import CgMenuGridR from '@meronex/icons/cg/CgMenuGridR'
import MdPhotos from '@meronex/icons/ios/MdPhotos'
import WiStars from '@meronex/icons/wi/WiStars'
import GoGear from '@meronex/icons/go/GoGear'

import { LayoutContainer } from '../../shared'
import { BrowseContent } from './BrowseContent'
import { FilterSideBar } from './FilterSideBar'
import { Container } from './styles'
import {
  useLocation,
  useNavigate,
  createSearchParams,
} from 'react-router-dom';
import { useApi } from '../../../contexts/ApiContext'
import { toast } from 'react-toastify'

export const Browse = () => {
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
  const [{getRole,doPost}] = useApi()
  const [creatorList,setCreatorList] = useState([])
  const listingTypes = [
    { key: 'NFT_ITEM', name: 'Item' },
    { key: 'COLLECTION', name: 'Collection' }
  ]

  const saleTypes = [
    { key: 'RESTAURANTS_AND_BARS', name: 'Restaurants and Bars' },
    { key: 'RETAIL', name: 'Retail' },
    { key: 'BEAUTY', name: 'Beauty' },
    { key: 'HEALTH_AND_FITNESS', name: 'Health and fitness' },
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

  // const creatorList = [
  //   { id: '6371aadfb82faa6307021e05', name: 'Microsoft Co Ltd', photo: process.env.REACT_APP_SERVER_URL + 'fileservice/get_profile_file?name=' + '6L4VZI26XC534DT4PEELX3KDCSPQEKCKNCCFYLUXHQ2VICUNJGCBWJK5PE' + '.jpg' },
  //   { id: '6371ab7eb82faa6307021e08', name: 'Computer vison', photo:  process.env.REACT_APP_SERVER_URL + 'fileservice/get_profile_file?name=' + '2NCGPVWWT7J7F4K5R5VMFY6SN6WDIY3TOY53Q6CI7IWQQUXK7ITFNAK5EM' + '.jpg' },
  //  ]

  const location = useLocation()
  const navigate = useNavigate()

  const handleChangeFilter = (key, value) => {
    setFilterValues({
      ...filterValues,
      [key]: filterValues[key] === value ? '' : value
    })
    console.log(key,value)
  }
const onSearch = async (creator) =>{
      await fetchData()
      setFilterValues({
        creator: creator
      })      
}
  useEffect( () => {
    if (!location.state?.active) return
    const queryParams = new URLSearchParams(location.search)
    const sort = queryParams.get('sort')
    const creatorType = queryParams.get('creator_type')
    const creator = queryParams.get('creator')
    if (sort) {
      setFilterValues({
        sort: sort
      })
      return
    }
    if (creatorType) {
      setFilterValues({
        creator_type: creatorType
      })
      return
    }
    if(creator) {
      onSearch(creator)
    }
  }, [location])

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
      pathname: '/browse',
      search: `?${createSearchParams(_filterValues)}`,
    });
  }, [filterValues])

 const fetchData = async()=>{

    const response = await doPost('auth/get_business_list',{})
    if(response.error){
      toast.error("Server Error")
    }else{
      const result = response.result
      var id,name,photo
      var temp = []
      for (var i = 0 ;i < result.length ; i ++ )
      {
        id = result[i].id;
        name = result[i].company;
        photo =  process.env.REACT_APP_SERVER_URL + 'fileservice/get_profile_file?name=' + result[i].path + '.jpg'
        temp.push({id:id,name:name,photo:photo})
      }
      setCreatorList(temp)
    }


 } 
 useEffect(()=>{
  fetchData()
 },[])
  return (
    <LayoutContainer type = {1}>
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
        />
        <BrowseContent
          filterValues={filterValues}
          handleChangeFilter={handleChangeFilter}
          getFilterName={getFilterName}
        />
      </Container>
    </LayoutContainer>
  )
}
