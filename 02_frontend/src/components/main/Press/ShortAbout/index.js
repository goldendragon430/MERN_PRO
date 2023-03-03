import React from 'react'

import {
  Container,
  SectionHeader
} from './styles'

export const ShortAbout = () => {
  return (
    <Container>
      <SectionHeader>
        <h2>Company Information</h2>
      </SectionHeader>
      <p>To contact the BlockReward PR team, please email <a title="Press Contact" href="mailto:press@limewire.com" rel="noreferrer">press@limewire.com</a>.</p>
      <br />
      <p>BlockReward relaunched in 2022 as a digital collectibles marketplace for music and the broader art and entertainment space. The new team, led by co-CEOs Paul and Julian Zehetmayr is opening up the NFT market to the mainstream by drastically improving user experience, offering credit card payments and handling gas fees as well as technical hurdles on behalf of its users, while also leveraging all the benefits of Web3.</p>
    </Container>
  )
}