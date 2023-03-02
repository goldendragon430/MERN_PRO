import React from 'react'
import { Details } from './Details'
import { OriginalBar } from './OriginalBar'
import { Cards } from './Cards'
import { UserCards } from './UserCards'
import {
  Container,
} from './styles'
import { useApi } from '../../../contexts/ApiContext';
export const Dashboard = () => {
  const [{getRole}] = useApi();
  const role = getRole();
  return (
    <Container>
      <Details />

       <OriginalBar />
      
      {role == 3 && <UserCards />}
      {role < 3 && <Cards />}
    </Container>
  )
}
