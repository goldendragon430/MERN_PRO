import React, { useState } from 'react'
import EnChevronDown from '@meronex/icons/en/EnChevronDown'
import {
  Container,
  AccordionHeader,
  AccordionContent
} from './styles'

export const Accordion = (props) => {
  const {
    title,
    open,
    children,
    headerStyle,
    className
  } = props

  const [isOpen, setIsOpen] = useState(open)

  return (
    <Container
      className={className ?? ''}
    >
      <AccordionHeader
        onClick={() => setIsOpen(prev => !prev)}
        open={isOpen}
        style={headerStyle ?? {}}
      >
        <span>{title}</span>
        <EnChevronDown />
      </AccordionHeader>
      {isOpen && (
        <AccordionContent>
          {children}
        </AccordionContent>
      )}
    </Container>
  )
}
