import React, { useState, useRef, useEffect } from 'react'
import { useTheme as useOriginalTheme } from 'styled-components'
import { useTheme } from '../../../contexts/ThemeContext'
import { Button, IconButton, Input } from '../../../styles'
import HiOutlineSearch from '@meronex/icons/hi/HiOutlineSearch'
import FiChevronDown from '@meronex/icons/fi/FiChevronDown'
import EnChevronRight from '@meronex/icons/en/EnChevronRight'
import BsList from '@meronex/icons/bs/BsList'
import MdcClose from '@meronex/icons/mdc/MdcClose'
import { useNavigate } from 'react-router-dom'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { Accordion } from '../../shared'
import { useSession } from '../../../contexts/SessionContext'
import { usePopper } from 'react-popper'
import BsPower from '@meronex/icons/bs/BsPower'
import BiSun from '@meronex/icons/bi/BiSun'
import BiMoon from '@meronex/icons/bi/BiMoon'
import {createSearchParams} from 'react-router-dom'
import { toast } from 'react-toastify'

import {
  Container,
  InnerContainer,
  LeftWrapper,
  SearchWrapper,
  MenuItem,
  MenuListWrapper,
  MenuItemContent,
  RightWrapper,
  DropDownList,
  DropDownItem,
  OverLay,
  MobileMenuWrapper,
  MobileMenuItem,
  LogoWrapper,
  MobileLoginWrapper,
  CloseIcon,
  MobileDropDown,
  DashboardBtnWrapper,
  AccountWrapper,
  RoundLogoWrapper,
  DashboardMenuList,
  UserInfoWrapper,
  LogoutWrapper,
  MobileDashboardMenuWrapper,
  ThemeMode
} from './styles'
import { useApi } from '../../../contexts/ApiContext'

