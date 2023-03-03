import React,{useState,useEffect} from 'react'
import { AdminOriginalCard } from '../../shared/AdminOriginalCard'
import { DashboardHeading } from '../../shared/DashboardHeading'
import { NoResult } from '../../shared/NoResult'
import { Tabs } from '../../shared'

import {
  Container,
  CardWrapper,
  CardInnerWrapper,
  CardBody,
  PercentContainer
} from './styles'
import { Input ,Button} from '../../../styles'
import { useApi } from '../../../contexts/ApiContext'
import { toast } from 'react-toastify'
import { KTable } from './KTable'
import { PercentCard } from './PercentCard'
 
export const Offers = () => {
  const tabList = [
    // { key: 'received', name: 'History' },
 
  ]
const [{doPost,getRole}] = useApi()
const [value,setValue] = useState('')
const role = getRole()
const [data,setData] = useState([])  
const [percentData,setPercentData] = useState([])
const [isLoading,setIsLoading] = useState(false)
/***************For Admin Role***********************/

const addDiscountCode = async()=>{
  setIsLoading(true)
  const response =  await doPost('reedmeservice/confirm_code', {
    code: value
  })  

  if(response.error || response.result ==  "failed") {
    if(response.msg)
             toast(response.msg ,{type : 'error'})
    else
        toast("Server Error",{type:'error'})
  }
  else{
    
    toast.success("Success",{
      onClose : ()=>{
          window.location.reload(false)
      },
      autoClose : 3000
    })
  }
  setIsLoading(false)
  
}

/***************For Customer Role*********************/
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
useEffect(()=>{
  downloadTradingData()
  if(role == 3) downloadProgreesData();
},[])


return (
    <Container>
      <DashboardHeading title='Trading History' responsive = {true} />
      <CardWrapper>
        <AdminOriginalCard>
          <CardInnerWrapper style = {{height: role == 1 ? 530 : 360}} >
            <Tabs
              tabList={tabList}
              selectedTab='received'
            />
            <CardBody >
             {
              data.length == 0?
              <NoResult
              content='No offers found'
              />: <KTable data = {data} isPagable = {role  < 2} rowsofPage = {role == 1 ? 7 : 5}/> 
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
      
      <div style = {{width:'100%',display:'flex'}}>
      { role == 2 &&
        <> <Input
                placeholder='Please enter the discount code'
                styleType='admin'
                style = {{ width:'80%'}}
                autoComplete='off'
                value = {value}
                onChange = {e=>setValue(e.target.value)}
              />
      
          <Button color='primary' type='submit' onClick = {addDiscountCode} style = {{height:40,marginLeft:20}} isLoading = {isLoading}>
          O K
          </Button>
          </>
      }    
      </div>
    </Container>
  )
}
