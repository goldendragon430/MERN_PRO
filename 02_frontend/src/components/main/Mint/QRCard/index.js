import React,{useState,useEffect} from 'react'
 
import QRCode from 'qrcode'
import {
    Container,
    Heading,
    Body
  } from './styles'
export const QRCard = (props) => {
    const {value,balance} = props
     
    const [qr, setQr] = useState('')
    console.log(value)

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
            console.log(url)
            setQr(url)
        })
    }

useEffect(()=>{
GenerateQRCode(value)
},[])    
return (
    <Container>
    <Heading>
      <span> Please Show this to Employee</span>
    </Heading>
    <Body>
        <div style = {{display:'row'}}>
        <img src={qr} />
        <h3 style = {{textAlign:'center'}}>Your Balance is {balance} BRT </h3>         
        </div>
    </Body>
    </Container>
)
}