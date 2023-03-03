import React from 'react'
import { LayoutContainer } from '../../../shared'
import {
  Container,
  ContentWrapper,
  FaqItem
} from './styles'

export const Faq = () => {
  const faqList = [
    { title: 'What are the LimeWire Originals?', content: 'LimeWire Originals is an exclusive collection of 10,000 Original NFTs living on the Ethereum blockchain. Owning a LimeWire Original will give you access to regular members-only LimeWire events & parties, monthly LMWR token rewards, as well as early access to high-profile NFT drops on the LimeWire marketplace.' },
    { title: 'How were they created?', content: 'The entire set of 10,000 LimeWire Originals was programmatically generated based on as much as 500 unique attributes, including expressions, hair and headwear, clothing, accessories, and more. You can easily spot an Original based on the LimeWire icon or LMWR logo on its body or clothing.' },
    { title: 'What kind of utility is attached to a LimeWire Original?', content: 'Owning a LimeWire Original means getting access to regular invite-only events and parties hosted by LimeWire all around the world, LMWR Token Rewards, early access to NFT drops on LimeWire, access to limited LimeWire merch collections, and much more.' },
    { title: 'How much will they cost?', content: 'The price of an Original will be USD $750 each, and can be paid by credit card, BTC, ETH, or USDC. Completing the purchase process during the private sale process will guarantee you an allocation of one (or more, depending on how many you purchase) Original, and you will receive a claim code to take ownership of the NFT as soon as the LimeWire marketplace launches.' },
    { title: 'How many can I buy?', content: 'We strive to create a vibrant community of LimeWire Original owners, so our team does not see any value in whales picking up dozens in one go, and we are trying to keep the number of Originals per buyer low. Depending on the type of invite code you receive, the number of LimeWire Originals you can purchase will be limited.' },
    { title: 'How can I join the LimeWire community?', content: 'To engage with our team get announcements and updates in real-time, you can join our community on Telegram, Discord or via our social media channels, such as Twitter.' }
  ]

  return (
    <LayoutContainer>
      <Container>
        <h2>Frequently Asked Questions</h2>
        <ContentWrapper>
          {faqList.map((item, i) => (
            <FaqItem>
              <h4>{item.title}</h4>
              <p>{item.content}</p>
            </FaqItem>
          ))}
        </ContentWrapper>
      </Container>
    </LayoutContainer>
  )
}
