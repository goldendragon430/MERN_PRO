import React from 'react'
import EnChevronRight from '@meronex/icons/en/EnChevronRight'
import { Button, Select } from '../../../../styles'
import { useWindowSize } from '../../../../hooks/useWindowSize'
import { useNavigate } from 'react-router-dom';
import  shapeImg  from '../../../../assets/images/shapes.png'
import {
  Container,
  ContentHeader,
  LeftSide,
  CreatorListWrapper,
  CreatorItem,
  RigthSide,
  Option,
  FeaturedContent,
  MaskBg
} from './styles'
import BRHeroBanner from '../../../../assets/images/BRbanner_overview1 Kopie1.jpg';

export const Featured = () => {
  const { width } = useWindowSize()
  const navigate = useNavigate()
  const creatorList = [
    { key: 'aon7', name: 'ÆON7'},
    { key: 'perfxn', name: 'PERFXN'},
    { key: 'joseph', name: 'Joseph “Mr. Muzic” Melara'},
  ]

  const creatorOptions = [
    { value: 'usd', content: <Option><span className='name'>USD</span></Option> },
    { value: 'usdc', content: <Option><span className='name'>USDC</span></Option> },
    { value: 'algo', content: <Option><span className='name'>ALGO</span></Option> },
    { value: 'btc', content: <Option><span className='name'>BTC</span></Option> },
    { value: 'eth', content: <Option><span className='name'>ETH</span></Option> },
    { value: 'eur', content: <Option><span className='name'>EUR</span></Option> },
    { value: 'gbp', content: <Option><span className='name'>GBP</span></Option> },
  ]
  const styles = {position:'absolute',width:'97%'}
  return (
      <Container>
        <img src = {shapeImg} style = {styles} />
        <ContentHeader>
          <LeftSide>
            <h2>Featured membership</h2>
            {/* {width > 769 && (
              <CreatorListWrapper>
                {width > 994 && <span>Trending Creators:</span>}
                {creatorList.map((creator, i) => (
                  <CreatorItem key={i}>
                    <span>{creator.name}</span>
                    <EnChevronRight />
                  </CreatorItem>
                ))}
              </CreatorListWrapper>
            )} */}
          </LeftSide>
          <RigthSide>
          <Select
            notReload
            placeholder='Select creator'
            options={creatorOptions}
            defaultValue='usd'
            onChange={val => console.log(val)}
          />
          </RigthSide>
        </ContentHeader>
        <FeaturedContent>
          <h3>CBD Plus USA</h3>
          <p>Owning a CBD Plus USA membership allows members to earn tokens on purchases and access exclusive offers! </p>
          <Button color='gray' onClick={() => navigate('/creator/Redeem_Membership',{state: {address : 'RTIV7FFPKRVT5WD5CVQ7UUW3NQATL7PYZXUYZMQED7AZD6WFX52HEOFFPM'}})}>Browse Membership</Button>
          <MaskBg />
          <img src={BRHeroBanner} alt='' />
        </FeaturedContent>
      </Container>
  )
}
