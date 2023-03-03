import React from 'react'
import MdcCheckDecagram from '@meronex/icons/mdc/MdcCheckDecagram'
import {
  Container,
  ImageWrapper,
  DetailsWrapper,
  LeftSide,
  RightSide,
  ArtistWrapper
} from './styles'
import { Button } from '../../../styles'

export const CollectionCard = (props) => {
  const { item } = props

  return (
    <Container>
      <ImageWrapper>
        <img src={item?.photo} alt='' />
      </ImageWrapper>
      <DetailsWrapper>
        <LeftSide>
          <ArtistWrapper>
            <span>{item?.artist}</span>
            <MdcCheckDecagram />
          </ArtistWrapper>
          <p>{item?.title}</p>
        </LeftSide>
        <RightSide>
          <Button naked color='primary'>View Collection</Button>
        </RightSide>
      </DetailsWrapper>
    </Container>
  )
}
