import React,{useState,useEffect} from 'react'
import { AdminOriginalCard } from '../../../shared/AdminOriginalCard'
import { DashboardHeading } from '../../../shared/DashboardHeading'
import { NoResult } from '../../../shared/NoResult'
import { Tabs } from '../../../shared'
import {
  Container,
  CardWrapper,
  CardInnerWrapper,
  CardBody,
  PercentContainer
} from './styles'

import { useApi } from '../../../../contexts/ApiContext'
import { toast } from 'react-toastify'
import { KTable } from '../../Offers/KTable'
import { PercentCard } from '../../Offers/PercentCard'
export const Offers = () => {
  const tabList = [
    // { key: 'received', name: 'History' },
  ]
const [{doPost}] = useApi()
const [data,setData] = useState([])  
const [percentData,setPercentData] = useState([]) 
/***************For Customer Role*********************/
async function downloadProgreesData(){
  const address = localStorage.getItem('address')
 
  const response = await doPost("reedmeservice/progress_data",{
    address : address
  })
  if(response.error || response.result == "failed") {
        toast("Server Error" ,{type : 'error'})
  }
  else {
        setPercentData(response.data) 
    }

}
async function downloadTradingData()
{
    const address = localStorage.getItem('address')
 
    const response = await doPost("reedmeservice/download_data",{
      address : address
    })
    if(response.error || response.result == "failed") {
          toast("Server Error" ,{type : 'error'})
    }
    else {
          setData(response.data)
      }
    }              

useEffect(()=>{
  downloadTradingData()
  downloadProgreesData()
},[])


return (
    <Container>
      <DashboardHeading title='Trading History' responsive = {false} />
      <CardWrapper>
        <AdminOriginalCard>
          <CardInnerWrapper style = {{height: 360}} >
            <Tabs
              tabList={tabList}
              selectedTab='received'
            />
            <CardBody >
             {
              data.length == 0?
              <NoResult
              content='No offers found'
              />: <KTable data = {data} isPagable = {false} rowsofPage = {5}/> 
             }  
            </CardBody>
          </CardInnerWrapper>
        </AdminOriginalCard>
      </CardWrapper>
      <PercentContainer>
      {percentData.map((item, i) => (
           <PercentCard value = {item.value} code = {item.code} />       
                      ))}
        </PercentContainer>          
    </Container>
  )
}
