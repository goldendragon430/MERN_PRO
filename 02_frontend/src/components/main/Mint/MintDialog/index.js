import React,{useState,useEffect} from 'react'
import { useForm } from 'react-hook-form'
import { Input,Button } from '../../../../styles'
import { cidToReserveURL, sendFileToIPFS } from '../Lib/pinata'
import { algodClient } from '../Lib/algorand' 
import {
  Container,
  Heading,
  Body,
  Form,
  FormGroup,
  ErrorMessage 
} from './styles'
import { toast } from 'react-toastify' 
import { useApi } from '../../../../contexts/ApiContext'

export const MintDialog = (props) => {
  const { onClose, address, level} = props
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit, formState: { errors }} = useForm()
  const [ethRate,setEthRate] = useState(1)
  const [algoRate,setAlgoRate] = useState(1)
  const [name,setName] = useState('')
  const [unit_name,setUnitName] = useState('')
  const [algo,setAlgo] = useState(0)
  const [eth,setETH] = useState(0)
  const [{ doPost,getRole }] = useApi() 
  const [fileImg, setFileImg] = useState(null)
  const [fileVideo, setFileVideo] = useState(null)
  
  const role = getRole()

  const checkValues = async (val)=>{
 
    if (isNaN( parseFloat(val.usdc)) ||  parseFloat(val.usdc) == 0  )
        {
          toast("Confirm the USDC value",{type : 'error'})
          return false;
        }
    if (isNaN( parseFloat(val.level)) ||  parseFloat(val.level) == 0 || val.level > level + 1  )
        {
          toast("Confirm the level value",{type : 'error'})
          return false;
        }
        const clientInfo = await algodClient.accountInformation(localStorage.getItem('address')).do();
        const balance =  (clientInfo.amount - 0.301 * 1000000) / 1000000
        if(balance <= 0) {
          toast("Please deposite Algo value",{type : 'error'})
          return false;
        }
    return true;
  }
  const onSubmit = async (values) => {
    if ( checkValues(values) == false) return;
    try{
      setIsLoading(true)
      const CID  =   await sendFileToIPFS(fileImg);
      var {url,reserveAddress}  =   cidToReserveURL(CID);
      const url_p = url,reserveAddress_p = reserveAddress

      const CID_2  =   await sendFileToIPFS(fileVideo);

      const url_v = 'https://ipfs.io/ipfs/' + CID, reserveAddress_v = 'https://ipfs.io/ipfs/' + CID_2
      
      
      const response =  await doPost('auth/create_arc_19', {
        address: address,
        name : values.name,
        unit_name : values.unit_name,
        description: values.description,
        url_p : url_p,
        reserveAddress_p:reserveAddress_p,
        url_v : url_v,
        reserveAddress_v:reserveAddress_v,
        algo : algo,
        eth : eth,
        usdc : values.usdc,
        level : values.level,
      })
      
      if(response.result == "failed" || response.error){
        toast("Control Failed. Please Confirm Network State" ,{type:"error"})
        return
      }
      toast.success("Success",{
        onClose:()=>{
            window.location.reload(false)
        },
        autoClose : 3000
    })
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
  const getExchageRate = async()=>{
 
 
    const response_2 = await fetch("https://price-api.crypto.com/price/v1/exchange/algorand")
    const json_2 = await response_2.json()
    const USD_ALGO = json_2.fiat.usd
    const USD_ETH = json_2.fiat.usd /json_2.crypto.eth
    console.log(USD_ETH,USD_ALGO)  
    setEthRate(USD_ETH)
    setAlgoRate(USD_ALGO)
  }
  useEffect(()=>{
    getExchageRate()
  },[])
  const onChange = (usdc) =>{
    const Algo_value = usdc/algoRate;
    const ETH_value = usdc/ethRate;
    console.log(Algo_value,ETH_value)
    if(isNaN(parseInt(Algo_value))) {
      setAlgo(0)
    }
    else{
      setAlgo(parseInt(Algo_value))
    }
    if(isNaN(parseFloat(ETH_value))) {
      setETH(0)
    }
    else{
      setETH(parseInt(ETH_value*1000000)/1000000)
    }
        
  }
return(
    <Container>
    <Heading>
      <span>Mint Membership</span>
    </Heading>
    <Body>
    <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Input
              placeholder='Enter the Asset Name'
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
           
            />
            {errors?.name && <ErrorMessage>{errors?.name?.message}</ErrorMessage>}
             <Input
              placeholder='Enter the Unit Name'
              styleType='admin'
              style = {{marginTop:20}}
              autoComplete='off'
              {...register(
                'unit_name',
                {
                  required: {
                    value: true,
                    message: 'The field is required*'
                  }
                }
              )}
              value = {role == 0 ?'mNFT' : 'mship'}
             
             
            />
            {errors?.unit_name && <ErrorMessage>{errors?.unit_name?.message}</ErrorMessage>}
             <Input
              placeholder='Enter the Description'
              styleType='admin'
              style = {{marginTop:20}}
              autoComplete='off'
              {...register(
                'description',
                {
                }
              )}
            />

         <Input
              placeholder='Enter the USDC Price'
              styleType='admin'
              style = {{marginTop:20}}
              autoComplete='off'
              {...register(
                'usdc',
                {
                }
              )}
              onChange = {e=>onChange(e.target.value)}
            />
         {errors?.usdc && <ErrorMessage>{errors?.usdc?.message}</ErrorMessage>}
         <div style = {{display:'flex',marginTop:20}}>
           <p>Algo : {algo}</p>
           <p style = {{marginLeft: 40}}>ETH : {eth}</p>
         </div>
        
         <Input
              placeholder= {'Enter the level lower than ' + (level + 1)}
              styleType='admin'
              style = {{marginTop:20}}
              autoComplete='off'
              {...register(
                'level',
                {
                }
              )}
            />
         {errors?.algo && <ErrorMessage>{errors?.algo?.message}</ErrorMessage>}



        <input type = "file" style = {{marginTop:20}} accept=".jpg" onChange={(e) =>setFileImg(e.target.files[0])} required/>
        <input type = "file" style = {{marginTop:20}} accept=".mp4" onChange={(e) =>setFileVideo(e.target.files[0])} required/>
          </FormGroup>
          <div style = {{display:'flex',marginTop:20}}>
          <Button color='primary' type='submit' isLoading={isLoading}>
            O K
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