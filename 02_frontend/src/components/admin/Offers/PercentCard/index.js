import {React,useState} from 'react'
import { Heading,Body,Container,SubContainer } from './styles'
import LoggerImg from '../../../../assets/images/cbd_mark.png'
import { Modal } from '../../../shared'
import { QRModal } from '../../../shared/PriceCard/QRModal'
export const PercentCard = (props)=>{
const {value,code} = props
const [qropen,setQROpen] = useState(false)
return (
    <Container>
      <Heading>
           
      </Heading>
      <Body onClick = {()=>setQROpen(true)} >
        <img src = {LoggerImg} style = {{width : 150}} />
        <SubContainer>
            <p> You have redeemed</p>
            <h3>{value}%</h3>
        </SubContainer>
        <h5>You have 48 hours to redeem</h5>
      </Body>
      <Modal
                width='370px'
                open={qropen}
                onClose={() => {setQROpen(false);console.log(code)}}
                >
                <QRModal onClose={() => setQROpen(false)}  value = {code} />
                </Modal> 
    </Container>
)

}