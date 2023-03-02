import React,{useEffect,useState} from 'react'
import { LayoutContainer } from '../../../shared'
// import BsClockHistory from '@meronex/icons/bs/BsClockHistory'
// import MdcCheckDecagram from '@meronex/icons/mdc/MdcCheckDecagram'
import {
  Container,
  Table,
  THead,
  TBody,
  PagenateCotainer,
  PagenateButton,
  Heading
} from './styles'
import { useApi } from '../../../../contexts/ApiContext'

export const KTable = (props) => {
  const {data,isPagable,rowsofPage} = props
  const [tempData,setTempData] = useState([]) 
  const screenWidth = window.innerWidth;
  const [{getRole}] = useApi()
  const role = getRole()

  /***********Paganate Feature***************/
   
  const totalPageCount = data.length % rowsofPage > 0 ? Math.floor(data.length / rowsofPage) +1 : Math.floor(data.length / rowsofPage)
  const [currentPage,setCurrentPage] = useState(1)
  
  useEffect(()=>{
    var temp = []
    var endNum = data.length < rowsofPage * currentPage ?  data.length : rowsofPage * currentPage 
    for (var i = rowsofPage * (currentPage - 1) ; i < endNum ;i ++ )
    temp.push(data[i])
    setTempData(temp)  
  },[currentPage])
  
  const GotoStartPage = ()=>{
    setCurrentPage(1)
  }
  const GotoPrevPage = ()=>{
    if(currentPage > 1)
        setCurrentPage(currentPage - 1)
  }
  const GotoNextPage = ()=>{
    if(currentPage < totalPageCount) 
        setCurrentPage(currentPage + 1)
  }
  const GotoEndPage = ()=>{
    setCurrentPage(totalPageCount)
  }
    return (
    <LayoutContainer>
      <Container>
        {
          role < 2 &&<Heading>
          <h4>Total {data.length} records</h4>
        </Heading>
        }
       
        <Table>
          <THead>
            <tr>
              <th>Date</th>
              {role == 0 && <th> Customer</th>}
              {role == 0 &&screenWidth > 768 && <th> Business</th>}
              {role == 1 && <th> Customer</th>}
              {role == 2 && <th> Customer</th>}
              {role == 3 && <th> Business</th>}
              <th>Service</th>
            {screenWidth > 768 && <th>Price(BRT)</th> } 
            {screenWidth > 768 && <th>Discount Code</th> } 
              
            </tr>
          </THead>
          <TBody >
          {tempData.map((item, i) => (
              <tr key={i}>
                <td>{item.created_at}</td>
                {role == 0 && 
                  <td>{screenWidth > 768 ?item.user:item.user.substring(0,4)+'...'}</td>
                }
                {role == 0 && screenWidth > 768 && 
                  <td>{item.business}</td>
                }                
                {role > 0 && 
                  <td>{screenWidth > 768 ?item.user:item.user.substring(0,8)+'...'}</td>
                }
                <td>{item.service}</td>
                {screenWidth > 768 && <td>{item.price}</td>}
                {screenWidth > 768 && <td title = {item.code} >{item.code.substring(0,10)}...</td>}
                {/* <td>
                  <UserInfo>
                    <span>{item.from}</span> 
                    <MdcCheckDecagram />
                  </UserInfo>
                </td> */}
              </tr>
          ))}
          </TBody>
        </Table>
       {
        isPagable  && <PagenateCotainer>
        <p> Page {currentPage} of {totalPageCount} Pages</p>
        <PagenateButton onClick = {GotoStartPage} >Start</PagenateButton>
        <PagenateButton onClick = {GotoPrevPage}>Previous</PagenateButton>
        <PagenateButton onClick = {GotoNextPage} >Next</PagenateButton>
        <PagenateButton onClick = {GotoEndPage}>End</PagenateButton>
      </PagenateCotainer>
       }
        
        </Container>
    </LayoutContainer>
  )
}
