import React from 'react'
import { Button, IconButton } from '../../../../styles'
import { LayoutContainer } from '../../../shared'
import EnChevronRight from '@meronex/icons/en/EnChevronRight'
import EnChevronLeft from '@meronex/icons/en/EnChevronLeft'
import { CreatorCard } from '../../../shared'
import { useNavigate } from 'react-router-dom'
import {
  Heading,
  ActionWrapper,
  Content
} from './styles'

export const CollectionList = () => {
  const navigate = useNavigate()

  const creatorList = [
    { artist: 'Gramatik', title: 'Gramatik - Analog Droid', media_type: 'video', edition: 'Single Item (1-of-1)', price: 15, release_type: 'Not for sale', photo: 'https://d2tg7hjmtin7hh.cloudfront.net/thumbs/nft_item_cover/4154/4154036c-7ec8-48ac-b0d8-9cf19bcb827c_large.png'},
    { artist: 'Gramatik', title: 'Gramatik - Analog Droid', media_type: 'music', edition: 'Single Item (1-of-1)', price: 15, release_type: 'Not for sale', photo: 'https://d2tg7hjmtin7hh.cloudfront.net/thumbs/nft_item_cover/d8da/d8dab043-32b7-4599-9532-f02a8bfd28a2_large.png'},
    { artist: 'Gramatik', title: 'Gramatik - Analog Droid', media_type: 'video', edition: 'Single Item (1-of-1)', price: 15, release_type: 'Not for sale', photo: 'https://d2tg7hjmtin7hh.cloudfront.net/thumbs/nft_item_cover/4154/4154036c-7ec8-48ac-b0d8-9cf19bcb827c_large.png'},
    { artist: 'Gramatik', title: 'Gramatik - Analog Droid', media_type: 'video', edition: 'Single Item (1-of-1)', price: 15, release_type: 'Not for sale', photo: 'https://d2tg7hjmtin7hh.cloudfront.net/thumbs/nft_item_cover/4154/4154036c-7ec8-48ac-b0d8-9cf19bcb827c_large.png'},
    { artist: 'Gramatik', title: 'Gramatik - Analog Droid', media_type: 'music', edition: 'Single Item (1-of-1)', price: 15, release_type: 'Not for sale', photo: 'https://d2tg7hjmtin7hh.cloudfront.net/thumbs/nft_item_cover/75cb/75cb9cb5-d8ed-4c2f-84d0-f52d7a2a3858_large.png'},
    { artist: 'Gramatik', title: 'Gramatik - Analog Droid', media_type: 'video', edition: 'Single Item (1-of-1)', price: 15, release_type: 'Not for sale', photo: 'https://d2tg7hjmtin7hh.cloudfront.net/thumbs/nft_item_cover/4154/4154036c-7ec8-48ac-b0d8-9cf19bcb827c_large.png'},
    { artist: 'Gramatik', title: 'Gramatik - Analog Droid', media_type: 'video', edition: 'Single Item (1-of-1)', price: 15, release_type: 'Not for sale', photo: 'https://d2tg7hjmtin7hh.cloudfront.net/thumbs/nft_item_cover/4154/4154036c-7ec8-48ac-b0d8-9cf19bcb827c_large.png'},
    { artist: 'Gramatik', title: 'Gramatik - Analog Droid', media_type: 'music', edition: 'Single Item (1-of-1)', price: 15, release_type: 'Not for sale', photo: 'https://d2tg7hjmtin7hh.cloudfront.net/thumbs/nft_item_cover/4154/4154036c-7ec8-48ac-b0d8-9cf19bcb827c_large.png'},
    { artist: 'Gramatik', title: 'Gramatik - Analog Droid', media_type: 'video', edition: 'Single Item (1-of-1)', price: 15, release_type: 'Not for sale', photo: 'https://d2tg7hjmtin7hh.cloudfront.net/thumbs/nft_item_cover/4154/4154036c-7ec8-48ac-b0d8-9cf19bcb827c_large.png'},
    { artist: 'Gramatik', title: 'Gramatik - Analog Droid', media_type: 'music', edition: 'Single Item (1-of-1)', price: 15, release_type: 'Not for sale', photo: 'https://d2tg7hjmtin7hh.cloudfront.net/thumbs/nft_item_cover/4154/4154036c-7ec8-48ac-b0d8-9cf19bcb827c_large.png'},
    { artist: 'Gramatik', title: 'Gramatik - Analog Droid', media_type: 'video', edition: 'Single Item (1-of-1)', price: 15, release_type: 'Not for sale', photo: 'https://d2tg7hjmtin7hh.cloudfront.net/thumbs/nft_item_cover/4154/4154036c-7ec8-48ac-b0d8-9cf19bcb827c_large.png'},
    { artist: 'Gramatik', title: 'Gramatik - Analog Droid', media_type: 'music', edition: 'Single Item (1-of-1)', price: 15, release_type: 'Not for sale', photo: 'https://d2tg7hjmtin7hh.cloudfront.net/thumbs/nft_item_cover/4154/4154036c-7ec8-48ac-b0d8-9cf19bcb827c_large.png'},
    { artist: 'Gramatik', title: 'Gramatik - Analog Droid', media_type: 'video', edition: 'Single Item (1-of-1)', price: 15, release_type: 'Not for sale', photo: 'https://d2tg7hjmtin7hh.cloudfront.net/thumbs/nft_item_cover/4154/4154036c-7ec8-48ac-b0d8-9cf19bcb827c_large.png'},
    { artist: 'Gramatik', title: 'Gramatik - Analog Droid', media_type: 'video', edition: 'Single Item (1-of-1)', price: 15, release_type: 'Not for sale', photo: 'https://d2tg7hjmtin7hh.cloudfront.net/thumbs/nft_item_cover/4154/4154036c-7ec8-48ac-b0d8-9cf19bcb827c_large.png'},
    { artist: 'Gramatik', title: 'Gramatik - Analog Droid', media_type: 'video', edition: 'Single Item (1-of-1)', price: 15, release_type: 'Not for sale', photo: 'https://d2tg7hjmtin7hh.cloudfront.net/thumbs/nft_item_cover/4154/4154036c-7ec8-48ac-b0d8-9cf19bcb827c_large.png'},
    { artist: 'Gramatik', title: 'Gramatik - Analog Droid', media_type: 'video', edition: 'Single Item (1-of-1)', price: 15, release_type: 'Not for sale', photo: 'https://d2tg7hjmtin7hh.cloudfront.net/thumbs/nft_item_cover/4154/4154036c-7ec8-48ac-b0d8-9cf19bcb827c_large.png'},
    { artist: 'Gramatik', title: 'Gramatik - Analog Droid', media_type: 'video', edition: 'Single Item (1-of-1)', price: 15, release_type: 'Not for sale', photo: 'https://d2tg7hjmtin7hh.cloudfront.net/thumbs/nft_item_cover/4154/4154036c-7ec8-48ac-b0d8-9cf19bcb827c_large.png'},
    { artist: 'Gramatik', title: 'Gramatik - Analog Droid', media_type: 'video', edition: 'Single Item (1-of-1)', price: 15, release_type: 'Not for sale', photo: 'https://d2tg7hjmtin7hh.cloudfront.net/thumbs/nft_item_cover/4154/4154036c-7ec8-48ac-b0d8-9cf19bcb827c_large.png'}
  ]

  return (
    <LayoutContainer>
      <Heading>
        <h2>More From This Collection</h2>
        <ActionWrapper>
          <Button color='primary' naked onClick={() => navigate('/collection/6315d423-5532-47a0-8953-7c336abe503f')}>Browse More</Button>
          <IconButton className='round'>
            <EnChevronLeft />
          </IconButton>
          <IconButton className='round'>
            <EnChevronRight />
          </IconButton>
        </ActionWrapper>
      </Heading>
      <Content>
        {creatorList.map((item, i) => (
          <CreatorCard
            item={item}
            type={1}
            key={i}
            isItem
          />
        ))}
      </Content>
    </LayoutContainer>
  )
}
