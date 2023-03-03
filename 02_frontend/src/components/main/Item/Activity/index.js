import React from 'react'
import { LayoutContainer } from '../../../shared'
import BsClockHistory from '@meronex/icons/bs/BsClockHistory'
import MdcCheckDecagram from '@meronex/icons/mdc/MdcCheckDecagram'
import {
  Container,
  Table,
  Heading,
  THead,
  TBody,
  UserInfo
} from './styles'

export const Activity = () => {
  const data = [
    { created_at: 'a month ago', event: 'Sale', price: 'USDC $15.00', from: 'Aith', to: '@n5r59plagp' },
    { created_at: 'a month ago', event: 'Sale', price: 'USDC $15.00', from: 'Aith', to: '@n5r59plagp' },
    { created_at: 'a month ago', event: 'Sale', price: 'USDC $15.00', from: 'Aith', to: '@n5r59plagp' }
  ]

  return (
    <LayoutContainer>
      <Container>
        <Heading>
          <BsClockHistory />
          <h4>Activity</h4>
        </Heading>
        <Table>
          <THead>
            <tr>
              <th>Date</th>
              <th>Event</th>
              <th>Price</th>
              <th>From</th>
              <th>To</th>
            </tr>
          </THead>
          {data.map((item, i) => (
            <TBody key={i}>
              <tr>
                <td>{item.created_at}</td>
                <td>{item.event}</td>
                <td>{item.price}</td>
                <td>
                  <UserInfo>
                    <span>{item.from}</span>
                    <MdcCheckDecagram />
                  </UserInfo>
                </td>
                <td>{item.to}</td>
              </tr>
            </TBody>
          ))}
        </Table>
      </Container>
    </LayoutContainer>
  )
}
