import React from 'react'
import { LmwrHero } from './LmwrHero'
// import { PublicToken } from './PublicToken'
// import { TokenForm } from './TokenForm'
// import { Investors } from './Investors'
import { TokenUtility } from './TokenUtility'
import { CommunityBar } from './CommunityBar'
import { Faq } from './Faq'

export const Lmwr = () => {
  return (
    <>
      <LmwrHero />
      {/* <PublicToken /> */}
      {/* <TokenForm /> */}
      {/* <Investors /> */}
      {/* <TokenUtility /> */}
      <CommunityBar />
      <Faq />
    </>
  )
}
