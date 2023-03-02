import React,{useEffect,useState} from 'react'
import { toast } from 'react-toastify'
import { useApi } from '../../../contexts/ApiContext'
import { Button } from '../../../styles'

export const SwitchingButton =  (props)=>{
    const {allowed ,id,role} = props
   
    const [{doPost}] = useApi()
    const changeState = async()=>{
        const response = await doPost('auth/update_role',{
            address : localStorage.getItem('address'),
            id      : id,
            role : !isAllow ? role :'3'
        })
        if(response.error || response.result == 'failed'){
            toast("Server Error",{type : 'error'})
        }
        else{
            // toast("Success",{type : 'success'})
            setIsAllowed(!isAllow)
        }
    }
    const [isAllow,setIsAllowed] = useState(allowed)
    return (
        <Button color  = {isAllow ? 'primary' : 'gray' } onClick = {changeState} style = {{width:90,padding:8}} > {isAllow ? 'Enabled' : 'Disabled' }</Button>
    )
}