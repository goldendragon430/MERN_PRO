import React  from 'react'
import { useApi } from '../../../contexts/ApiContext'
import { AdminTicket } from './admin' 
import { TicketWallet } from './user'
import { EmployeerTicket } from './employeer'
import { TicketHistory } from './TicketHistory'
export const Ticket  = ()=>{

const [{getRole}] = useApi()   
const role = getRole()
    return (<>
        { role == 0 && <AdminTicket/>}
        { role == 3 && <TicketWallet/>}
        { role == 1 && <TicketHistory responsive = {true}/>}
        { role == 2 && <EmployeerTicket /> } 
        </>
    )
}