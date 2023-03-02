import React, { useEffect, useState } from 'react'
import {
  Container,
  Tab
} from './styles'

export const Tabs = (props) => {
  const {
    tabList,
    selectedTab,
    handleChangeTab
  } = props

  const [activeTab, setActiveTab] = useState()

  const handleChangeActive = (value) => {
    setActiveTab(value)
    handleChangeTab && handleChangeTab(value)
  }

  useEffect(() => {
    setActiveTab(selectedTab)
  }, [selectedTab])

  return (
    <Container>
      {tabList.map((tab, i) => (
        <Tab
          key={i}
          active={tab.key === activeTab}
          onClick={() => handleChangeActive(tab.key)}
        >{tab.name}</Tab>
      ))}
    </Container>
  )
}
