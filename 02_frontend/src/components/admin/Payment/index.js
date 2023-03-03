import React, { useState ,useEffect} from 'react'
import { Button } from '../../../styles'
import { AdminOriginalCard } from '../../shared/AdminOriginalCard'
import { DashboardHeading } from '../../shared/DashboardHeading'
import { NoResult } from '../../shared/NoResult'
import BsCreditCard from '@meronex/icons/bs/BsCreditCard'
import { Modal } from '../../shared'
import {CreditCardItem} from './CreditCardItem'
import {
  Container,
  CardWrapper,
  CardInnerWrapper,
  CardBody,
  CardHeader
} from './styles'
import { AddCredit } from './AddCredit'
import {UpdateCredit} from './UpdateCredit'
import { useApi } from '../../../contexts/ApiContext'
import {toast}  from 'react-toastify'

export const Payment = () => {
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [cards,setCards] = useState([])
  const [item,setItem] = useState({})


  const [{doPost}] = useApi()
  const fetchData = async() =>{
      
      const response = await doPost('credit/get_card_list',{
      address : localStorage.getItem('address')
      })

      if(response.error || response.result == 'failed'){
          toast.error("Server Error")
      }else{
          setCards(response.data)
      }

  }
  useEffect(()=>{
    fetchData()    
  },[])
  const updateItem = (item)=>{
    setItem(item)
    setOpen2(true)
  }
  return (
    <>
      <Container>
        <DashboardHeading title='Credit Cards' responsive = {false}>
          <Button color='primary' onClick={() => setOpen(true)}>Add Credit Card</Button>
        </DashboardHeading>
        <CardWrapper>
          <AdminOriginalCard>
            <CardInnerWrapper>
              <CardHeader>
                <BsCreditCard />
                Credit Cards
              </CardHeader>
              <CardBody>
                 {
                  cards.length == 0 ?  <NoResult
                    content='No credit cards found'
                  /> 
                  :
                  cards.map((item, i) => (
                    <CreditCardItem item = {item} onUpdate = {updateItem} />
                  )) 
                 }
              </CardBody>
            </CardInnerWrapper>
          </AdminOriginalCard>
        </CardWrapper>
      </Container>
      <Modal
        width='450px'
        open={open}
        onClose={() => setOpen(false)}
      >
        <AddCredit onClose={() => setOpen(false)} />
      </Modal>
      <Modal
        width='450px'
        open={open2}
        onClose={() => setOpen2(false)}
      >
        <UpdateCredit onClose={() => setOpen2(false)} item = {item} />
      </Modal>


    </>
  )
}
