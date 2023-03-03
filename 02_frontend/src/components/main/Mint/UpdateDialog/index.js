import React,{useState,useEffect} from 'react'
import { useForm } from 'react-hook-form'
import { Input,Button } from '../../../../styles'
 
import {
  Container,
  Heading,
  Body,
  Form,
  FormGroup,
  ErrorMessage,
  FormLabel 
} from './styles'
import { toast } from 'react-toastify' 
import { useApi } from '../../../../contexts/ApiContext'
 
export const UpdateDialog = (props) => {
  const { onClose,item} = props
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit, formState: { errors }} = useForm()
  const [name,setName] = useState(item.name)
  const [price,setPrice] = useState(0)
  const [algo,setAlgo] = useState(0)
  const [usdc,setUSDC] = useState(0)
  const [{ doPost }] = useApi()
  const onSubmit = async (values) => {
    try{
      setIsLoading(true)

      const response =  await doPost('ticket/update_ticket', {
        address: localStorage.getItem('address'),
        name   : name,
        price : price,
        algo : algo,
        usdc : usdc
      })
      if(response.result == "failed" || response.error){
        toast("Control Failed. Please Confirm Network State" ,{type:"error"})
      }
      else
      toast("Success" ,{type:"success"})
      console.log(response)
      setIsLoading(false)
      onClose && onClose()
    
    }
    catch(error){
        console.log(error)
        toast('Control Failed. Please Confirm Network State', { type: 'error' })
        setIsLoading(false)
      }
  }
const getPrice = async()=>{
  const response = await doPost('ticket/get_ticket',{
    address : localStorage.getItem('address'),
    name : item.name
  })
  if(response.error || response.result == 'failed'){
    toast.error("Server Error")
  }
  else{
    setPrice(response.data.price)
    setAlgo(response.data.algo)
    setUSDC(response.data.usdc)

  }
}
useEffect(()=>{
getPrice()
},[]) 
return(
    <Container>
    <Heading>
      <span>Update Ticket NFT</span>
    </Heading>
    <Body>
    <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <FormLabel>Ticket Name</FormLabel>
            <Input
              placeholder='Enter the Ticket Price'
              styleType='admin'
              style = {{marginTop:20}}
              autoComplete='off'
              {...register(
                'name',
                {
                  required: {
                    value: true,
                    message: 'The field is required*'
                  }
                }
              )}
              value = {name}
              style = {{marginTop : 0}}
            />
           <FormLabel>Amount of Reward</FormLabel>
           <Input
              placeholder='Enter the Ticket Price'
              styleType='admin'
              style = {{marginTop:20}}
              autoComplete='off'
              {...register(
                'price',
                {
                  required: {
                    value: true,
                    message: 'The field is required*'
                  }
                }
              )}
              value = {price}
              onChange = {e=>setPrice(e.target.value)}
              style = {{marginTop : 0}}
            />
            {errors?.name && <ErrorMessage>{errors?.name?.message}</ErrorMessage>}
            <FormLabel>Algo Price</FormLabel>
           <Input
              placeholder='Enter the Algo Price'
              styleType='admin'
              style = {{marginTop:20}}
              autoComplete='off'
              {...register(
                'algo',
                {
                  required: {
                    value: true,
                    message: 'The field is required*'
                  }
                }
              )}
              value = {algo}
              onChange = {e=>setAlgo(e.target.value)}
              style = {{marginTop : 0}}
            />
            {errors?.algo && <ErrorMessage>{errors?.algo?.message}</ErrorMessage>}
            <FormLabel>USDC Price</FormLabel>
           <Input
              placeholder='Enter the USDC Price'
              styleType='admin'
              style = {{marginTop:20}}
              autoComplete='off'
              {...register(
                'usdc',
                {
                  required: {
                    value: true,
                    message: 'The field is required*'
                  }
                }
              )}
              value = {usdc}
              onChange = {e=>setUSDC(e.target.value)}
              style = {{marginTop : 0}}
            />
            {errors?.algo && <ErrorMessage>{errors?.algo?.message}</ErrorMessage>}
          </FormGroup>
          <div style = {{display:'flex',marginTop:20}}>
          <Button color='primary' type='submit' isLoading={isLoading}>
            Update NFT
          </Button>
          <Button color='primary' type='submit' style={{marginLeft:10}} onClick={onClose} >
            Cancel
          </Button>
          </div>
        </Form>
    </Body>
  </Container>
    )


}