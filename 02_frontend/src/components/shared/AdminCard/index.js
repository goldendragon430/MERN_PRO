import React from 'react'
import BisUser from '@meronex/icons/bi/BisUser'
import {
  Container,
  CardHeading,
  CardBody
} from './styles'

export const AdminCard = (props) => {
  const {
    title,
    headIcon,
    children
  } = props

  return (
    <Container>
      <CardHeading>
        {headIcon || <BisUser />}
        <span>{title}</span>
      </CardHeading>
      <CardBody>
        {children}
      </CardBody>
    </Container>
  )
}
