import React from 'react'
import { Ticket as TicketController } from '../../components/admin/ticket'

export const Ticket = (props) => {
  return (
    <>
      <TicketController {...props} />
    </>
  )
}
