import React, { useState, useRef } from 'react'
import { AdminCard } from '../../shared'
import { useForm } from 'react-hook-form'
import { DashboardHeading } from '../../shared/DashboardHeading'
import MdEdit from '@meronex/icons/md/MdEdit'
import MdcCheckDecagram from '@meronex/icons/mdc/MdcCheckDecagram'
import { Button, Input } from '../../../styles'
import {
  Container,
  CardForm,
  FormGroup,
  PhotoUpload,
  BannerPhoto,
  TextWrapper
} from './styles'
import { TextArea } from '../../../styles/Inputs'

export const Creator = () => {
  const [banner, setBanner] = useState(null)
  const [photo, setPhoto] = useState(null)
  const bannerRef = useRef()
  const profileRef = useRef()
  const { register, handleSubmit, formState: { errors }} = useForm()

  const handleUploadImage = (e, type) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        if (type === 'banner') setBanner(e.target.result)
        else setPhoto(e.target.result)
      };
      reader.readAsDataURL(file);
    }
  }

  const onSubmit = async (values) => {
    console.log(values)
  }

  return (
    <Container>
      <DashboardHeading title='New Creator Page' />
      <AdminCard title='Creator Profile'>
        <CardForm onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <p>Banner Image</p>
            <BannerPhoto bgimage={banner} onClick={() => bannerRef?.current.click()}>
              <input type='file' onChange={(e) => handleUploadImage(e, 'banner')} ref={bannerRef} />
              <MdEdit />
              {!banner && <img src='https://limewire.com/placeholder_banner.4787374d.svg' alt='' />}
            </BannerPhoto>
          </FormGroup>
          <FormGroup>
            <p>Profile Picture</p>
            <PhotoUpload bgimage={photo} onClick={() => profileRef?.current.click()}>
              <input type='file' onChange={(e) => handleUploadImage(e, 'photo')} ref={profileRef} />
              <MdEdit />
              {!photo && <img src='https://limewire.com/placeholder_square.c8b33e51.svg' alt='' />}
            </PhotoUpload>
          </FormGroup>
          <FormGroup>
            <p>Creator Name</p>
            <Input
              styleType='admin'
              placeholder='Enter Creator Name'
            />
          </FormGroup>
          <FormGroup>
            <p>Creator Username</p>
            <Input
              styleType='admin'
              placeholder='Enter Creator Username'
            />
          </FormGroup>
          <FormGroup>
            <p>Creator Bio</p>
            <TextArea
              placeholder='Maximum: 200 words'
              styleType='admin'
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
      <AdminCard
        title='Social Media Verification'
        headIcon={<MdcCheckDecagram />}
      >
        <TextWrapper>
        Verified creators are more likely to get featured on LimeWire. After your creator page is set up, you can request a black verification checkmark by verifying ownership of your Twitter or Instagram account.
        </TextWrapper>
      </AdminCard>
    </Container>
  )
}
