import React from 'react'
import { IconButton } from '../../../../styles'
import EnChevronRight from '@meronex/icons/en/EnChevronRight'
import EnChevronLeft from '@meronex/icons/en/EnChevronLeft'
import { CreatorCard, LayoutContainer } from '../../../shared'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import Photo1 from "../../../../assets/images/111.jpg"
import Photo2 from "../../../../assets/images/222.jpg"
import Photo3 from "../../../../assets/images/333.jpg"
import Video1 from "../../../../assets/video/Silver-GreenBackGround_1.mp4"
import Video3 from "../../../../assets/video/Animate-Black.mp4"
import Video2 from "../../../../assets/video/Animate-Gold.mp4"
// import required modules
import { Navigation } from 'swiper'

import {
  ContentHeader,
  ButtonGroup,
  SwiperWrapper
} from './styles'

export const Releases = () => {
  const creatorList = [
    { artist: 'Gramatik', title: 'Gramatik - Analog Droid', media_type: 'video', edition: 'Single Item (1-of-1)', release_type: 'Secondary Market', photo: Photo1,video:Video1 },
    { artist: 'Gramatik', title: 'Gramatik - Analog Droid', media_type: 'video', edition: 'Single Item (1-of-1)', release_type: 'Secondary Market', photo: Photo2,video:Video2},
    { artist: 'Gramatik', title: 'Gramatik - Analog Droid', media_type: 'video', edition: 'Single Item (1-of-1)', release_type: 'Secondary Market', photo: Photo3,video:Video3},
    { artist: 'Gramatik', title: 'Gramatik - Analog Droid', media_type: 'video', edition: 'Single Item (1-of-1)', release_type: 'Secondary Market', photo: Photo1,video:Video1},
    { artist: 'Gramatik', title: 'Gramatik - Analog Droid', media_type: 'video', edition: 'Single Item (1-of-1)', release_type: 'Secondary Market', photo: Photo2,video:Video2},
    { artist: 'Gramatik', title: 'Gramatik - Analog Droid', media_type: 'video', edition: 'Single Item (1-of-1)', release_type: 'Secondary Market', photo: Photo3,video:Video3},
    { artist: 'Gramatik', title: 'Gramatik - Analog Droid', media_type: 'video', edition: 'Single Item (1-of-1)', release_type: 'Secondary Market', photo: Photo1,video:Video1},
    { artist: 'Gramatik', title: 'Gramatik - Analog Droid', media_type: 'video', edition: 'Single Item (1-of-1)', release_type: 'Secondary Market', photo: Photo2,video:Video2},
    { artist: 'Gramatik', title: 'Gramatik - Analog Droid', media_type: 'video', edition: 'Single Item (1-of-1)', release_type: 'Secondary Market', photo: Photo3,video:Video3},
    { artist: 'Gramatik', title: 'Gramatik - Analog Droid', media_type: 'video', edition: 'Single Item (1-of-1)', release_type: 'Secondary Market', photo: Photo1,video:Video1},
    { artist: 'Gramatik', title: 'Gramatik - Analog Droid', media_type: 'video', edition: 'Single Item (1-of-1)', release_type: 'Secondary Market', photo: Photo2,video:Video2},
    { artist: 'Gramatik', title: 'Gramatik - Analog Droid', media_type: 'video', edition: 'Single Item (1-of-1)', release_type: 'Secondary Market', photo: Photo3,video:Video3},
    { artist: 'Gramatik', title: 'Gramatik - Analog Droid', media_type: 'video', edition: 'Single Item (1-of-1)', release_type: 'Secondary Market', photo: Photo1,video:Video1},
    { artist: 'Gramatik', title: 'Gramatik - Analog Droid', media_type: 'video', edition: 'Single Item (1-of-1)', release_type: 'Secondary Market', photo: Photo2,video:Video2},
    { artist: 'Gramatik', title: 'Gramatik - Analog Droid', media_type: 'video', edition: 'Single Item (1-of-1)', release_type: 'Secondary Market', photo: Photo3,video:Video3},
    { artist: 'Gramatik', title: 'Gramatik - Analog Droid', media_type: 'video', edition: 'Single Item (1-of-1)', release_type: 'Secondary Market', photo: Photo1,video:Video1},
    { artist: 'Gramatik', title: 'Gramatik - Analog Droid', media_type: 'video', edition: 'Single Item (1-of-1)', release_type: 'Secondary Market', photo: Photo2,video:Video2},
    { artist: 'Gramatik', title: 'Gramatik - Analog Droid', media_type: 'video', edition: 'Single Item (1-of-1)', release_type: 'Secondary Market', photo: Photo3,video:Video3}
  ]

  return (
    <>
    <LayoutContainer>
      <ContentHeader style = {{marginTop:20}}>
        <h2>Membership offered</h2>
        <ButtonGroup>
          <IconButton className='swiper-btn-prev'>
            <EnChevronLeft />
          </IconButton>
          <IconButton className='swiper-btn-next'>
            <EnChevronRight />
          </IconButton>
        </ButtonGroup>
      </ContentHeader>
    </LayoutContainer>
    <SwiperWrapper>
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
          {creatorList.map((creator, i) => (
            <SwiperSlide key={i}>
              <CreatorCard
                item={creator}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperWrapper>
    </>

  )
}
