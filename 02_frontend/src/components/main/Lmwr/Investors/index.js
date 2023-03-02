import React from 'react'
import { LayoutContainer } from '../../../shared'
import {
  ComponentWraper,
  InvestorHeader,
  InvestorList,
  InvestImg
} from './styles'

export const Investors = () => {

  const investList = [
    {
      img: 'https://limewire.com/investor_arrington.6cf8e56e.svg',
      imgWidth: '115px',
      width:'200px'
    },
    {
      img: 'https://limewire.com/investor_kraken.4163660c.svg',
      imgWidth: '250px',
      width:'290px'
    },
    {
      img: 'https://limewire.com/investor_gsr.6d42f016.svg',
      imgWidth: '130px',
      width:'200px'
    },
    {
      img: 'https://limewire.com/investor_hivemind.124ed9da.svg',
      imgWidth: '150px',
      width:'200px'
    },
    {
      img: 'https://limewire.com/investor_cryptocom.07f340d6.svg',
      imgWidth: '200px',
      width:'240px'
    },
    {
      img: 'https://limewire.com/investor_cmcc.b95002e1.svg',
      imgWidth: '200px',
      width:'225px'
    },
    {
      img: 'https://limewire.com/investor_deadmau5.af843bbb.svg',
      imgWidth: '120px',
      width:'215px'
    },
    {
      img: 'https://limewire.com/investor_daojones.40921118.svg',
      imgWidth: '175px',
      width:'200px'
    }
  ]

  return (
    <ComponentWraper>
      <LayoutContainer>
        <InvestorHeader>
          <h2>LMWR Token Investors</h2>
        </InvestorHeader>
        <InvestorList>
          {investList.map((item, index) => 
            <InvestImg bgimage={item.img} imgWidth={item.imgWidth} width={item.width} key={index} />
          )}
        </InvestorList>
      </LayoutContainer>
    </ComponentWraper>
  )
}
