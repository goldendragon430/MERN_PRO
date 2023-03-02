import React from 'react'
import MdcCheckDecagram from '@meronex/icons/mdc/MdcCheckDecagram'
import {
  Container,
  CreatorListWrapper,
  CreatorItem,
  ImgWrapper,
  Details
} from './styles'

export const TrendingCreators = () => {
  const creatorList = [
    { name: 'ÆON7', photo: 'https://d2tg7hjmtin7hh.cloudfront.net/thumbs/creator_page_avatar/4224/4224b28f-c148-4876-b803-42f4c6784f2b_small.png' },
    { name: 'Aitch', photo: 'https://d2tg7hjmtin7hh.cloudfront.net/thumbs/creator_page_avatar/2843/28433c6b-8efa-453f-bd4f-73b4314862fc_small.png' },
    { name: 'CJ Fly', photo: 'https://d2tg7hjmtin7hh.cloudfront.net/thumbs/creator_page_avatar/9bde/9bdea7aa-fcf7-4d6e-830a-a6e287ddac47_small.png' },
    { name: 'FNX', photo: 'https://d2tg7hjmtin7hh.cloudfront.net/thumbs/creator_page_avatar/4224/4224b28f-c148-4876-b803-42f4c6784f2b_small.png' },
    { name: 'BXB LOVE', photo: 'https://d2tg7hjmtin7hh.cloudfront.net/thumbs/creator_page_avatar/60bd/60bd37bf-aefa-4b89-901f-8da4e325d69f_small.png' },
    { name: 'ÆON7', photo: 'https://d2tg7hjmtin7hh.cloudfront.net/thumbs/creator_page_avatar/4224/4224b28f-c148-4876-b803-42f4c6784f2b_small.png' }
  ]

  return (
    <Container>
      <h2>Trending Businesses</h2>
      <CreatorListWrapper>
        {creatorList.map((item, i) => (
          <CreatorItem key={i}>
            <ImgWrapper>
              <img src={item.photo} alt='' />
            </ImgWrapper>
            <Details>
              <span>{item.name}</span>
              <MdcCheckDecagram />
            </Details>
          </CreatorItem>
        ))}
      </CreatorListWrapper>
    </Container>
  )
}