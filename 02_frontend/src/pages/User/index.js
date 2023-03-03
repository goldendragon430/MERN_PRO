import React from 'react'
import { User as UserController } from '../../components/manager/user'

export const User = (props) => {
  return (
    <>
      <UserController {...props} />
    </>
  )
}
