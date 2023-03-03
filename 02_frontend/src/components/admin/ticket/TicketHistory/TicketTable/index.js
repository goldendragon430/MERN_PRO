import React,{useEffect,useState} from 'react'
import { LayoutContainer } from '../../../../shared'
import {
  Container,
  Table,
  THead,
  TBody,
  PagenateCotainer,
  PagenateButton,
  Title,
  SubContainer
} from './styles'
 
export const TicketTable = (props) => {
//   const {rowsofPage} = props
  const {data} = props
  const [tempData,setTempData] = useState([]) 
  const screenWidth = window.innerWidth;
 
  /***********Paganate Feature***************/
  
  const isMobile = screenWidth > 1024
  var cols = screenWidth > 1024 ? ['Name','Business','Employee','Ticket','BRT','Date'] : ['Name','Business','Date']
  
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
              {isMobile &&  
                <Title>
                    {/* Ticket Discount History */}
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
                <td>{item.username}</td>
                <td>{item.business}</td>
                {isMobile && <td>{item.employee}</td>}
                {isMobile &&    <td>{item.ticket}</td>}           
                {isMobile && <td>{item.brt}</td> } 
                <td>{item.date}</td>  
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
