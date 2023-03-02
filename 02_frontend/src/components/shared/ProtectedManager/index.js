import React from 'react'
import { useApi } from '../../../contexts/ApiContext'

export const ProctedManager = ({ children })=>{
    const[{getRole}] = useApi()
    const role = getRole()
    return (
        <>
           {role < 2  &&  children}
        </>
    )


}