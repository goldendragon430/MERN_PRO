import React from 'react'
import { AdminOriginalCard } from '../../../shared/AdminOriginalCard'
import { Tabs } from '../../../shared'
import { NoResult } from '../../../shared/NoResult'
import {
  CardInnerWrapper,
  CardBody
} from './styles'

export const Transaction = () => {
  const tabList = [
    { key: 'incoming', name: 'Incoming' },
    { key: 'outgoing', name: 'Outgoing' },
    { key: 'conversions', name: 'Conversions' },
  ]

  return (
    <AdminOriginalCard>
      <CardInnerWrapper>
        <Tabs
          tabList={tabList}
          selectedTab='incoming'
        />
        <CardBody>
          <NoResult
            content='No transactions found'
          />
        </CardBody>
      </CardInnerWrapper>
    </AdminOriginalCard>
  )
}
