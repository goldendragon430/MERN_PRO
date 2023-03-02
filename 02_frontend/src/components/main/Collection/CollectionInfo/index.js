import React, { useState } from 'react'
import { LayoutContainer, Modal } from '../../../shared'
import MdcCheckDecagram from '@meronex/icons/mdc/MdcCheckDecagram'
import AiOutlineStar from '@meronex/icons/ai/AiOutlineStar'
import BiShareAlt from '@meronex/icons/bi/BiShareAlt'
import { Button, Select } from '../../../../styles'
import { useWindowSize } from '../../../../hooks/useWindowSize'
import {
  Container,
  ImgWrapper,
  InfoWrapper,
  Heading,
  HeadingTitleWrapper,
  ActionWrapper,
  ActionItem,
  Description,
  Editions,
  HasLoyalty,
  Option,
  Royalty,
  BlockChainBar,
  EthereumWrapper
} from './styles'
import { ShareItem } from '../ShareItem'

export const CollectionInfo = () => {
  const { width } = useWindowSize()
  const [currency, setCurrency] = useState('algo')
  const [isMore, setIsMore] = useState(true)
  const [openShare, setOpenShare] = useState(false)

  const creatorOptions = [
    { value: 'usd', content: <Option><span className='name'>USD</span></Option> },
    { value: 'usdc', content: <Option><span className='name'>USDC</span></Option> },
    { value: 'algo', content: <Option><span className='name'>ALGO</span></Option> },
    { value: 'btc', content: <Option><span className='name'>BTC</span></Option> },
    { value: 'eth', content: <Option><span className='name'>ETH</span></Option> },
    { value: 'eur', content: <Option><span className='name'>EUR</span></Option> },
    { value: 'gbp', content: <Option><span className='name'>GBP</span></Option> },
  ]

  return (
    <>
      <LayoutContainer>
        {width < 576 && (
          <ActionWrapper>
            <ActionItem>
              <AiOutlineStar />
              <span>141 stars</span>
            </ActionItem>
            <ActionItem onClick={() => setOpenShare(true)}>
              <BiShareAlt />
              <span>Share</span>
            </ActionItem>
          </ActionWrapper>
        )}
        <Container>
          <ImgWrapper>
            <img src='https://d2tg7hjmtin7hh.cloudfront.net/thumbs/collection_cover/6315/6315d423-5532-47a0-8953-7c336abe503f_large.png' alt='' />
          </ImgWrapper>
          <InfoWrapper>
            <Heading>
              <HeadingTitleWrapper>
                <div>
                  <span>BlockReward</span>
                  <MdcCheckDecagram />
                </div>
                <h2>BlockReward Originals</h2>
              </HeadingTitleWrapper>
              {width > 576 && (
                <ActionWrapper>
                  <ActionItem>
                    <AiOutlineStar />
                    <span>141 stars</span>
                  </ActionItem>
                  <ActionItem onClick={() => setOpenShare(true)}>
                    <BiShareAlt />
                    <span>Share</span>
                  </ActionItem>
                </ActionWrapper>
              )}
            </Heading>
            <Description>
              {isMore ? (
                <span>LimeWire Originals is a limited collection of 10,000 Original NFTs minted on the Ethereum blockchain, featuring 10,000 unique and rare avatars with a variety of traits and attributes. Owning a LimeWire Original represents the highest level of membership the LimeWire community has</span>
              ) : (
                <span>LimeWire Originals is a limited collection of 10,000 Original NFTs minted on the Ethereum blockchain, featuring 10,000 unique and rare avatars with a variety of traits and attributes. Owning a LimeWire Original represents the highest level of membership the LimeWire community has to offer. If you own one, you are not only owning a digital avatar, you are gaining access to a series of perks and experiences exclusive to LimeWire Original holders. This includes regular invite-only, physical LimeWire events across the world featuring performances of artists on LimeWire, early access to high-profile NFT collections dropping on the marketplace, access to limited merch collections, as well as LMWR token airdrops and rewards.</span>
              )}
              <button onClick={() => setIsMore(prev => !prev)}>{!isMore ? 'Read Less' : '... Read More'}</button>
            </Description>
            <Editions>
              <span className="limited_to">1200 Items (77% sold)</span>
              <span className="market">Primary &amp; Secondary Market</span>
            </Editions>
            <HasLoyalty>
              <label>From</label>
              <div>
                <span>931.03 {currency}</span>
                <Select
                  notReload
                  placeholder='Select creator'
                  options={creatorOptions}
                  defaultValue={currency}
                  onChange={val => setCurrency(val)}
                />
              </div>
            </HasLoyalty>
            <Royalty>Creator Royalty on Secondary Market: 2.50%</Royalty>
            <Button color='primary'>Browse Items</Button>
          </InfoWrapper>
        </Container>
        <BlockChainBar>
          <div className='block'>Blockchain</div>
          <div className='eth'>
            <EthereumWrapper>
              <img src='https://limewire.com/icon-eth.beee3675.svg' alt='' />
              <span>Ethereum</span>
            </EthereumWrapper>
          </div>
        </BlockChainBar>
      </LayoutContainer>
      <Modal
        width='420px'
        open={openShare}
        onClose={() => setOpenShare(false)}
      >
        <ShareItem onClose={() => setOpenShare(false)} />
      </Modal>
    </>
  )
}
