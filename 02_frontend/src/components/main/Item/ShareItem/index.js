import React from 'react'
import MdcCheckDecagram from '@meronex/icons/mdc/MdcCheckDecagram'
import {
  Container,
  Heading,
  Body,
  Item,
  ImageWrapper,
  Details,
  Artist,
  SocialItem
} from './styles'

export const ShareItem = () => {
  const socialList = [
    { url: 'https://twitter.com', title: 'Share on Twitter', icon: 'https://limewire.com/colored_logo_twitter.c72b619d.svg' },
    { url: 'https://twitter.com', title: 'Share on Facebook', icon: 'https://limewire.com/colored_logo_facebook.9a5d79af.svg' },
    { url: 'https://twitter.com', title: 'Share on WhatsApp', icon: 'https://limewire.com/colored_logo_whatsapp.41d50baf.svg' },
    { url: 'https://twitter.com', title: 'Share on Telegram', icon: 'https://limewire.com/colored_logo_telegram.1c4e0b16.svg' },
    { url: 'https://twitter.com', title: 'Copy URL', icon: 'https://limewire.com/icon-copy.e822cf5e.svg' },
  ]

  return (
    <Container>
      <Heading>
        <span>Share Item</span>
      </Heading>
      <Body>
        <Item>
          <ImageWrapper>
            <img src='https://d2tg7hjmtin7hh.cloudfront.net/thumbs/collection_cover/6315/6315d423-5532-47a0-8953-7c336abe503f_large.png' alt='' />
          </ImageWrapper>
          <Details>
            <Artist>
              <span>BlockReward</span>
              <MdcCheckDecagram />
            </Artist>
            <p>BlockReward Originals</p>
          </Details>
        </Item>
        {socialList.map((item, i) => (
          <SocialItem key={i} href={item.url}>
            <img src={item.icon} alt='' />
            <span>{item.title}</span>
          </SocialItem>
        ))}
      </Body>
    </Container>
  )
}
