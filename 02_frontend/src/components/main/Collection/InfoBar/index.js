import React from 'react'
import EnVinyl from '@meronex/icons/en/EnVinyl'
import BisUser from '@meronex/icons/bi/BisUser'
import BsFillTagFill from '@meronex/icons/bs/BsFillTagFill'
import BsFillBarChartFill from '@meronex/icons/bs/BsFillBarChartFill'
import { LayoutContainer } from '../../../shared'
import {
  DetailBox,
  DetailItem
} from './styles'

export const InfoBar = () => {
  const detailList = [
    { value: '10000', name: 'Items', icon: <EnVinyl /> },
    { value: '3094', name: 'Owners', icon:  <BisUser /> },
    { value: 'USDC $4.45', name: 'Floor Price', icon: <BsFillTagFill /> },
    { value: 'USDC $1,238.64', name: 'Volume Traded', icon: <BsFillBarChartFill /> },
  ]

  return (
    <LayoutContainer>
      <DetailBox>
        {detailList.map((item, i) => (
          <DetailItem key={i}>
            <p>{item.value}</p>
            <div>
              {item.icon}
              <span>{item.name}</span>
            </div>
          </DetailItem>
        ))}
      </DetailBox>
    </LayoutContainer>
  )
}