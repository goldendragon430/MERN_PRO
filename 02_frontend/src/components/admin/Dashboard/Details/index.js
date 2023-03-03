import React,{useState,useEffect} from 'react'
import { DashboardHeading } from '../../../shared/DashboardHeading'
import { useWindowSize } from '../../../../hooks/useWindowSize'
import { useNavigate } from 'react-router-dom';
import { algodClient } from '../../../main/Mint/Lib/algorand';
import {
  AccountBalance,
} from './styles'
import { useApi } from '../../../../contexts/ApiContext';

export const Details = () => {
  const { width } = useWindowSize()
  const navigate = useNavigate()
  let balance = localStorage.getItem('balance')
  if(!balance) balance = 0
  const [brt,setBRT] = useState(balance)
  const[{doPost}] = useApi()
const fetchData = async()=>{
  const algo_addr = localStorage.getItem("address")
   
  const clientInfo = await algodClient.accountInformation(algo_addr).do();
  const assets  = clientInfo.assets
  const brt_id = parseInt(process.env.REACT_APP_CONTRACT_ADDRESS);
  assets.forEach(asset => {
    if(asset['asset-id'] == brt_id){
      setBRT(asset['amount'] / 10)
      doPost('auth/update_balance', {
        email : localStorage.getItem('email'),
        balance : asset['amount'] / 10
      })
  }
  });    
}
useEffect(()=>{
  fetchData()
},[])

  return (
    <>
   
      <DashboardHeading
        title='Dashboard'
        responsive = {true}
      >
        <AccountBalance>
          {width > 768 && (
            <span>BRT Value</span>
          )}
          <span className='amount'>USD ${brt}</span>
        </AccountBalance>
      </DashboardHeading>
    </>
  )
}