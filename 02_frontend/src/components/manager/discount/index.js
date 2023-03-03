import React,{useState,useEffect} from 'react'
import { LayoutContainer } from '../../shared'
import CryptoIcon from '@meronex/icons/bi/BilBitcoin'
import { CardHeading,CardBody,SubLayoutContainer,Container,FormGroup } from './styles'
import { Button, Input } from '../../../styles' 
import { useApi } from '../../../contexts/ApiContext'
import { toast } from 'react-toastify'

export const Discount = () => {
const [price,setPrice] = useState(2)
const [{doPost}] = useApi()


    return (
     <LayoutContainer>
         <SubLayoutContainer>
            {/* <Container>
                <CardHeading>
                    <CryptoIcon />
                    <span>Event Management</span>
                </CardHeading>
                <CardBody>
                <FormGroup>
                    <p>Amount of tokens</p>
                    <Input
                        styleType='admin'
                         value = {price}
                    />
                </FormGroup>
                <div style = {{display:"flex",justifyContent:'flex-end'}}>
                <Button color='primary' onClick = {onSave} >Save Changes</Button>
                </div>
                </CardBody>
            </Container> */}
            <Container>
                <CardHeading>
                    <CryptoIcon />
                    <span>Block Reward Token Management</span>
                </CardHeading>
                <CardBody>
                <FormGroup>
                    <p>Total Amount</p>
                    <Input
                        styleType='admin'
                         value = {'10000 BRT'}
                    />
                </FormGroup>
                <FormGroup>
                    <p>Balance</p>
                    <Input
                        styleType='admin'
                         value = {'6000 BRT'}
                    />
                </FormGroup> 
                <FormGroup>
                    <p>Circling Balance</p>
                    <Input
                        styleType='admin'
                         value = {'4000 BRT'}
                    />
                </FormGroup> 
            </CardBody>
            </Container>
         </SubLayoutContainer>
     </LayoutContainer>
        )
  }