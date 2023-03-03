import React from 'react'
import AiFillFolderOpen from '@meronex/icons/ai/AiFillFolderOpen'
import {
  Container
} from './styles'

export const NoResult = (props) => {
  const { content,padding } = props

  return (
    <Container style = {{paddingBottom : padding}}>
      <AiFillFolderOpen />
      <span>{content}</span>
    </Container>
  )
}
