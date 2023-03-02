import React from 'react'
import { Browse as BrowseController } from '../../components/main/Browse'
import { useSession } from '../../contexts/SessionContext'
import { Navigate } from 'react-router-dom'
export const Browse = (props) => {
  const [{auth}] = useSession()
  
  if(!auth){
    return <Navigate to="/login" replace />
  }
  return (
    <>
      <BrowseController {...props} />
    </>
  )
}
