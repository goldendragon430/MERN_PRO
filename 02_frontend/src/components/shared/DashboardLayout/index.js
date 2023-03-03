import React from 'react'
import { DahsboardSideBar } from '../DahsboardSideBar'
import { LayoutContainer } from '../LayoutContainer'
import {
  Container,
  Content
} from './styles'

export const DashboardLayout = (props) => {
  const { children } = props

  return (
    <LayoutContainer type = {1}>
      <Container>
        <DahsboardSideBar />
        <Content>
          {children}
        </Content>
      </Container>
    </LayoutContainer>
  )
}
