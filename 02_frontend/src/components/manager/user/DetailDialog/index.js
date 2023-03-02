import React,{useState,useEffect} from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useApi } from '../../../../contexts/ApiContext'
import { Input,Button } from '../../../../styles'

import {
    Container,
    Heading,
    Body,
    Form,
    FormGroup,
  } from './styles'

  export const DetailDialog = (props) => {
    const {onClose,id} = props
    const[{doPost}] = useApi()
    const[phone,setPhone] = useState('')
    const[brt,setBRT] = useState('')
    const[membership,setMembership] = useState('')
    const[role,setRole] = useState('')
    const[address,setAddress] = useState('')
    const[city,setCity] = useState('')
    const[postalcode,setPostalCode] = useState('')
    useEffect(()=>{
        async function fetchData() {
            const response = await doPost('auth/get_user_detail_info',{
                address : localStorage.getItem('address'),
                id:id
            })
            if(response.error || response.result =='failed'){
                toast("Server Error",{type:'error'})
            }
            else{
                const result = response.data    
                setPhone('phone : ' + result.phone)
                setBRT('BRT Amount : ' + result.brt)
                setMembership('Membership : ' + result.membership)
                setRole(result.role == '1' ? 'Role : Business' : 'Role : User')
                setAddress('Address : ' + result.address)
                setPostalCode('Postal Code : ' + result.postalcode)
                setCity('City : ' + result.city)
            }
        }
        fetchData()
    },[])    
    return (
        <Container>
            <Heading>
                 <span>Detail Information</span>
            </Heading>
            <Body>
            <Form>
                <FormGroup>
                    <Input
                    styleType='admin'
                    style = {{marginTop:20}}
                    autoComplete='off'
                    value = {phone}
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                    styleType='admin'
                    style = {{marginTop:20}}
                    autoComplete='off'
                    value = {brt}
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                    styleType='admin'
                    style = {{marginTop:20}}
                    autoComplete='off'
                    value = {membership}
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                    styleType='admin'
                    style = {{marginTop:20}}
                    autoComplete='off'
                    value = {role}
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                    styleType='admin'
                    style = {{marginTop:20}}
                    autoComplete='off'
                    value = {address}
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                    styleType='admin'
                    style = {{marginTop:20}}
                    autoComplete='off'
                    value = {postalcode}
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                    styleType='admin'
                    style = {{marginTop:20}}
                    autoComplete='off'
                    value = {city}
                    />
                </FormGroup>                                
                <Button color='primary' type='button' onClick = {onClose}>
                    O K
                </Button>
                
           </Form>
            </Body>
        </Container>
    )
}