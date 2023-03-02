import React from 'react'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { Button } from '../../../styles'
import BsBoxArrowInRight from '@meronex/icons/bs/BsBoxArrowInRight'
import BsBoxArrowInLeft from '@meronex/icons/bs/BsBoxArrowInLeft'
import {
  Container,
  ToolBar,
  Heading,
  ButtonWrapper,
  ExtraContent
} from './styles'

export const DashboardHeading = (props) => {
  const {
    title,
    children,
    responsive
  } = props

  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const { width } = useWindowSize()

  return (
    <Container>
      {width < 769 && responsive && (
        <ButtonWrapper>
          <Button color='primary' naked onClick={() => handleMenuCollapse(!isCollapse)}>
            {isCollapse ? <BsBoxArrowInLeft /> : <BsBoxArrowInRight />}
            <span>Menu</span>
          </Button>
        </ButtonWrapper>
      )}
      <ToolBar>
        <Heading>

          <h2>{title}</h2>
        </Heading>
        <ExtraContent>
          {children}
        </ExtraContent>
      </ToolBar>
    </Container>
  )
}