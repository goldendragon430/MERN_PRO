import {React} from 'react'
import { Heading,Body,Container,SubContainer } from './styles'
import LoggerImg from '../../../../assets/images/cbd_mark.png'

export const PercentModal = (props)=>{
const {value} = props
return (
    <Container>
      <Heading>
           
      </Heading>
      <Body>
        <img src = {LoggerImg} />
        <SubContainer>
            <h4> You have redeemed</h4>
            <h1>{value}%</h1>
        </SubContainer>
        <h2>Please Show Register</h2>
      </Body>
    </Container>
)

}