import React from 'react'
import { LayoutContainer } from '../../../shared'

import {
  ComponentWraper,
  FaqHeader,
  FaqMain,
  FaqItem,
} from './styles'

export const Faq = () => {

  const data = [
    {
      title: 'How do I earn Block Reward Tokens(BRT)? ',
      description: ' Simply stated BRT is a reward point. You earn tokens back on purchases from business in the Block Reward ecosystem. Percentages sent back are set by the business. (minimum is 10% BRT back on purchases, a limited amount of tokens can be sent) On our platform we may offer the opportunity to earn and purchase BRT.'
    },
    {
      title: ' How can I use Block Reward Token on the platform?',
      description: 'You will use Block Reward Token to redeem discounts offered by businesses within our ecosystem. Businesses will have different offerings that will be able to be redeemed using BRT.'
    },
    // {
    //   title: 'Who are the investors behind this token?',
    //   description: 'In early 2022, BlockReward successfully raised a total of USD $10.4 million in a strategic token sale led by Kraken Ventures, Arrington Capital, GSR, Crypto.com Capital, CMCC Global, Hivemind as well as, 720Mau5, the fund behind Canadian music producer Deadmau5, as well as DAO Jones, a group of investors including Steve Aoki.'
    // },
    // {
    //   title: 'When is the public token sale?',
    //   description: 'The public sale of the LMWR token is scheduled for Q4 of 2022 and will take place on a well-known token launch pad or cryptocurrency exchange. To stay up-to-date and be the first to know as soon as a public sale date has been set, please join the BlockReward Discord channel and follow us on social media.'
    // }
  ]

  return (
    <ComponentWraper>
      <LayoutContainer>
        <FaqHeader>
          <h2>Frequently Asked Questions</h2>
        </FaqHeader>
        <FaqMain>
          {data.map((item, index) =>
            <FaqItem key={index}>
              <b>{item.title}</b>
              <p>{item.description}</p>
            </FaqItem>
          )}
        </FaqMain>
      </LayoutContainer>
    </ComponentWraper>
  )
}