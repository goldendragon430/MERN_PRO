import React from 'react'
import BsNewspaper from '@meronex/icons/bs/BsNewspaper'

import {
  Container,
  SectionHeader,
  ItemWraper
} from './styles'

export const Media = () => {

  const data = [
    {
      title: "BlockReward on Decrypt",
      description: "Universal Music Group to Release NFTs on BlockReward's Algorand Marketplace",
      link: "https://decrypt.co/100704/universal-music-group-nfts-limewire-algorand-marketplace"
    },
    {
      title: "BlockReward on Coindesk",
      description: "BlockReward Partners With Universal Music Group for Music NFT Licensing",
      link: "https://www.coindesk.com/video/the-hash-on-cdtv-clips/limewire-partners-with-universal-music-group-for-music-nft-licensing/"
    },
    {
      title: "BlockReward on Digital Music News",
      description: "BlockReward Announces 'First Major Music Label Partnership' With Universal Music Group Ahead of Relaunch",
      link: "https://www.digitalmusicnews.com/2022/05/17/limewire-universal-music-partnership/"
    },
    {
      title: "BlockReward on The Block",
      description: "BlockReward raises $10 million in private token sale to grow music-linked NFT platform",
      link: "https://www.theblockcrypto.com/post/142661/limewire-raises-10-million-in-private-token-sale-to-grow-music-linked-nft-platform"
    },
    {
      title: "BlockReward on Decrypt",
      description: "Universal Music Group to Release NFTs on BlockReward's Algorand Marketplace",
      link: "https://decrypt.co/100704/universal-music-group-nfts-limewire-algorand-marketplace"
    },
    {
      title: "BlockReward on Decrypt",
      description: "Universal Music Group to Release NFTs on BlockReward's Algorand Marketplace",
      link: "https://decrypt.co/100704/universal-music-group-nfts-limewire-algorand-marketplace"
    },
    {
      title: "BlockReward on Decrypt",
      description: "Universal Music Group to Release NFTs on BlockReward's Algorand Marketplace",
      link: "https://decrypt.co/100704/universal-music-group-nfts-limewire-algorand-marketplace"
    },
    {
      title: "BlockReward on Decrypt",
      description: "Universal Music Group to Release NFTs on BlockReward's Algorand Marketplace",
      link: "https://decrypt.co/100704/universal-music-group-nfts-limewire-algorand-marketplace"
    },
    {
      title: "BlockReward on Decrypt",
      description: "Universal Music Group to Release NFTs on BlockReward's Algorand Marketplace",
      link: "https://decrypt.co/100704/universal-music-group-nfts-limewire-algorand-marketplace"
    },
    {
      title: "BlockReward on Decrypt",
      description: "Universal Music Group to Release NFTs on BlockReward's Algorand Marketplace",
      link: "https://decrypt.co/100704/universal-music-group-nfts-limewire-algorand-marketplace"
    },
    {
      title: "BlockReward on Decrypt",
      description: "Universal Music Group to Release NFTs on BlockReward's Algorand Marketplace",
      link: "https://decrypt.co/100704/universal-music-group-nfts-limewire-algorand-marketplace"
    },
  ]

  return (
    <Container>
      <SectionHeader>
        <h2>BlockReward in the Media</h2>
      </SectionHeader>
      {data.map((item, i) =>
        <ItemWraper href={item.link} rel="noreferrer" target="_blank" key={i}>
          <BsNewspaper size="20"/>
          <span>{item.title}</span>
          <p>{item.description}</p>
        </ItemWraper>
      )}
    </Container>
  )
}