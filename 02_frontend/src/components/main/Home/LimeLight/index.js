import React from 'react'
import { IconButton } from '../../../../styles'
import EnChevronRight from '@meronex/icons/en/EnChevronRight'
import EnChevronLeft from '@meronex/icons/en/EnChevronLeft'
import { CreatorCard, LayoutContainer } from '../../../shared'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper'

import {
  ContentHeader,
  ButtonGroup,
  SwiperWrapper
} from './styles'

export const LimeLight = () => {
  const creatorList = [
    { artist: 'Starchild Yeezo', title: 'Bottle of Pills', media_type: 'video', edition: '10000 Editions', release_type: 'Out Now', photo: '/images/creator.avif'},
    { artist: 'Starchild Yeezo', title: 'Bottle of Pills', media_type: 'music', edition: '10000 Editions', release_type: 'Out Now', photo: '/images/creator.avif'},
    { artist: 'Starchild Yeezo', title: 'Bottle of Pills', media_type: 'video', edition: '10000 Editions', release_type: 'Out Now', photo: '/images/creator.avif'},
    { artist: 'Starchild Yeezo', title: 'Bottle of Pills', media_type: 'video', edition: '10000 Editions', release_type: 'Out Now', photo: '/images/creator.avif'},
    { artist: 'Starchild Yeezo', title: 'Bottle of Pills', media_type: 'music', edition: '10000 Editions', release_type: 'Out Now', photo: '/images/creator.avif'},
    { artist: 'Starchild Yeezo', title: 'Bottle of Pills', media_type: 'video', edition: '10000 Editions', release_type: 'Out Now', photo: '/images/creator.avif'},
    { artist: 'Starchild Yeezo', title: 'Bottle of Pills', media_type: 'video', edition: '10000 Editions', release_type: 'Out Now', photo: '/images/creator.avif'},
    { artist: 'Starchild Yeezo', title: 'Bottle of Pills', media_type: 'music', edition: '10000 Editions', release_type: 'Out Now', photo: '/images/creator.avif'},
    { artist: 'Starchild Yeezo', title: 'Bottle of Pills', media_type: 'video', edition: '10000 Editions', release_type: 'Out Now', photo: '/images/creator.avif'},
    { artist: 'Starchild Yeezo', title: 'Bottle of Pills', media_type: 'music', edition: '10000 Editions', release_type: 'Out Now', photo: '/images/creator.avif'},
    { artist: 'Starchild Yeezo', title: 'Bottle of Pills', media_type: 'video', edition: '10000 Editions', release_type: 'Out Now', photo: '/images/creator.avif'},
    { artist: 'Starchild Yeezo', title: 'Bottle of Pills', media_type: 'music', edition: '10000 Editions', release_type: 'Out Now', photo: '/images/creator.avif'},
    { artist: 'Starchild Yeezo', title: 'Bottle of Pills', media_type: 'video', edition: '10000 Editions', release_type: 'Out Now', photo: '/images/creator.avif'},
    { artist: 'Starchild Yeezo', title: 'Bottle of Pills', media_type: 'video', edition: '10000 Editions', release_type: 'Out Now', photo: '/images/creator.avif'},
    { artist: 'Starchild Yeezo', title: 'Bottle of Pills', media_type: 'video', edition: '10000 Editions', release_type: 'Out Now', photo: '/images/creator.avif'},
    { artist: 'Starchild Yeezo', title: 'Bottle of Pills', media_type: 'video', edition: '10000 Editions', release_type: 'Out Now', photo: '/images/creator.avif'},
    { artist: 'Starchild Yeezo', title: 'Bottle of Pills', media_type: 'video', edition: '10000 Editions', release_type: 'Out Now', photo: '/images/creator.avif'},
    { artist: 'Starchild Yeezo', title: 'Bottle of Pills', media_type: 'video', edition: '10000 Editions', release_type: 'Out Now', photo: '/images/creator.avif'}
  ]

  return (
    <LayoutContainer>
      <ContentHeader>
        <h2>In the LimeLight</h2>
        <ButtonGroup>
          <IconButton className='btn-prev'>
            <EnChevronLeft />
          </IconButton>
          <IconButton className='btn-next'>
            <EnChevronRight />
          </IconButton>
        </ButtonGroup>
      </ContentHeader>
      {/* <SwiperWrapper>
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
            nextEl: '.btn-next',
            prevEl: '.btn-prev',
          }}
        >
          {creatorList.map((creator, i) => (
            <SwiperSlide key={i}>
              <CreatorCard
                item={creator}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperWrapper> */}
    </LayoutContainer>

  )
}
