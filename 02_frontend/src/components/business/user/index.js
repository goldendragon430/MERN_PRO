import React,{useState, useEffect} from 'react'
import { LayoutContainer } from '../../shared'
import {Container} from './styles'
import { SearchWrapper } from '../../main/Header/styles'
import { Input } from '../../../styles'
import HiOutlineSearch from '@meronex/icons/hi/HiOutlineSearch'
import { useApi } from '../../../contexts/ApiContext'
import { NoResult } from '../../shared/NoResult'
import { CardBody } from '../../shared/AdminCard/styles'
import { CardWrapper } from '../../admin/Library/styles'
import { AdminOriginalCard } from '../../shared/AdminOriginalCard'
import { CardInnerWrapper } from '../../admin/Library/styles'
import { Tabs } from '../../shared'
import { toast } from 'react-toastify'
import {EmployeeTable} from './EmployTable'
export const Employee = () => {
    const [{doPost}] = useApi()
   
    const [searchString,setSearchString] = useState('')
    const [srcData,setSrcData] = useState([])
    const [tempData,setTempData] = useState([])
    const tabList = [
        { key: 'user', name: 'Employees' },
      ]
  
    useEffect(() => {
        async function fetchData(){
            const response = await doPost('auth/get_employee_list',{
                address : localStorage.getItem('address')
              })
            if(response.error || response.result == 'failed'){
                toast("Server Error",{type:'error'})
            }else{
                setSrcData(response.data)
                setTempData(response.data)
            }
        }
        fetchData()
    },[])
      
  const onSearch = (val)=>{
    setSearchString(val)
    var data = srcData.filter(ele => (ele.firstName != '' &&  ele.firstName.indexOf(val) >= 0 || ele.lastName != '' &&  ele.lastName.indexOf(val) >= 0 || ele.phoneNumber != '' &&  ele.phoneNumber.indexOf(val) >= 0 ||  ele.email.indexOf(val) >= 0));  
    setTempData(data)   

  }

    return (
     <LayoutContainer>
        <Container>
          
              <CardWrapper>
                    <AdminOriginalCard>
                        <CardInnerWrapper>
                        <Tabs
                            tabList={tabList}
                            selectedTab = 'user'
                        />
                            <Container style = {{display:'flex',justifyContent:'flex-end'}}>
                                <SearchWrapper style = {{marginRight : 50,maxHeight : 30,}}>
                                            <Input
                                            placeholder='Search...'
                                            value = {searchString}
                                            onChange = {e=>onSearch(e.target.value)}
                                                />
                                            <HiOutlineSearch  />
                                </SearchWrapper>
                            </Container>
                            <CardBody>
                                {tempData.length > 0 ?
                                <EmployeeTable data = {tempData}/>
                                :<NoResult content = "No Items Found" />
                                }  
                            </CardBody>
                         </CardInnerWrapper>
                    </AdminOriginalCard>
                </CardWrapper>
          </Container>
     </LayoutContainer>
        )
  }