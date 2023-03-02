import React from 'react'
import { CollectionCard, LayoutContainer } from '../../../shared'
import EnChevronRight from '@meronex/icons/en/EnChevronRight'
import EnChevronLeft from '@meronex/icons/en/EnChevronLeft'
import { Button, IconButton } from '../../../../styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useWindowSize } from '../../../../hooks/useWindowSize'
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

export const TrendingCollections = () => {
  const { width } = useWindowSize()

  const collectionList = [
    { artist: 'block reward', title: 'LimeWire Originals (68% sold)', photo: '/images/collection.png' },
    { artist: 'block reward', title: 'LimeWire Originals (68% sold)', photo: '/images/collection.png' },
    { artist: 'block reward', title: 'LimeWire Originals (68% sold)', photo: '/images/collection.png' },
    { artist: 'block reward', title: 'LimeWire Originals (68% sold)', photo: '/images/collection.png' },
  ]

  return (
    <LayoutContainer>
      <ContentHeader>
        <h2>Trending Collections</h2>
        <ButtonGroup>
          {width > 769 && <Button naked color='primary'>Browse collections</Button>}
          <IconButton className='collection-prev round'>
            <EnChevronLeft />
          </IconButton>
          <IconButton className='collection-next round'>
            <EnChevronRight />
          </IconButton>
        </ButtonGroup>
      </ContentHeader>
      <SwiperWrapper>
      <Swiper
          slidesPerView={2}
          spaceBetween={30}
          loop
          autoplay
          modules={[Navigation]}
          className='mySwiper'
          breakpoints={{
            0: {
              slidesPerView: 1
            },
            994: {
              slidesPerView: 2
            }
          }}
          navigation={{
            nextEl: '.collection-next',
            prevEl: '.collection-prev',
          }}
        >
          {collectionList.map((collection, i) => (
            <SwiperSlide key={i}>
              <CollectionCard
                item={collection}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperWrapper>
    </LayoutContainer>
  )
}
