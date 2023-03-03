import React from 'react'
import { LayoutContainer } from '../../../shared'
import EnVinyl from '@meronex/icons/en/EnVinyl'
import BisUser from '@meronex/icons/bi/BisUser'
import BsFillTagFill from '@meronex/icons/bs/BsFillTagFill'
import BsFillBarChartFill from '@meronex/icons/bs/BsFillBarChartFill'
import {
  Summary,
  DetailBox,
  DetailItem
} from './styles'

export const About = () => {
  const detailList = [
    { value: '10000', name: 'Items', icon: <EnVinyl /> },
    { value: '3094', name: 'Owners', icon:  <BisUser /> },
    { value: 'USDC $4.45', name: 'Floor Price', icon: <BsFillTagFill /> },
    { value: 'USDC $1,238.64', name: 'Volume Traded', icon: <BsFillBarChartFill /> },
  ]

  return (
    <LayoutContainer>
      {/* <Summary>
        <h2>About Gramatik</h2>
        <p>DeAndre Cortez Way, known professionally as Soulja Boy, is an American rapper and record producer. In September 2007, his debut single "Crank That" peaked at number 1 on the U.S. Billboard Hot 100.</p>
      </Summary> */}
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
