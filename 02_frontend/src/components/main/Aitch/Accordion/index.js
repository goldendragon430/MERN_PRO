import React, { useState } from 'react'
import AiOutlinePlus from '@meronex/icons/ai/AiOutlinePlus'
import BsCheckCircle from '@meronex/icons/bs/BsCheckCircle'

import {
  Container,
  ItemTitle,
  CollspanIcon,
  ItemDescription,
  ListContainer,
  ListItem
} from './styles'

export const Accordion = (props) => {
  const { item } = props
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Container onClick={handleOpen}>
      <CollspanIcon isOpen={isOpen}>
        <AiOutlinePlus size="25" />
      </CollspanIcon>
      <ItemTitle isOpen={isOpen}>
        {item.title}
      </ItemTitle>
      <ItemDescription isOpen={isOpen}>
        {item.description}
        {item.customeContent &&
          <ListContainer>
            {item.list.map((t, i) =>
              <ListItem key={i}>
                <BsCheckCircle />
                <p>{t}</p>
              </ListItem>
            )}
          </ListContainer>
        }
      </ItemDescription>
    </Container>
  )
}