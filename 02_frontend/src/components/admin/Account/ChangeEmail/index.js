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

export const ChangeEmail = (props) => {
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
        <span>Change Email</span>
      </Heading>
      <Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <label>New Email</label>
            <Input
              placeholder='Enter email address'
              styleType='admin'
              autoComplete='off'
              {...register(
                'email',
                {
                  required: {
                    value: true,
                    message: 'The field is required*'
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                }
              )}
            />
            {errors?.email && <ErrorMessage>{errors?.email?.message}</ErrorMessage>}
          </FormGroup>
          <Button color='primary' type='submit'>
            Save Changes
          </Button>
        </Form>
      </Body>
    </Container>
  )
}
