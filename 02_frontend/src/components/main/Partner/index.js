import React from 'react'
import { Navigate } from 'react-router-dom'
import { Account } from '../../admin/Account';
import { Container } from './styles';
import { useSession } from '../../../contexts/SessionContext'

export const Partner = () => {
  const [{auth}] = useSession()
  
  if(!auth){
    return <Navigate to="/login" replace />
  }
  return (  
    <Container>
    <Account/>  
    </Container>
  );
}