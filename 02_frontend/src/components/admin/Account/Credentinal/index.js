import React, { useState } from 'react'
import { Input } from '../../../../styles'
import { AdminCard } from '../../../shared'
import { useSession } from '../../../../contexts/SessionContext'
import { Modal } from '../../../shared'
import {
  CardForm,
  FormGroup,
  FormGroupHead
} from './styles'
import { ChangeEmail } from '../ChangeEmail'
import { ChangePassword } from '../ChangePassword'
 
export const Credentinal = () => {
  const [{ user }] = useSession()
  const [emailOpen, setEmailOpen] = useState(false)
  const [passwordOpen, setPasswordOpen] = useState(false)
  const email =  localStorage.getItem('email')
   
  return (
    <>
      <AdminCard
        title='Account Credentials'
      >
        <CardForm>
          <FormGroup>
            <FormGroupHead>
              <p>Email or phone number</p>
              <span onClick={() => setEmailOpen(true)}>Change Email</span>
            </FormGroupHead>
            <Input
              styleType='admin'
              placeholder='Enter your email'
              defaultValue={user?.email || ''}
              disabled
              value = {email}
            />
          </FormGroup>
          <FormGroup>
            <FormGroupHead>
              <p>Password</p>
              <span onClick={() => setPasswordOpen(true)}>Change Password</span>
            </FormGroupHead>
            <Input
              styleType='admin'
              type='password'
              placeholder='••••••••'
              disabled
            />
          </FormGroup>
        </CardForm>
      </AdminCard>
      <Modal
        width='420px'
        open={emailOpen}
        onClose={() => setEmailOpen(false)}
      >
        <ChangeEmail onClose={() => setEmailOpen(false)} />
      </Modal>
      <Modal
        width='420px'
        open={passwordOpen}
        onClose={() => setPasswordOpen(false)}
      >
        <ChangePassword onClose={() => setPasswordOpen(false)} />
      </Modal>
    </>
  )
}
