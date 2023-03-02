import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 90px);
`

export const InnerContainer = styled.div`
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
  margin-top: 32px;
  text-align: center;
  color: ${props => props.theme.colors.gray};
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