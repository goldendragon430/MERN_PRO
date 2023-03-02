import React from 'react'
import { CollectionBrowse } from './CollectionBrowse'
import { CollectionHero } from './CollectionHero'
import { CollectionInfo } from './CollectionInfo'
import { InfoBar } from './InfoBar'
import { Container } from './styles'
import Back_image from '../../../assets/images/collectionback.jpg'
import { useNavigate } from 'react-router-dom'
export const Collection = () => {
  const nagative = useNavigate()
  const styles = {maxWidth:500,marginTop:20}
  return (
    <>
      <CollectionHero />
      {/* <CollectionInfo /> */}
      
      <Container>
        <div style={{display:'block'}}>
        <h1>How does it work</h1>
        <div style = {styles}>
Businesses have a dedicated page where their members can view and redeem discounts and other promotions. Once you have selected the page you will be allowed to see what offers apply to your membership. The Block Reward Membership unlocks special discounts offered by all businesses in our ecosystem, but full rewards and perks are reserved for full members. Once you are in the businesses dedicated discount page you will be able to select the discount you want to redeem. After selecting the discount you want to redeem you will be asked to deposit BRT and swipe to complete the discount redemption.</div>
        </div>
        <img src = {Back_image} style = {{width:500}}/>
      </Container>
      {/* <InfoBar /> */}
      <CollectionBrowse />
    </>
  )
}
