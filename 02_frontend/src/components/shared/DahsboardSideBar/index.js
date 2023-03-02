import React from 'react'
import { Accordion } from '../Accordion'
import { useNavigate } from 'react-router-dom'
import VscLibrary from '@meronex/icons/vsc/VscLibrary'
import BiWallet from '@meronex/icons/bi/BiWallet'
import BsCreditCard from '@meronex/icons/bs/BsCreditCard'
import BsLightning from '@meronex/icons/bs/BsLightning'
import AiOutlineShoppingCart from '@meronex/icons/ai/AiOutlineShoppingCart'
import BsPlusSquare from '@meronex/icons/bs/BsPlusSquare'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import MdClose from '@meronex/icons/ios/MdClose'
import FdTicket from '@meronex/icons/fd/FdTicket'
import { useWindowSize } from '../../../hooks/useWindowSize'
import {
  Container,
  MenuListWrapper,
  MenuItem,
  NewCreatorItem
} from './styles'
import { IconButton } from '../../../styles'
import { useApi } from '../../../contexts/ApiContext'

export const DahsboardSideBar = () => {
  const navigate = useNavigate()
  const { width } = useWindowSize()
  const [{getRole}] = useApi()
  const role = getRole()
   
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  var title = 'Receive BRT'
  if(role < 2) title = 'Mint'
  else if(role == 2) title = 'Send BRT'
  const menuList = [
    // { path: '/u/library', title: 'Your Membership', icon: <VscLibrary /> },
    { path: '/u/wallets', title: 'Account Info', icon: <BiWallet /> },
    // { path: '/u/payments', title: 'Credits Cards / Sales & Purchases ', icon: <BsCreditCard /> },
    { path: '/u/offers', title: 'Redeemed Discounts', icon: <BsLightning /> },
    { path: '/u/ticket', title: 'POAP', icon: <FdTicket /> },
    // { path: '/u/sales', title: 'Sales & Purchases', icon: <AiOutlineShoppingCart /> },
    { path: '/u/mint', title: title, icon: <AiOutlineShoppingCart /> },
  ]

  return (
    <Container isCollapse={isCollapse}>
      <Accordion
        title='Your Account'
        open
        className='account'
      >
        <MenuListWrapper>
          {menuList.map((menu, i) => (
            <MenuItem key={i} onClick={() => navigate(menu.path)}>
              {menu?.icon}
              <span>{menu.title}</span>
            </MenuItem>
          ))}
        </MenuListWrapper>
      </Accordion>
      {/* <NewCreatorItem onClick={() => navigate('/c/new')} className='creator'>
        <BsPlusSquare />
        <span>New Creator Page</span>
      </NewCreatorItem> */}
      {width < 1200 && (
        <IconButton onClick={() => handleMenuCollapse(true)}>
          <MdClose />
        </IconButton>
      )}
    </Container>
  )
}
