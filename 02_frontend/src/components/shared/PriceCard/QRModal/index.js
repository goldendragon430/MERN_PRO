import React,{useState,useEffect} from 'react'
 
import QRCode from 'qrcode'
import {
    Container,
    Heading,
    Body
  } from './styles'
export const QRModal = (props) => {
    const { onClose, value} = props
     
    const [qr, setQr] = useState('')
     const GenerateQRCode = (val) => {
        QRCode.toDataURL(val, {
            width: 300,
            margin: 2,
            color: {
                // dark: '#335383FF',
                // light: '#EEEEEEFF'
            }
        }, (err, url) => {
            if (err) return console.error(err)
               setQr(url)
        })
    }

useEffect(()=>{
GenerateQRCode(value)
},[])    
return (
    <Container>
    <Heading>
      <span> Your Discount Code</span>
    </Heading>
    <Body>
  
        <img src={qr} />
      
    </Body>
    </Container>
)
}