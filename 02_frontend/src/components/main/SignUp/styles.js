import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 90px);
`

export const LeftWrapper = styled.div`
  margin-right: 100px;
  color: ${props => props.theme.colors.textPrimary};
  text-decoration: none;
  height: 325px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgb(4 17 29 / 25%);
  width: 500px;
  display: none;
  background-color: ${props => props.theme.colors.backgroundDark};

  > img {
    width: 100%;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
    height: 255px;
  }
  &:hover {
    cursor: pointer;
  }
  @media (min-width: 1200px) {
    display: block;
  }
`

export const Details = styled.div`
  display: flex;
  padding: 0px 20px 0px 20px;
  align-items: center;
  justify-content: space-between;
`

export const DetailContent = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 100;
  padding-top: 5px;

  > img {
    width: 23px;
    height: 23px;
    border-radius: 50%;
  }
  > span {
    margin: 0px 6px;
  }
  svg {
    color: ${props => props.theme.colors.primary};
  }
`

  
export const RightWrapper = styled.div`
  width: 350px;
  max-width: 100%;
`

export const Head = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  padding-bottom: 32px;
`
export const Heading = styled.div`
  text-align: center;
  letter-spacing: -.01em;
  margin-bottom: 0;
  font-size: 35px;
  font-weight: 600;
  line-height: 1.2;
`
export const HeadDes = styled.p`
    text-align: center;
    color: ${props => props.theme.colors.gray};
    letter-spacing: -.2px;
    margin-top: 20px;
    font-weight: 500;
    line-height: 25px;
`

export const FormWraper = styled.form`
  input, button {
    width: 100%;
  }
  a {
    color: ${props => props.theme.colors.primary};
  }
`
export const FormRow = styled.div`
  font-size: 12px;
  margin-top: 15px;
  text-align: center;
  color: ${props => props.theme.colors.gray};
  ${({ error }) => error && css`
    input {
      border-color: ${props => props.theme.colors.warning} !important;
    }
  `}
`

export const FormLabel = styled.label`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 12px;
`

export const InputWrapper = styled.div`
  background-color: ${props => props.theme.colors.lightGray};
  border-radius: 8px;
  position: relative;

  input {
    padding-right: 35px;
    width: 100%;
  }
  svg {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 20px;
    color: ${props => props.theme.colors.textGray};
    
    cursor: pointer;
    &:hover {
      color: ${props => props.theme.colors.textPrimary};
    }
  }
`

export const ErrorMessage = styled.p`
  font-size: 14px;
  color: ${props => props.theme.colors.warning};
  text-align: left;
  margin-top: 5px;
`
