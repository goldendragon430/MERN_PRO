import React, { useRef, useState ,useEffect } from 'react'
import { DashboardHeading } from '../../shared/DashboardHeading'
import { useForm } from 'react-hook-form'
import MdEdit from '@meronex/icons/md/MdEdit'
import {
  Container,
  CardForm,
  FormGroup,
  PhotoUpload
} from './styles'
import { Button, Input } from '../../../styles'
import { AdminCard } from '../../shared'
import { toast } from 'react-toastify'
import { useApi } from '../../../contexts/ApiContext'

export const Profile = () => {
  const [imagedata, setImageData] = useState(null)
  const inputRef = useRef()
  const { register, handleSubmit, formState: { errors }} = useForm()
  const address = localStorage.getItem('address')
  const url = process.env.REACT_APP_SERVER_URL + 'fileservice/get_profile_file?name=' + address + '.jpg' ;
  const [image, setImage] = useState(url)
  const[{doPost}] = useApi()
  const[username,setUserName] = useState('')
  const[twiter,setTwiter] = useState('')
  const[instagram,setInstagram] = useState('')
  
  const handleUploadImage = e => {
    const [file] = e.target.files;
    setImageData(e.target.files[0])
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }

  const onSubmit = async (values) => {
    
    const formData = new FormData();
    formData.append("files", imagedata);
    formData.append("name", address);
    formData.append("blockName",username);
    formData.append("twiterName",twiter);
    formData.append("instagramName",instagram);

    const url = process.env.REACT_APP_SERVER_URL + 'fileservice/upload_profile';
    const res = await fetch(url, {
        method: "POST",
        body: formData 
    }).then((res) => {
        if(res.data == "failed" || res.error){
            toast("Server Error",{type:'error'})
        }
        else{
            toast.success("Success")
        }
    });

  }
 useEffect(()=>{
  async function fetchData(){
    const response = await doPost('auth/get_profile_info',{
      address : localStorage.getItem('address')
    })
    if(response.error || response.result == 'failed'){
      toast.error("Server Error")
    }
    else{
      setUserName(response.username)
      setTwiter(response.twiter)
      setInstagram(response.instagram)
     
    }
  }
  fetchData()
 },[])
  return (
    <Container>
      <DashboardHeading title='Profile' />
      <AdminCard title='Profile'>
        <CardForm onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <p>Profile Picture</p>
            <PhotoUpload bgimage={image} onClick={() => inputRef?.current.click()}>
              <input type='file' onChange={handleUploadImage} ref={inputRef}  />
              <MdEdit />
            </PhotoUpload>
          </FormGroup>
          <FormGroup>
            <p>Username</p>
            <Input
              styleType='admin'
              placeholder='Enter your blockreward @username'
              {...register('blockreward_username')}
              value = {username}
              onChange = {e=>setUserName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <p>Twitter Handle</p>
            <Input
              styleType='admin'
              placeholder='Enter your Twitter @username'
              {...register('twitter_username')}
              value = {twiter}
              onChange = {e=>setTwiter(e.target.value)}
              />
          </FormGroup>
          <FormGroup>
            <p>Instagram Handle</p>
            <Input
              styleType='admin'
              placeholder='Enter your Instagram @username'
              {...register('instagram_username')}
              value = {instagram}
              onChange = {e=>setInstagram(e.target.value)}
            />
          </FormGroup>
          <Button
            color='primary'
            type='submit'
          >
          Save Changes
          </Button>
        </CardForm>
      </AdminCard>
    </Container>
  )
}
