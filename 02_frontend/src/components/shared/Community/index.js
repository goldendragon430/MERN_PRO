import React from 'react'
import LgTelegram from '@meronex/icons/lg/LgTelegram';
import LgDiscord from '@meronex/icons/lg/LgDiscord';
import LgTwitter from '@meronex/icons/lg/LgTwitter';
import FaInstagramSquare from '@meronex/icons/fa/FaInstagramSquare';
import SiTiktok from '@meronex/icons/si/SiTiktok';

import {
  Container,
  CommunityLinks
} from './styles'

export const Community = () => {
  return (
    <Container>
      <span>Community Access</span>
      <CommunityLinks>
        <a href="https://t.me/limewire" target="_blank" rel="noreferrer">
          <LgTelegram size="28"/>
          <span>Block Reward on Telegram</span>
        </a>
        <a href="https://discord.com/invite/limewire" target="_blank" rel="noreferrer">
          <LgDiscord size="28"/>
          <span>Block Reward on Discord</span>
        </a>
        <a href="https://twitter.com/limewire" target="_blank" rel="noreferrer">
          <LgTwitter size="28"/>
          <span>Twitter</span>
        </a>
        <a href="https://www.instagram.com/limewire/" target="_blank" rel="noreferrer">
          <FaInstagramSquare size="28"/>
          <span>Instagram</span>
        </a>
        <a href="https://www.tiktok.com/@limewireofficial" target="_blank" rel="noreferrer">
          <SiTiktok size="28"/>
          <span>TikTok</span>
        </a>
      </CommunityLinks>
    </Container>
  )
}