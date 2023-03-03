import React,{useState,useEffect} from 'react'
import { LayoutContainer } from '../../shared'
import CryptoIcon from '@meronex/icons/bi/BilBitcoin'
import { CardHeading,CardBody,SubLayoutContainer,Container,FormGroup } from './styles'
import { Button, Input } from '../../../styles' 
import { useApi } from '../../../contexts/ApiContext'
import { toast } from 'react-toastify'

export const BusinessDiscount = () => {

    const [rate, setRate] = useState(5)
    const [limit, setLimit] = useState(5)
    const [freeAmount, setFreeAmount] = useState(40)
    const [nftoffer, setNftOffer] = useState(15)
    const [{doPost}] = useApi()
    const onSave = async()=>{
       
        const response = await doPost('discount/update',{
            address : localStorage.getItem('address'),
            rate : rate,
            limit : limit,
            freeAmount : freeAmount,
            nftoffer : nftoffer
        })

        if(response.error || response.result == 'failed'){
            toast.error("Server Error")
        }
        else{
            if(response.data){
                console.log(response.data)
            }
           toast.success("Successfully Saved")
        }


    }
    const onGet = async() =>{
        const response = await doPost('discount/get',{
            address : localStorage.getItem('address')
        })
        if(response.error || response.result == 'failed'){
            toast.error("Server Error")
        }
        else{
            if(response.data){
               setRate(response.data.discount_rate)
               setLimit(response.data.discount_limit)
               setFreeAmount(response.data.free_product_amount)
               setNftOffer(response.data.nftoffer)
            }

            // toast.success("Successfully Saved")
        }

    }
    useEffect(() => {
      onGet()
    }, [])
    return (
     <LayoutContainer>
         <SubLayoutContainer>
            <Container>
                <CardHeading>
                    <CryptoIcon />
                    <span>Discount Management</span>
                </CardHeading>
                <CardBody>
                <FormGroup>
                    <p>Discount amount per 1 BRT</p>
                    <Input
                        styleType='admin'
                         value = {rate}
                         onChange = {e=>setRate(e.target.value)}
                    />
                </FormGroup> 
                <FormGroup>
                    <p>Redeem discount Limit</p>
                    <Input
                        styleType='admin'
                        value = {limit}
                        onChange = {e=>setLimit(e.target.value)}
                   />
                </FormGroup>
                <FormGroup>
                    <p>Free Product Amount</p>
                    <Input
                        styleType='admin'
                        value = {freeAmount}
                        onChange = {e=>setFreeAmount(e.target.value)}
                   />
                </FormGroup>
                <FormGroup>
                    <p>Block Reward NFT Offer Amount</p>
                    <Input
                        styleType='admin'
                        value = {nftoffer}
                        onChange = {e=>setNftOffer(e.target.value)}
                   />
                </FormGroup>
                <Button type = 'button' color = 'primary' naked onClick = {onSave} > Save Change</Button>
                </CardBody>
            </Container>
             
         </SubLayoutContainer>
     </LayoutContainer>
        )
  }