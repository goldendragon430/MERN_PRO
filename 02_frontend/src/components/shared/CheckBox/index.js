import React, { useState } from 'react'
import {Container} from './styles'

export const CheckBox = (props)=>{
    const {title,onClick,checked} = props
  
    const [state,setState] = useState(false)
    return(
            <Container>
                <input type = 'checkbox' checked = {checked} onClick = {e=>{onClick(!state);setState(!state)}} style = {{width:20,height:20,accentColor:'#049557',marginRight : 10}} />
                    {title}
            </Container>
        )
}