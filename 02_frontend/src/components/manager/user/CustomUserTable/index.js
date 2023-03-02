import React,{useEffect,useState} from 'react'
import { LayoutContainer } from '../../../shared/LayoutContainer'
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
import { useApi } from '../../../../contexts/ApiContext'
import { Modal } from '../../../shared' 
import DetailIcon from '@meronex/icons/bi/BiMessageDetail'
import  {DetailDialog}  from '../DetailDialog'

export const CustomUserTable = (props) => {
//   const {rowsofPage} = props
  const {data} = props
  const [tempData,setTempData] = useState([])
  const [open,setOpen] = useState(false) 
  const [srcData,setSrcData] = useState([]) 
  const screenWidth = window.innerWidth;
  const [{getRole}] = useApi()
  const role = getRole()
  const [userID,setUserID] = useState(0)
  /***********Paganate Feature***************/
   
  var cols = screenWidth > 1024 ? ['Name','Email','Phone','BRT Amount','Membership','Role','Detail'] : ['Name','Email','Detail']
  const rowsofPage = 5
  const totalPageCount = data.length % rowsofPage > 0 ? Math.floor(data.length / rowsofPage) +1 : Math.floor(data.length / rowsofPage)
  const [currentPage,setCurrentPage] = useState(1)
  const isMobile = screenWidth > 1024
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
               {isMobile&&<Title>
                    User Management
                </Title>
               } 

      </SubContainer>
        <Table>
          <THead>
            <tr>
            {cols.map((item, i) => (
              <th key = {i}>{item}</th>
            ))}
            </tr>
          </THead>
          <TBody>
          {tempData.map((item, i) => (
              <tr key={i}>
              <td>{item.name}</td>
              <td>{isMobile? item.email:item.email.substring(0,5) + '...'}</td>
              {isMobile&&<td>{item.phone}</td>} 
              {isMobile && <td>{item.brt}</td> }
              {isMobile && <td>{item.membership}</td>}
               {isMobile &&<td>{item.role == '1' ? 'Business' : 'User' }</td> }
              <td style = {{fontSize:19,cursor:'pointer'}} onClick = { e=>{setUserID(item.id);setOpen(true)}} ><DetailIcon/></td> 
              </tr>
          ))}
          </TBody>
        </Table>
       <PagenateCotainer>
        {isMobile && <p> Page {currentPage} of {totalPageCount} Pages</p>}
        {!isMobile && <p>   {currentPage} of {totalPageCount}  </p>}

        <PagenateButton onClick = {GotoStartPage} >Start</PagenateButton>
        <PagenateButton onClick = {GotoPrevPage}>Previous</PagenateButton>
        <PagenateButton onClick = {GotoNextPage} >Next</PagenateButton>
        <PagenateButton onClick = {GotoEndPage}>End</PagenateButton>
      </PagenateCotainer>  
      </Container>
      <Modal
          width='370px'
          open={open}
          onClose={() => setOpen(false)}
        >
          <DetailDialog onClose = {()=>setOpen(false)}  id = {userID}  />
          {/* <MintDialog onClose={() => setOpen(false)} address = {user_address} level = {topLevel} /> */}
      </Modal>
    </LayoutContainer>
  )
}
