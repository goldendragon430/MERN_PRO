import React from 'react'
import { CreatorCard } from '../../../shared'
import {
  Container,
  ContentHeader,
  CreatorList
} from './styles'

export const Collections = () => {
  const creatorList = [
    { artist: 'Gramatik', title: 'Gramatik - Analog Droid', media_type: 'video', edition: 'Single Item (1-of-1)', price: 15, release_type: 'Not for sale', photo: 'https://limewire.com/hc_content_gramatik_cover.0de61d66.jpeg'},
  ]

  return (
    <Container>
      <ContentHeader>
        <h2>Collections by Gramatik</h2>
      </ContentHeader>
      <CreatorList>
        {creatorList.map((item, i) => (
          <CreatorCard
            item={item}
            type={1}
            key={i}
            isCreator
          />
        ))}
      </CreatorList>
    </Container>
  )
}