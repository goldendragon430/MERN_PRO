import styled from 'styled-components'

export const Container = styled.div`
  padding: 80px 0px;
  position: relative;
`

const HeroBackDropStyled = styled.div`
  width: 100%;
  height: 382px;
  opacity: .4;
  filter: blur(8px);
  background-size: cover;
  background-position-x: 50%;
  position: absolute;
  top: 0;
  -webkit-mask: linear-gradient(#fff,rgba(0,0,0,0));
`
export const HeroBackDrop = (props) => {
  return (
    <HeroBackDropStyled
      {...props}
      style={{ backgroundImage: `url(${props.bgimage})` }}
    >
      {props.children}
    </HeroBackDropStyled>
  )
}

export const FormContainer = styled.div`
  max-width: 100%;
  width: 370px;
  margin: 0px auto;
  padding: 0px 10px;
  position: relative;
`

export const Head = styled.div`
  margin-bottom: 32px;
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
  margin-bottom: 32px;
  color: ${props => props.theme.colors.gray};
`

export const FormLabel = styled.label`
  font-weight: 700;
  line-height: 1;
  display: block;
  margin-bottom: 12px;
`
