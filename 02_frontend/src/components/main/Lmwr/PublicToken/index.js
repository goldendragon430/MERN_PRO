import React from 'react'
import { LayoutContainer } from '../../../shared'
import { Button } from '../../../../styles'
import {
  ComponentWraper,
  Container,
  ItemContainer,
  ItemTitle,
  ItemValue
} from './styles'

export const PublicToken = () => {
  const data = [
    {
      title: "LimeWire Token",
      value: "$BRT"
    },
    {
      title: "Supply",
      value: "1,000,000,000 LMWR"
    },
    {
      title: "Strategic Sale",
      value: "USD $10.4 million raised"
    },
    {
      title: "Public Sale",
      value: "Q4 2022"
    }
  ]

  return (
    <ComponentWraper>
      <LayoutContainer>
        <Container>
          {data.map((item, index) => 
            <ItemContainer key={index}>
              <ItemTitle>{item.title}:</ItemTitle>
              <ItemValue>{item.value}</ItemValue>
            </ItemContainer>
          )}
          <ItemContainer>
            <Button color='primary'>LMWR Public Token Sale</Button>
          </ItemContainer>
        </Container>
      </LayoutContainer>
    </ComponentWraper>
  )
}
