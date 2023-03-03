import React, { useState } from 'react'
import { useEffect } from 'react'
 
import { LayoutContainer } from '../../../shared'
 
import { 
  Container  ,
  ImageWrapper,
  Card,
  ContentHeader,
  ButtonGroup,
  SwiperWrapper,
  SwapContainer,
  KLayoutContainer
} from './styles'

import 'swiper/css'
import 'swiper/css/navigation'
import EnChevronRight from '@meronex/icons/en/EnChevronRight'
import EnChevronLeft from '@meronex/icons/en/EnChevronLeft'
import { Swiper, SwiperSlide } from 'swiper/react'
import { IconButton } from '../../../../styles'
import {Navigation} from 'swiper'
import {
  useNavigate,
  createSearchParams,
  useParams 
} from 'react-router-dom';
import CBD_image from '../../../../assets/images/cbdbutton.jpg'
import { useApi } from '../../../../contexts/ApiContext'
import { toast } from 'react-toastify'
export const DiscountCards = () => {
  // const { id } = useParams()
  const [{doPost}] = useApi()
  const navigate = useNavigate()
  const [data,setData] = useState([])
  const [len,setLen] = useState(1)
  const getData = async()=>{
    const response = await doPost('auth/get_business_list',{

    })
    if(response.error || response.result == 'failed'){
      toast.error("Server Error")
    }else{
      setData(response.result)
      if (response.result.length == 1) setLen(1)
        else setLen(3)
    } 
  }
  const onClick = async ( path)=>{
    const response = await doPost('membershipshop/confirm_membership',{
      company_id : path,
      address : localStorage.getItem('address')
    })
    if(response.error || response.result == 'failed'){
      toast.error("Please purchase company membership.")
      return;
    }
    navigate('/creator/Redeem_Discount',{state:{address:path}})
  }
  useEffect(()=>{
    getData()
 },[])
  return (
  <KLayoutContainer>
      <SwapContainer>

       <SwiperWrapper>
            { 
              data.length > 1 &&
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
                      slidesPerView: 2
                    },
                    1000: {
                      slidesPerView: 3
                    },
                    1400: {
                      slidesPerView: 4,
                      spaceBetween: 30
                    }
                  }}
                  navigation={{
                    nextEl: '.swiper-btn-next',
                    prevEl: '.swiper-btn-prev',
                  }}
                >
 
            {data.map((item, i) => (
              <SwiperSlide key={i}>
                <Card>
                  <ImageWrapper src = { process.env.REACT_APP_SERVER_URL + 'fileservice/get_profile_file?name=' + item.path + '.jpg'} onClick = {()=>{onClick(item.path)}} />
              </Card>
              </SwiperSlide>
          ))}
        </Swiper>
      }
            { 
              data.length == 1 &&
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
 
            {data.map((item, i) => (
              <SwiperSlide key={i}>
                <Card>
                  <ImageWrapper src = { process.env.REACT_APP_SERVER_URL + 'fileservice/get_profile_file?name=' + item.path + '.jpg'} onClick = {()=>{onClick(item.path)}} />
              </Card>
              </SwiperSlide>
          ))}
        </Swiper>
      }
        </SwiperWrapper>
    </SwapContainer>
  </KLayoutContainer>
            )
}