export const Header = (props) => {
  const { pathname } = props

  const themeOriginal = useOriginalTheme()
  const [theme, { toggleDarkMode }] = useTheme()
  const [{ auth, user }, { logout }] = useSession()
  const navigate = useNavigate()
  const { width } = useWindowSize()
  
  const [isMobileMenu, setIsMobileMenu] = useState(false)
  const [open, setOpen] = useState(false)
  const referenceElement = useRef()
  const popperElement = useRef()
  const [{getRole,doPost}] = useApi()
  const [isSearchState,setIsSearchState] = useState(false)
  const [searchvalue,setSearchValue] = useState('')
  const role = getRole()
  const email =  localStorage.getItem('email')
  const popper = usePopper(referenceElement.current, popperElement.current, {
    placement: 'bottom-end',
    modifiers: [
      { name: 'arrow' },
      {
        name: 'offset',
        options: {
          offset: [0, 12]
        }
      }
    ]
  })
  
  const { styles, attributes } = popper

  const handleClickOutside = (e) => {
    if (!open) return
    const outsidePopover = !popperElement.current?.contains(e.target)
    const outsidePopoverMenu = !referenceElement.current?.contains(e.target)
    if (outsidePopover && outsidePopoverMenu) {
      setOpen(false)
    }
  }
  const hadleClickMenu = (path) => {
    document.getElementById(path).scrollIntoView({ behavior: "smooth" })
  }
  useEffect(() => {
    window.addEventListener('mouseup', handleClickOutside)
    return () => {
      window.removeEventListener('mouseup', handleClickOutside)
    }
  }, [open])
  
  const popStyle = { ...styles.popper, visibility: open ? 'visible' : 'hidden', minWidth: '150px' }
  if (!open) {
    popStyle.transform = 'translate3d(0px, 0px, 0px)'
  }

 const getBusinessList = async ()=>{
  const response = await doPost('auth/get_business_list',{
   
  })
  if(response.error || response.result == 'failed'){
    toast.error("Server Error")
  }else{
   const data = response.result
   var result = []
   for (var i = 0 ;i < data.length ; i++) {
      result.push({path : '/browse',params : `?creator=${data[i].id}`,title : data[i].company})
   }
   setSearchBusinessList(result)
   setTemp(result)
  } 
 } 
 useEffect(()=>{
  getBusinessList()
 },[])

  const browseSubMenuList = role == 0 ? 
  [
    { path: '/browse', params: '', title: 'All Business'},
    { path: '/browse', params: '?sort=trending', title: 'Trending Business'},
    { path: '/browse', params: '?sort=recently_created', title: 'Categories'},
    { path: '/originals', params: '', title: 'BlockReward Collection'}
  ]:
  [
    { path: '/browse', params: '', title: 'All Business'},
    { path: '/browse', params: '?sort=trending', title: 'Trending Business'},
    { path: '/browse', params: '?sort=recently_created', title: 'Categories'},
    { path: '/ticket', params: '', title: 'Tickets'},
    { path: '/originals', params: '', title: 'BlockReward Collection'}
  ]

  const resourceSubMenuList = [
    { path: '/about', title: 'About BlockRewrad'},
    { path: '/help', title: 'Partner with Us'},
    { path: '/faq', title: 'FAQ'},
    { path: '/code', title: 'Got a claim code'},
    { path: '/press', title: 'Press'}
  ]

  const dashboardMenuList = [
    { path: '/u/account', title: 'Accoount'},
    { path: '/u/profile', title: 'Profile'},
    { path: '/help', title: 'Help Center'}
  ]
  
  const adminMenuList = [
    { path: '/manager/user', title : 'User Management'},
    { path: '/manager/page', title : 'Page Management'},
    { path: '/manager/discount', title : 'Redeem  Management'},
  ]
  const businessMenuList = [
    { path: '/business/user', title : 'Employee Management'},
    { path: '/manager/page', title : 'Page Management'},
    { path: '/business/discount', title : 'Discount Management'},
  ] 
 
  const [searchBusinessList,setSearchBusinessList] = useState([])
  const [temp,setTemp] = useState([])
  const handleClickMenu = (path, params) => {
    const query = params ?? ''
    setIsMobileMenu(false)
    navigate(`${path}${query}`, { state: { active: true } });
    // navigate(`${path}${query}`, { state: { address: '63811668ab3886a8f25de2cb' } });

  }

  const handleLogOut = () => {
    logout()
    navigate('/login') 
  }
  const handleSearchMenu = (path, params) => {
    const query = params ?? ''
    setIsMobileMenu(false)
    navigate(`${path}${query}`, { state: { active: true } });
    setIsSearchState(false)
    setSearchValue('')
    setTemp(searchBusinessList)
  }
  const onSearch = (str) =>{
          setSearchValue(str)
          var filtered_value =  searchBusinessList.filter(ele => ele.title.toLowerCase().indexOf(str) >= 0)
          setTemp(filtered_value) 
          setIsSearchState(true)
    
  }
  return (
    <>
      <Container noShadow={pathname.includes('/u/') || pathname.includes('/c/')}>
        <InnerContainer>
          <LeftWrapper>
            <img src={theme?.isLightMode ? themeOriginal.images.logoDark : themeOriginal.images.logo} alt='logo' onClick={() => navigate('/')} />
      
            {width > 994 && (
              <MenuListWrapper>
                 
                <MenuItem >
                  <MenuItemContent> 
                    <Input
                  placeholder='Search...'
                  onChange = {e=>onSearch(e.target.value)}
                  onFocus = {e=> setIsSearchState(true)}
                  value = {searchvalue}
                     />
                  </MenuItemContent>
                 {isSearchState && 
                  <DropDownList className='search-items'>
                     {temp.map((subMenu, i) => (
                       <DropDownItem key={i} onClick={() => handleSearchMenu(subMenu.path, subMenu.params)}>
                         <span>{subMenu.title}</span>
                       </DropDownItem>
                     ))}
                  </DropDownList>}
                </MenuItem>
                <MenuItem>
                  <MenuItemContent>
                    <span>Browse</span>
                    <FiChevronDown />
                  </MenuItemContent>
                  <DropDownList className='drop-down'>
                    {browseSubMenuList.map((subMenu, i) => (
                      <DropDownItem key={i} onClick={() => handleClickMenu(subMenu.path, subMenu.params)}>
                        <span>{subMenu.title}</span>
                        <EnChevronRight />
                      </DropDownItem>
                    ))}
                  </DropDownList>
                </MenuItem>
                { pathname != '/' && <MenuItem>
                  <MenuItemContent onClick={() => navigate('/lmwr')}>
                    <span>{role == 0?'About BRT':'About Block Reward Token' }</span>
                  </MenuItemContent>
                </MenuItem> }
                <MenuItem>
                  <MenuItemContent>
                    <span>Resources</span>
                    <FiChevronDown />
                  </MenuItemContent>
                  <DropDownList className='drop-down'>
                    {resourceSubMenuList.map((subMenu, i) => (
                      <DropDownItem key={i} onClick={() => navigate(subMenu.path)}>
                        <span>{subMenu.title}</span>
                        <EnChevronRight />
                      </DropDownItem>
                    ))}
                  </DropDownList>
                </MenuItem>
               {role == 0 &&<MenuItem>
                  <MenuItemContent>
                    <span>Administrator</span>
                    <FiChevronDown />
                  </MenuItemContent>
                  <DropDownList className='drop-down'>
                    {adminMenuList.map((subMenu, i) => (
                      <DropDownItem key={i} onClick={() => navigate(subMenu.path)}>
                        <span>{subMenu.title}</span>
                        <EnChevronRight />
                      </DropDownItem>
                    ))}
                  </DropDownList>
                </MenuItem>
               } 
                {role == 1 &&<MenuItem>
                  <MenuItemContent>
                    <span>Business</span>
                    <FiChevronDown />
                  </MenuItemContent>
                  <DropDownList className='drop-down'>
                    {businessMenuList.map((subMenu, i) => (
                      <DropDownItem key={i} onClick={() => navigate(subMenu.path)}>
                        <span>{subMenu.title}</span>
                        <EnChevronRight />
                      </DropDownItem>
                    ))}
                  </DropDownList>
                </MenuItem>
               }
              {pathname =='/' && <MenuItem onClick={() => hadleClickMenu('overview')}>
                  <MenuItemContent>
                    <span>OverView</span>
                  </MenuItemContent>
                </MenuItem>}
              { pathname == '/' &&  
                <MenuItem onClick={() => hadleClickMenu('works')}>
                  <MenuItemContent >
                    <span>How it works</span>
                  </MenuItemContent>
                </MenuItem>
              }
              </MenuListWrapper>
            )}
          </LeftWrapper>
          <RightWrapper>
            <ThemeMode onClick={() => toggleDarkMode()}>
              {theme?.isLightMode ? <BiSun /> : <BiMoon />}
            </ThemeMode>
            {width > 769 && (
              <>
                {auth ? (
                  <DashboardBtnWrapper>
                    <Button color='primary' naked onClick={() => navigate('/u/dashboard', { state: { active: true } })}>Dashboard</Button>
                    <AccountWrapper>
                      <RoundLogoWrapper
                        ref={referenceElement}
                        onClick={() => setOpen(!open)}
                      >
                        <img src={themeOriginal.images.roundLogo} alt='round-logo' />
                      </RoundLogoWrapper>
                      <DashboardMenuList ref={popperElement} style={popStyle} {...attributes.popper}>
                        <UserInfoWrapper>
                           <span>{user.passwordHash?user.passwordHash.split('.')[1]:user.split('.')[0]}</span>
                          <span className='email'>{email}</span>
                        </UserInfoWrapper>
                        {dashboardMenuList.map((menu, i) => (
                          <DropDownItem key={i} onClick={() => navigate(menu.path)}>
                            <span>{menu.title}</span>
                            <EnChevronRight />
                          </DropDownItem>
                        ))}
                        <LogoutWrapper onClick={() => handleLogOut()}>
                          <BsPower />
                          <span>Logout</span>
                        </LogoutWrapper>
                      </DashboardMenuList>
                    </AccountWrapper>
                  </DashboardBtnWrapper>
                ) : (
                  <>
                    <Button
                      color='primary'
                      naked
                      onClick={() => navigate('./login')}
                    >Log In</Button>
                    <Button
                      color='primary'
                      onClick={() => navigate('./signup')}
                    >Sign Up</Button>
                  </>
                )}
              </>
            )}
            {width < 994 && (
              <IconButton onClick={() => setIsMobileMenu(true)}>
                <BsList />
              </IconButton>
            )}
          </RightWrapper>
        </InnerContainer>
      </Container>
      <MobileMenuWrapper style={{ width: isMobileMenu && '75%' }}>
        <div>
          <CloseIcon onClick={() => setIsMobileMenu(false)}>
            <MdcClose />
          </CloseIcon>
          <LogoWrapper>
            <img src={theme?.isLightMode ? themeOriginal.images.logoDark : themeOriginal.images.logo} alt='logo' onClick={() => navigate('/')} />
          </LogoWrapper>
            {width < 576 && (
              <SearchWrapper>
                <Input
                  placeholder='Search...'
                />
                <HiOutlineSearch />
              </SearchWrapper>
            )}
            <Accordion
              title='Browse'
              headerStyle={{ fontSize: '16px', paddingRight: '0px' }}
            >
              <MobileDropDown>
                {browseSubMenuList.map((subMenu, i) => (
                  <div key={i} onClick={() => handleClickMenu(subMenu.path, subMenu.params)}>{subMenu?.title}</div>
                ))}
              </MobileDropDown>
            </Accordion>
            <MobileMenuItem onClick={() => handleClickMenu('/lmwr')}>
              <span>About Block Reward Token</span>
            </MobileMenuItem>
            <Accordion
              title='Resources'
              headerStyle={{ fontSize: '16px', paddingRight: '0px' }}
            >
              <MobileDropDown>
                {resourceSubMenuList.map((subMenu, i) => (
                  <div key={i} onClick={() => handleClickMenu(subMenu.path, subMenu.params)}>{subMenu?.title}</div>
                ))}
              </MobileDropDown>
            </Accordion>
            {
              role == 0 && 
              <Accordion
              title='Admin'
              headerStyle={{ fontSize: '16px', paddingRight: '0px' }}
            >
              <MobileDropDown>
                {adminMenuList.map((subMenu, i) => (
                  <div key={i} onClick={() => handleClickMenu(subMenu.path, subMenu.params)}>{subMenu?.title}</div>
                ))}
              </MobileDropDown>
            </Accordion>
            }  
            {
              role == 1 && 
              <Accordion
              title='Business'
              headerStyle={{ fontSize: '16px', paddingRight: '0px' }}
            >
              <MobileDropDown>
                {businessMenuList.map((subMenu, i) => (
                  <div key={i} onClick={() => handleClickMenu(subMenu.path, subMenu.params)}>{subMenu?.title}</div>
                ))}
              </MobileDropDown>
            </Accordion>
            }  
            {
              pathname == '/'&&
              <MobileMenuItem onClick={() => hadleClickMenu('overview')}>
                <span>OverView</span>
              </MobileMenuItem>
            }
            {
              pathname == '/'&&
              <MobileMenuItem onClick={() => hadleClickMenu('works')}>
                <span>How it works</span>
              </MobileMenuItem>
            }


            {width < 769 && (
              <>
                {auth ? (
                  <MobileDashboardMenuWrapper>
                    <h2 onClick={() => handleClickMenu('/u/dashboard')}>Dashboard</h2>
                    {dashboardMenuList.map((menu, i) => (
                      <MobileMenuItem key={i} onClick={() => handleClickMenu(menu.path)}>
                        <span>{menu.title}</span>
                      </MobileMenuItem>
                    ))}
                    <MobileMenuItem onClick={() => handleLogOut()}>
                        <span>Logout</span>
                      </MobileMenuItem>
                  </MobileDashboardMenuWrapper>
                ) : (
                  <MobileLoginWrapper>
                    <Button
                      color='primary'
                      naked
                      onClick = {()=>navigate('./login')}
                    >Log In</Button>
                    <Button
                      color='primary'
                      onClick = {()=>navigate('./signup')}
                    >Sign Up</Button>
                  </MobileLoginWrapper>
                )}
              </>
            )}
        </div>
      </MobileMenuWrapper>
      {isMobileMenu && (
        <OverLay onClick={() => setIsMobileMenu(false)} />
      )}
    </>
  )
}
