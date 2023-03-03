import React from 'react'
import { Button, Input, OriginalSelect } from '../../../../styles'
import { useForm } from 'react-hook-form'
import {
  Container,
  Heading,
  Body,
  FormGroup,
  FromWrapper,
  ButtonGroup
} from './styles'

export const Convert = (props) => {
  const { wallet, onClose } = props

  const { register, handleSubmit, formState: { errors }} = useForm()

  const onSubmit = (values) => {
    console.log(values)
    onClose && onClose()
  }

  return (
    <Container>
      <Heading>
        <span>Convert</span>
      </Heading>
      <Body onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <label>Convert from</label>
          <FromWrapper>
            <div className='transaction'>{wallet?.name}</div>
            <Input
              placeholder='Enter Amount'
              styleType='admin'
              autoComplete='off'
              {...register(
                'amount',
                {
                  required: {
                    value: true,
                    message: 'The field is required*'
                  }
                }
              )}
            />
          </FromWrapper>
          <p>0.00000 {wallet?.name} available to convert</p>
        </FormGroup>
        <FormGroup>
          <label>Convert to</label>
          <OriginalSelect>
            <option>BTC</option>
            <option>ETH</option>
            <option>ALGO</option>
          </OriginalSelect>
        </FormGroup>
        <ButtonGroup>
          <Button color='primary' type='submit'>Convert</Button>
          <Button color='primary' type='button' naked onClick={() => onClose()}>Cancel</Button>
        </ButtonGroup>
      </Body>
    </Container>
  )
}
