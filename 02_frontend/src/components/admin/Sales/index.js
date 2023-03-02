import React from 'react'
import { AdminOriginalCard } from '../../shared/AdminOriginalCard'
import { DashboardHeading } from '../../shared/DashboardHeading'
import { NoResult } from '../../shared/NoResult'
import { Tabs } from '../../shared'

import {
  Container,
  CardWrapper,
  CardInnerWrapper,
  CardBody
} from './styles'

export const Sales = () => {
  const tabList = [
    { key: 'sales', name: 'Sales' },
    { key: 'purchases', name: 'Purchases' }
  ]

  return (
    <Container>
      <DashboardHeading title='Sales & Purchases' />
      <CardWrapper>
        <AdminOriginalCard>
          <CardInnerWrapper>
            <Tabs
              tabList={tabList}
              selectedTab='sales'
            />
            <CardBody>
              <NoResult
                content='No results'
              />
            </CardBody>
          </CardInnerWrapper>
        </AdminOriginalCard>
      </CardWrapper>
    </Container>
  )
}
