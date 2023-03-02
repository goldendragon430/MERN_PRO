import React from 'react'
import MdcCheckDecagram from '@meronex/icons/mdc/MdcCheckDecagram'
import BisCopy from '@meronex/icons/bi/BisCopy'
import BsMusicNoteBeamed from '@meronex/icons/bs/BsMusicNoteBeamed'
import GoDeviceCameraVideo from '@meronex/icons/go/GoDeviceCameraVideo'
import BsFillXDiamondFill from '@meronex/icons/bs/BsFillXDiamondFill'
import BsStar from '@meronex/icons/bs/BsStar'
import { useNavigate } from 'react-router-dom'
import { UpgradeModal } from './UpgradeModal'
import {
  Container,
  ImageWrapper,
  ArtistWrapper,
  TitleWrapper,
  EditionWrapper,
  CommercialsWrapper,
  MediaTypeWrapper,
  Algorand,
  ReleaseWrapper,
  DateWrapper,
  StarWrapper
} from './styles'
import { AlgorandIcon } from '../SvgIcons'
import { useState } from 'react'

export const CreatorCard = (props) => {
  const {
    item,
    type,
    isCreator,
    isItem,
    upgradable,
    onUpgrade,
    isBlockreward 
  } = props
  if(item.data)
    item.data['isBlockreward'] = isBlockreward
  const navigate = useNavigate()
  const [open,setOpen] = useState(false)

  const handleClickCard = () => {
    if(upgradable == true) {
      if(open == false)   
            setOpen(true)
    }
    else{
      
      // navigate(`/item/${item.data.type.toLowerCase()}`,{state:item.data})
      if(item.data.type)
          navigate(`/item/${item.data.type.toLowerCase()}`,{state:item.data})
      else if(item.data.name)
          navigate(`/ticket_import`,{state:item.data})
      // else navigate(`/item/${item.data.type.toLowerCase()}`,{state:item.data})  
    }
  }

  return (
    <Container onClick={() => handleClickCard()}>
      <ImageWrapper>
        <img src={item.photo} alt='' />
        <MediaTypeWrapper className='hover-view'>
          {isItem ? (
            <>
              <BsFillXDiamondFill />
              <span>Collectibles</span>
            </>
          ) : (
            <>
              {/* {item?.media_type === 'music' ? <BsMusicNoteBeamed /> : <GoDeviceCameraVideo />} */}
              {/* <span>{item?.media_type}</span> */}
            </>
          )}
        </MediaTypeWrapper>
        {isItem && (
          <StarWrapper className='hover-view'>
            {/* <BsStar /> */}
            <span>0</span>
          </StarWrapper>
        )}
        <Algorand className='hover-view'>
          <div>
            {/* <AlgorandIcon /> */}
            {/* <span>Algorand</span> */}
          </div>
        </Algorand>
      </ImageWrapper>
      {/* <ArtistWrapper>
        <span>{item?.artist}</span>
        <MdcCheckDecagram />
      </ArtistWrapper> */}
      {/* <TitleWrapper>{item?.title}</TitleWrapper>
      <EditionWrapper>
        <BisCopy />
        <span>{item?.edition}</span>
      </EditionWrapper> */}
      <CommercialsWrapper>
        {/* <ReleaseWrapper>
          <span className='title'>Release</span>
          <span>{item.release_type}</span>
        </ReleaseWrapper> */}
        {type === 1 && (
          <DateWrapper>
            <span className='title'>Last sale</span>
            <span>USDC ${item.price}</span>
          </DateWrapper>
        )}
      </CommercialsWrapper>
      <UpgradeModal open = {open} onUpgrade = {onUpgrade} onClose = {()=>setOpen(false)}/>
    </Container>
  )
}
