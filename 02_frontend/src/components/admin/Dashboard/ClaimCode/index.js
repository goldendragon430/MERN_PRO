import React,{useEffect,useState} from 'react'
import { Button, Input } from '../../../../styles'
import { useForm } from 'react-hook-form'
import {
  Container,
  Heading,
  Body,
  Form,
  FormGroup,
  ErrorMessage
} from './styles'
import { useApi } from '../../../../contexts/ApiContext'
import {toast} from 'react-toastify'

export const ClaimCode = (props) => {
  const {
    onClose
  } = props

  const { register, handleSubmit, formState: { errors }} = useForm()
  const [{getRole,doPost}] = useApi()
  const role = getRole()
  const [code,setCode] = useState('')
  const [isLoading,setIsLoading] = useState(false)

  const fetchData = async() =>{
    const response = await doPost('claim/new',{
      address : localStorage.getItem('address')
    })
    if(response.error || response.result == 'failed') {
      toast.error("Server Error")
      return;
    }
    setCode(response.data)
  }
  
  useEffect(()=>{
    if(role == 1)
        fetchData()
  },[])

  const onSubmit = async(values) => {
    if(role > 1) {
    setIsLoading(true)
      
          const response = await doPost('claim/confirm',{
          address : localStorage.getItem('address'),
          code : code
        })
        if(response.error || response.result == 'failed') {
          toast.error("Server Error")
        }
        else{
          toast.success("Successfully Claimed NFT.")
        }
    setIsLoading(false)
    }
    onClose && onClose()
  }

  return (
    <Container>
      <Heading>
        <span>Redeem Claim Code</span>
      </Heading>
      <Body>
        <p>To claim an NFT, please enter your claim code below and submit.</p>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <FormGroup>
                    <label>Claim Code</label>
                    <Input
                      placeholder='Enter claim code'
                      styleType='admin'
                      autoComplete='off'
                      {...register(
                        'claim_code',
                        {
                          required: {
                            value: true,
                            message: 'The field is required*'
                          },
                          minLength: {
                            value: 10,
                            message: `Your code must contain 10 digits/letters`
                          }
                        }
                      )}
                      value = {code}
                      onChange = {e=>setCode(e.target.value)}
                    />
                    {errors?.claim_code && <ErrorMessage>{errors?.claim_code?.message}</ErrorMessage>}
                  </FormGroup>
                  {role != 1 && <Button color='primary' type='submit' isLoading = {isLoading}>
                                      Submit
                                    </Button>}
                </Form>
      </Body>
    </Container>
  )
}
