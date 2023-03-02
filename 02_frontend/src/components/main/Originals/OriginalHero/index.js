import React from 'react'
import { Button } from '../../../../styles'
import MdcCheckDecagram from '@meronex/icons/mdc/MdcCheckDecagram'
import FiDownload from '@meronex/icons/fi/FiDownload'
import {
  Container,
  LeftWrapper,
  InnerContainer,
  ButtonGroup,
  RightWrapper,
  DetailWrapper,
  LeftSide,
  ArtistWrapper,
  TopContent,
  BottomContent,
  SocialWrapper,
  SocialItem
} from './styles'

import Logo from "../../../../assets/images/logo.png"

export const OriginalHero = () => {
  return (
    <Container>
      <InnerContainer>
        <LeftSide>
          <h1>Coming Soon</h1>
        </LeftSide>
        <RightWrapper>
          <img src={Logo} alt="logo" width="100%"  height="100%"/>
        </RightWrapper>
      </InnerContainer>
    </Container>
    // <Container bgimage='https://limewire.com/bubbles_bottom.6ee47764.svg'>
    //   <InnerContainer>
    //     <TopContent>
    //       <LeftWrapper>
    //         <h1>
    //           <span className="marker">BlockReward Originals</span> <span className="marker">NFT Collection</span>
    //         </h1>
    //         <h2>A limited collection of 10,000 Original NFTs — owning an Original means access to invite-only LimeWire events, LMWR token rewards, and early access to NFT drops.</h2>
    //         <ButtonGroup>
    //           <Button color='primary'>Buy Original</Button>
    //           <Button color='primary' naked>View Collection</Button>
    //         </ButtonGroup>
    //       </LeftWrapper>
    //       <RightWrapper>
    //         <img src='https://limewire.com/originals_banner.a8278353.jpg' alt='' />
    //         <DetailWrapper>
    //           <LeftSide>
    //             <p>BlockReward Originals</p>
    //             <ArtistWrapper>
    //               <img src='https://limewire.com/limewire_icon.a33049ae.svg' alt='' />
    //               <span>BlockReward</span>
    //               <MdcCheckDecagram />
    //             </ArtistWrapper>
    //           </LeftSide>
    //           <Button color='gray' naked withIcon>
    //             <FiDownload />
    //             DownLoad WhitePaper
    //           </Button>
    //         </DetailWrapper>
    //       </RightWrapper>
    //     </TopContent>
    //     <BottomContent>
    //       <p>Join our Discord <span className="hide_mobile">Community </span> or follow us on Twitter:</p>
    //       <SocialWrapper>
    //         <SocialItem href="https://discord.gg/limewire" target="_blank" className='discord' rel="noreferrer">
    //           <img src='https://limewire.com/img/colored_logo_discord.svg' alt='' />
    //           <span className="hide_mobile">BlockReward on </span>Discord
    //         </SocialItem>
    //         <SocialItem href="https://discord.gg/limewire" target="_blank" rel="noreferrer">
    //           <img src='https://limewire.com/img/colored_logo_twitter.svg' alt='' />
    //           <span className="hide_mobile">BlockReward on </span>Twitter
    //         </SocialItem>
    //       </SocialWrapper>
    //     </BottomContent>
    //   </InnerContainer>
    // </Container>
  )
}
