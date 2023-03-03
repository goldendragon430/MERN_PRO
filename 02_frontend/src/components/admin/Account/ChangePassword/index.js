import React from 'react'
import { Button, Input } from '../../../../styles'
import { useForm } from 'react-hook-form'
import {
  Container,
  Heading,
  Body,
  Form,
  FormGroup,
  ErrorMessage
} from './styles'

export const ChangePassword = (props) => {
  const {
    onClose
  } = props

  const { register, handleSubmit, formState: { errors }} = useForm()

  const onSubmit = (values) => {
    console.log('value')
    onClose && onClose()
  }

  return (
    <Container>
      <Heading>
        <span>Change Password</span>
      </Heading>
      <Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <label>New Password</label>
            <Input
              placeholder='••••••••'
              styleType='admin'
              type='password'
              autoComplete='off'
              {...register(
                'password',
                {
                  required: {
                    value: true,
                    message: 'The field is required*'
                  },
                  maxLength: {
                    value: 30,
                    message: `The characters must be less than 30`
                  },
                  minLength: {
                    value: 8,
                    message: `The characters must be more than 8`
                  }
                }
              )}
            />
            {errors?.password && <ErrorMessage>{errors?.password?.message}</ErrorMessage>}
          </FormGroup>
          <Button color='primary' type='submit'>
            Save Changes
          </Button>
        </Form>
      </Body>
    </Container>
  )
}
