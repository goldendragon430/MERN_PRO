import React from 'react'
import { LayoutContainer } from '../../../shared'
import BsFillLightningFill from '@meronex/icons/bs/BsFillLightningFill'

import {
  ComponentWraper,
  Container,
  LeftWraper,
  UtilityItem,
  ItemTitle,
  RightWraper,
  RightHead,
  RightMain,
  RightFooter,
  UtilityLogo
} from './styles'

export const TokenUtility = () => {

  const data = [
    {
      title: 'LMWR Rewards',
      description: 'Depending on the amount of LMWR you hold in your BlockReward account, you will be able to claim additional token rewards on a regular basis.'
    },
    {
      title: 'Reduced Fees',
      description: 'Holders of the LMWR token are exposed to significantly reduced fees when buying, selling or trading NFT collectibles on the BlockReward marketplace.'
    },
    {
      title: 'Community Benefits',
      description: 'Holders enjoy early access to NFT drops on the marketplace, exclusive announcements ahead of time, access to BlockReward merchandise, and much more.'
    },
    {
      title: 'Voting Mechanisms',
      description: 'Over time, BlockReward will be introducing mechanisms for the community to vote on platform functionalities, partnerships, and artists featured on the marketplace.'
    },
  ]

  return (
    <ComponentWraper>
      <LayoutContainer>
        <Container>
          <LeftWraper>
            {data.map((item, index) =>
              <UtilityItem key={index}>
                <ItemTitle>
                  <BsFillLightningFill />
                  <span>{item.title}</span>
                </ItemTitle>
                <p>{item.description}</p>
              </UtilityItem>
            )}
          </LeftWraper>
          <RightWraper href="https://learn.bybit.com/nft/what-is-limewire-lmwr/" target="_blank">
            <RightHead>
              <UtilityLogo>BYBIT</UtilityLogo>
              <span>Read Aticle</span>
            </RightHead>
            <RightMain>
              "Hyped for the upcoming LMWR token launch? Block reward currently has a total supply of 1 billion tokens and raised $10.4 million in a private sale of its native token, $BRT, in a round led by Kraken Ventures. Arrington XRP Capital and GSR Ventures.
              <br /><br />
              The public sale of the tokens will come up in the fourth quarter of 2022. Holders of the LMWR token will enjoy reduced trading fees, access to exclusives, voting mechanisms, and a token reward program."
            </RightMain>
            <RightFooter>
              <UtilityLogo>BYBIT</UtilityLogo>
              <span>Apr 28, 2022</span>
            </RightFooter>
          </RightWraper>
        </Container>
      </LayoutContainer>
    </ComponentWraper>
  )
}
