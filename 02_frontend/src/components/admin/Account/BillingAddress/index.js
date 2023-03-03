import React,{useEffect,useState} from 'react'
import { Button, Input ,Select } from '../../../../styles'
import { AdminCard } from '../../../shared'
import { useForm } from 'react-hook-form'
import {toast} from 'react-toastify'
import {
  CardForm,
  FormGroup,
  ErrorMessage,
  Option
} from './styles'
import { useApi } from '../../../../contexts/ApiContext'
import { CheckBox } from '../../../shared/CheckBox'
export const BillingAddress = () => {
  const { register, handleSubmit, formState: { errors }} = useForm()
  const [{doPost}] = useApi()
  const [isOwner,setIsOwner] = useState(false)
  const [firstname,setFirstName] = useState('')
  const [lastname,setLastName] = useState('')
  const [company,setCompany] = useState('')
  const [vat,setVat] = useState('')
  const [phone,setPhone] = useState('')
  const [address,setAddress] = useState('')
  const [postalcode,setPostalCode] = useState('')
  const [city,setCity] = useState('')
  const [companyList,setCompanyList] = useState([])
  const [employeer,setEmployeer]  = useState('')
  const [type,setType]  = useState('RESTAURANTS_AND_BARS')
  const [key,setKey]  = useState('sk_test_51M9f95FmLzbluQIrHMtdoSU0n9JwUuSIC0dKMZXXPSiUIfQASVohNMJGdYvJADHtGZ1dIp98IINX8O7qy7uQlY2w00sFsIPRo5')
  const typeList = [
    { value: 'RESTAURANTS_AND_BARS', content: <Option><span className='name'>Restaurants and Bars</span></Option> },
    { value: 'RETAIL', content: <Option><span className='name'>Retail</span></Option> },
    { value: 'BEAUTY', content: <Option><span className='name'>Beauty</span></Option> },
    { value: 'HEALTH_AND_FITNESS', content: <Option><span className='name'>Health and fitness</span></Option> },
  ]  



  const phoneValidation =  (value) => {
    const regex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
    return regex.test(value);
  }
  
  function isValidZip(sZip) {
    return/^(?:[A-Z0-9]+([- ]?[A-Z0-9]+)*)?$/.test(sZip);
 }
  const onSubmit = async (values) => {
    console.log(phone)
    const isPhone =  phoneValidation(phone);
    if(isPhone == false){
      toast("inValid Phone number",{type:'error'})
      return;
    }

    const isZip =  isValidZip(postalcode);
    if(isZip == false){
      toast("inValid Postal Code",{type:'error'})
      return;
    }
    if(firstname == ''){
      toast("Please enter first name",{type:'error'})
      return;
    }
    if(lastname == ''){
      toast("Please enter last name",{type:'error'})
      return;
    }
    if(address == ''){
      toast("Please enter address",{type:'error'})
      return;
    }
    if(city == ''){
      toast("Please enter city",{type:'error'})
      return;
    }
    if(isOwner && key == '')
    {
     toast("Please enter stripe key",{type:'error'})
      return;
    }

    values['firstname'] = firstname
    values['lastname'] = lastname
    values['company'] = company
    values['vat'] = vat
    values['phone'] = phone
    values['address'] = address
    values['postalcode'] = postalcode
    values['city'] = city
    values['employeer'] = employeer
    values['key'] = key
    values['type'] = type
    if(!isOwner)
      values['key'] = ''
    const response = await doPost('auth/update_detail_info',{
    data : values,
    address : localStorage.getItem('address'),
    isOwner : isOwner
  })
    if(response.error || response.result == 'failed'){
      toast('Server Error',{type:'error'})
      return;
    }
    else{
      toast('Successfully saved',{type:'success'})
    }
  }
useEffect(()=>{
  async function fetchData(){

    const Response = await doPost('auth/get_company_list',{})
    if(Response.error || Response.result == 'failed'){
      toast("Server Error",{type:'error'})
      return;
    }else{
      const company_list = Response.data;
      var temp = []
      for(var i = 0; i < company_list.length ; i++){
          temp.push({value:company_list[i]._id,content:<Option><span className='name'>{company_list[i].company}</span></Option>})
      }
      setCompanyList(temp)
    }
    const response = await doPost('auth/get_detail_info',{
      address : localStorage.getItem('address')
    })
    if(response.error || response.result == 'failed') {
      toast("Server Error",{type:'error'})
    }
    else{
      
      setFirstName(response.data.firstname)  
      setLastName(response.data.lastname)  
      setCompany(response.data.company)  
      setVat(response.data.vat)  
      setPhone(response.data.phone)  
      setAddress(response.data.address)  
      setPostalCode(response.data.postalcode)  
      setCity(response.data.city)         
      setIsOwner(response.data.owner == 1)
      setEmployeer(response.data.employeer)
      setType(response.data.type)
    }
  }
  fetchData()
//write your effect here...
},[])
  return (
    <AdminCard title='Billing Address'>
      <CheckBox title = "I'm Business owner" checked = {isOwner} onClick = {setIsOwner}/>
      <CardForm onSubmit={handleSubmit(onSubmit)}>
        <FormGroup isHalf>
          <p>First Name</p>
          <Input
            styleType='admin' 
            value = {firstname}
           
            
            onChange = {e=>setFirstName(e.target.value)}
            autoComplete = 'off'
          />
        {errors?.firstname && <ErrorMessage>{errors?.firstname?.message}</ErrorMessage>}
        </FormGroup>
        <FormGroup isHalf>
          <p>Last Name</p>
          <Input
            styleType='admin'
            value = {lastname}
            onChange = {e=>setLastName(e.target.value)}
            autoComplete = 'off'
          />
           {errors?.lastname && <ErrorMessage>{errors?.lastname?.message}</ErrorMessage>}
        </FormGroup>
        <FormGroup isHalf>
          <p>Company Name</p>
          {isOwner ? <Input
            styleType='admin'
            placeholder=''
            value = {company}
            
            onChange = {e=>setCompany(e.target.value)}
            autoComplete = 'off'
          />:
          <Select
              notReload
              placeholder='Select company'
              options={companyList}
              defaultValue = {employeer}
              onChange={val => setEmployeer(val)}
            />}
        </FormGroup>
         {isOwner &&<FormGroup isHalf>
          <p>Company Type</p>
         
          <Select
              notReload
              placeholder='Select type'
              options={typeList}
              defaultValue = {type}
              onChange={val => setType(val)}              
            />
              
        </FormGroup>
        }
        <FormGroup isHalf>
          <p>VAT Number / Tax ID</p>
          <Input
            styleType='admin'
            placeholder='optional'
            value = {vat}
             
            onChange = {e=>setVat(e.target.value)}
            autoComplete = 'off'
          />
        </FormGroup>
         {
          isOwner &&
          <FormGroup>
          <p>Stripe Key</p>
          <Input
            styleType='admin'
            value = {key}
            onChange = {e=>setKey(e.target.value)}
            autoComplete = 'off'
          />
           {errors?.key && <ErrorMessage>{errors?.key?.message}</ErrorMessage>}
          </FormGroup>
        }
        <FormGroup>
          <p>Phone Number</p>
          <Input
            styleType='admin'
            value = {phone}
             
            onChange = {e=>setPhone(e.target.value)}
            autoComplete = 'off'
          />
           {errors?.phone && <ErrorMessage>{errors?.phone?.message}</ErrorMessage>}
        </FormGroup>
        <FormGroup>
          <p>Address</p>
          <Input
            styleType='admin'
            value = {address}
             
            onChange = {e=>setAddress(e.target.value)}
            autoComplete = 'off'
          />
           {errors?.address && <ErrorMessage>{errors?.address?.message}</ErrorMessage>}
        </FormGroup>
        <FormGroup isHalf>
          <p>Postal Code</p>
          <Input
            styleType='admin'
            value = {postalcode}
            
            onChange = {e=>setPostalCode(e.target.value)}
            autoComplete = 'off'
          />
           {errors?.postalcode && <ErrorMessage>{errors?.postalcode?.message}</ErrorMessage>}
        </FormGroup>
        <FormGroup isHalf>
          <p>City</p>
          <Input
            styleType='admin'
            value = {city}
            
            onChange = {e=>setCity(e.target.value)}
            autoComplete = 'off'
          />
           {errors?.city && <ErrorMessage>{errors?.city?.message}</ErrorMessage>}
        </FormGroup>
        <Button color='primary'>Save Changes</Button>
      </CardForm>
    </AdminCard>
  )
}