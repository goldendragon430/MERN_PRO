import React, { useState } from 'react'
import { LayoutContainer } from '../../shared'
import { useNavigate } from 'react-router-dom'
import GoVerified from '@meronex/icons/go/GoVerified'
import { Button, Input } from '../../../styles'
import AiFillEye from '@meronex/icons/ai/AiFillEye'
import { useForm } from 'react-hook-form'
import { useSession } from '../../../contexts/SessionContext'
import { useApi } from '../../../contexts/ApiContext'
import { toast } from 'react-toastify'
import validator from 'validator';
import { CheckBox } from '../../shared/CheckBox' 
import {
  Container,
  LeftWrapper,
  RightWrapper,
  Details,
  DetailContent,
  Head,
  Heading,
  HeadDes,
  FormWraper,
  FormRow,
  FormLabel,
  InputWrapper,
  ErrorMessage
} from './styles'

export const SignUp = () => {
  const nagative = useNavigate()
  const [{ doPost }] = useApi()
  const { register, handleSubmit, formState: { errors }} = useForm()
  const [isLoading, setIsLoading] = useState(false)
  const [isBusiness,setIsBusiness] = useState(false)
  const [isShowPassword, setIsShowPassword] = useState(false);
  
  const phoneValidation =  (value) => {
    const regex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
    return regex.test(value);
  }
  
  const onSubmit = async (values) => {
    // nagative('/signup-verify',{state:values}); 
    // return;
    
   const email_phone = values.email;
   const isValid = validator.isEmail(email_phone);
   const isPhone =  phoneValidation(email_phone);
   values['isBusiness'] = isBusiness
    if(isValid == true){
      values['type'] = 'email';
    }
    else if(isPhone == true){
      values['type'] = 'phone';
    }
    else{
      toast('Please enter the email or phone number correctly', { type: 'error' })
      return;
    }
    doPost('auth/sendcode', values)
    nagative('/signup-verify',{state:values}); 
    // const response = await doPost('auth/sendcode', values)  
    // try{
    //   if(response.msg=='failed'){
    //     toast("Please confirm your input again.", { type: 'error' })
    //   }
    //   else {
    //          nagative('/signup-verify',{state:values}); 
    //       }
    //     }
    // catch(err){
    //       toast(err, { type: 'error' })
    //     }  
}

  return (
    <LayoutContainer>
      <Container>
        {/* <LeftWrapper onClick={() => nagative('/landing/aitch/')}>
          <img src="https://limewire.com/hc_content_aitch_cover.92bbc219.jpg" alt='' />
          <Details>
            <div>
              <div>Close To Home</div>
              <DetailContent>
                <img src='https://d2tg7hjmtin7hh.cloudfront.net/thumbs/creator_page_avatar/2843/28433c6b-8efa-453f-bd4f-73b4314862fc_small.png' alt='' />
                <span>Aitch</span>
                <GoVerified />
              </DetailContent>
            </div>
            <div>
              Cooming Soon
            </div>
          </Details>
        </LeftWrapper> */}

        <RightWrapper>
          <Head>
            <Heading>Sign Up</Heading>
            <HeadDes>Join BlockReward to buy, sell and browse NFTs</HeadDes>
          </Head>
          <FormWraper onSubmit={handleSubmit(onSubmit)}>
            <FormRow error={errors?.email}>
              <FormLabel>EMAIL or Phone number</FormLabel>
              <Input
                placeholder='Enter email address or phone number'
                autoComplete='off'
                {...register(
                  'email',
                  {
                    required: {
                      value: true,
                      message: 'The field is required*'
                    }
                    // ,
                    // pattern: {
                    //   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    //   message: 'Invalid email address'
                    // }
                  }
                )}
              />
              {errors?.email && <ErrorMessage>{errors?.email?.message}</ErrorMessage>}
            </FormRow>
            <FormRow error={errors?.password}>
              <FormLabel>
                <span>Password</span>
              </FormLabel>
              <InputWrapper>
                <Input
                  type={isShowPassword ? 'text' : 'password'}
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
                <AiFillEye onClick={()=>{setIsShowPassword(!isShowPassword)}}/>
              </InputWrapper>
              {errors?.password && <ErrorMessage>{errors?.password?.message}</ErrorMessage>}
            </FormRow>
            {/* <CheckBox title = "I'm a Business Manager" onClick = {setIsBusiness}/>   */}
            <FormRow>
              By signing up, you agree to the <a href="./terms" target="_blank" rel="noreferrer">Terms and Conditions</a> and <a href="./privacy" target="_blank" rel="noreferrer">Privacy Policy</a> and to receive updates from BlockReward.
            </FormRow>
            <FormRow>
              <Button
                color="primary"
                type='submit'
                isLoading={isLoading}
              >
                Sign Up
              </Button>
            </FormRow>
          </FormWraper>
        </RightWrapper>
      </Container>
    </LayoutContainer>
  )
}