import React,{useEffect,useState} from 'react'
import { LayoutContainer } from '../../../shared/LayoutContainer'
import {
  Container,
  Table,
  THead,
  TBody,
  PagenateCotainer,
  PagenateButton,
  Heading,
  Title,
  SubContainer
} from './styles'
import { useApi } from '../../../../contexts/ApiContext'
import { SwitchingButton } from '../../../shared/SwichingButton' 
 
export const CustomBusinessTable = (props) => {
//   const {rowsofPage} = props
  const {data} = props
  const [tempData,setTempData] = useState([]) 
  const screenWidth = window.innerWidth;
  const [{getRole}] = useApi()
  const role = getRole()
 
  /***********Paganate Feature***************/
   
  const isMobile = screenWidth > 1024
  const cols = isMobile ? ['Company','VAT Number','Owner','Address','Status']:['Company','VAT Number','Status']

  const rowsofPage = 5
  const totalPageCount = data.length % rowsofPage > 0 ? Math.floor(data.length / rowsofPage) +1 : Math.floor(data.length / rowsofPage)
  const [currentPage,setCurrentPage] = useState(1)
 
  useEffect(()=>{
    var temp = []
    var endNum = data.length < rowsofPage * currentPage ?  data.length : rowsofPage * currentPage 
    for (var i = rowsofPage * (currentPage - 1) ; i < endNum ;i ++ )
    temp.push(data[i])
    setTempData(temp)  
  },[currentPage,data])
 
 

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
      <SubContainer>
              {isMobile &&  <Title>
                    Business Management
                </Title>} 
            </SubContainer>
        <Table>
          <THead>
            <tr>
            {cols.map((item, i) => (
              <th key = {i}>{item}</th>
            ))}
            </tr>
          </THead>
          <TBody >
          {tempData.map((item, i) => (
              <tr key={i}>
              <td>{item.company}</td>
              <td>{item.vat}</td>
            {isMobile &&  <td>{item.owner}</td> }  
             {isMobile && <td>{item.address}</td> } 
              <td><SwitchingButton allowed = {item.role == '1'} id = {item.id} role = "1" /></td>
              </tr>
          ))}
          </TBody>
        </Table>
       <PagenateCotainer>
       {isMobile && <p> Page {currentPage} of {totalPageCount} Pages</p> }
       {!isMobile && <p> {currentPage} of {totalPageCount}</p> }

        <PagenateButton onClick = {GotoStartPage} >Start</PagenateButton>
        <PagenateButton onClick = {GotoPrevPage}>Previous</PagenateButton>
        <PagenateButton onClick = {GotoNextPage} >Next</PagenateButton>
        <PagenateButton onClick = {GotoEndPage}>End</PagenateButton>
      </PagenateCotainer>
       
        </Container>
    </LayoutContainer>
  )
}
