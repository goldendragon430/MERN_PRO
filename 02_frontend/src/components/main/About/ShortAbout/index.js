import React from 'react'

import {
  Container,
  SectionHeader
} from './styles'

export const ShortAbout = () => {
  return (
    <Container>
      {/* <SectionHeader>
        <h2>BlockReward is Back</h2>
      </SectionHeader>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/lnbEBWEOtYA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe> */}
      <br /><br />
      <SectionHeader>
        <h2>About BlockReward</h2>
      </SectionHeader>
      <p>
        Block Reward is a membership and a reward system for retailers, both in person and online. Our mission is to connect business and customers in an easy and unique fashion. Business will offer memberships through our platform, doing this exposes potential customers to new discount opportunities. We are excited to have a platform for business and customers to easily connect, on our platform business have a dedicated page for discounts and special offers to be posted. All owners of a Block Reward membership have access to this page, but full discounts and promotions are reserved for full business members.  This system allows interoperability between businesses and takes advantage of shared customers. 
      </p>
      <br />
      <p>
        Block Reward Memberships are NFTs minted on the <a href="https://www.algorand.com">Algorand Blockchain.</a> NFTs and blockchain are a unique way for businesses to protect the authenticity of membership and an easy way for businesses to track discounts redeemed by their customers.
      </p>
    </Container>
  )
}