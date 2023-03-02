import React, { useState } from 'react'
import {
	Container,
	IconContainer,
	TypeIconContainer,
	Letter,
	DetailInfo,
	SubContainer
} from './styles' 

import GrMastercard from '@meronex/icons/gr/GrMastercard';
import LgVisa from '@meronex/icons/lg/LgVisa';
import GrAmex from '@meronex/icons/gr/GrAmex';
import LgJcb from '@meronex/icons/lg/LgJcb';
import LgUnionpay from '@meronex/icons/lg/LgUnionpay';
import FaCcDiscover from '@meronex/icons/fa/FaCcDiscover';
import FaCcDinersClub from '@meronex/icons/fa/FaCcDinersClub';
import  CgCalendarDates from '@meronex/icons/cg/CgCalendarDates'
import RiVisaLine from '@meronex/icons/ri/RiVisaLine';
import FaCcAmex from '@meronex/icons/fa/FaCcAmex';
import {Button} from '../../../../styles'
import {toast}  from 'react-toastify'
import { useApi } from '../../../../contexts/ApiContext'
export const CreditCardItem = (props) =>{

	const {item,onUpdate} = props;
	const [{doPost}] = useApi()
	const getTypeIcon = (type) =>{
		switch(type) {
			case "MASTERCARD" :
				return 	<GrMastercard/>;
			case "VISA" :
				return  <RiVisaLine/>;
			case "AMEX" :
				return  <FaCcAmex/>;
			case "DISCOVER" :
				return  <FaCcDiscover/>;
			case "JCB"  :
				return  <LgJcb/>;
			case "CHINA_UNION_PAY" :
				return <LgUnionpay/>;
			case "DINERS" :
				return <FaCcDinersClub/>;		}
	}
	const onRemove  = async()=>{

		const response = await doPost("credit/remove",{
			id : item._id
		})

		if(response.error || response.result == 'failed'){
			toast.error ("Server Error")
		}else{
			toast.success("Successfully Removed",{
				onClose : ()=>{
					window.location.reload(false)
				},
				autoClose : 1000
			})
		}

	}
	return (
			
			<Container >
				<SubContainer onClick = {e=>onUpdate(item)} style = {{width:'100%'}}>
					<IconContainer>
						<CgCalendarDates/>
					</IconContainer>
					<TypeIconContainer>
						{getTypeIcon(item.type)}
					</TypeIconContainer>
					<DetailInfo>
					   <Letter>{item.type}&nbsp;****&nbsp;{item.cardnumber.slice(-4)}</Letter>
					   <Letter>Expires&nbsp;{item.expiredate.substring(0,item.expiredate.length - 2) + '20' + item.expiredate.slice(-2) }</Letter>
					</DetailInfo>
				</SubContainer>
				<Button color='primary' naked style = {{height : 35 ,width : 90}} onClick = {onRemove} >Remove</Button>
			</Container>
		)
}