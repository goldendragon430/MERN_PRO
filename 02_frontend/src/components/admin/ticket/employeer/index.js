import React ,{useState,useEffect} from 'react'
 
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useApi } from '../../../../contexts/ApiContext'
import { Input,Button } from '../../../../styles'
import { TicketHistory } from '../TicketHistory'
import {
  Container,
  Heading,
  Body,
  Form,
  FormGroup,
  ErrorMessage 
} from './styles'


export const EmployeerTicket = ()=>{
    const { register, handleSubmit, formState: { errors }} = useForm()
    const [isLoading,setIsLoading] = useState(false)
    const [{doPost}] = useApi()
    const onSubmit = async (values)=>{
      setIsLoading(true)
       const response = await doPost('ticket/discount',{
        user_address : values.address,
        type : values.type,
        address : localStorage.getItem('address')
      })
      if(response.error || response.result == 'failed'){
        toast.error("Information is invalid")
      }
      else{
        toast.success(response.msg,{
          onClose : ()=>{
            window.location.reload(false)
          },
          autoClose : 3000
        })
      }
      setIsLoading(false)
    }
    return (
        <Container>
     <TicketHistory responsive = {true}/>
    <Heading>
      <span>Mint&nbsp; Ticket</span>
    </Heading>
    <Body>
      <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Input
                placeholder='Enter the User Address'
                styleType='admin'
                style = {{marginTop:20}}
                autoComplete='off'
                {...register(
                  'address',
                  {
                    required: {
                      value: true,
                      message: 'The field is required*'
                    }
                  }
                )}

              />
              {errors?.name && <ErrorMessage>{errors?.name?.message}</ErrorMessage>}
              <Input
                placeholder='Enter the Ticket Type'
                styleType='admin'
                style = {{marginTop:20}}
                autoComplete='off'
                {...register(
                  'type',
                  {
                    required: {
                      value: true,
                      message: 'The field is required*'
                    }
                  }
                )}
                      
              />
              {errors?.name && <ErrorMessage>{errors?.name?.message}</ErrorMessage>}

              </FormGroup>
            <div style = {{display:'flex',marginTop:20}}>
            <Button color='primary' type='submit' isLoading={isLoading}>
              O K
            </Button>
            
            </div>
      </Form>
    </Body>
     
        </Container>
    )
}