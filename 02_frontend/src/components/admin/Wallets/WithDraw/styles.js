import styled from 'styled-components'

export const Container = styled.div``

export const Heading = styled.div`
  padding: 15px 20px 12px;
  display: flex;
  align-items: center;
  svg {
    font-size: 24px;
    width: 24px;
  }
  span {
    max-width: 300px;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 20px;
    font-weight: 500;
    display: inline-block;
    overflow: hidden;
    margin-left: 5px;
  }
`

export const Body = styled.div`
  padding: 0 20px 15px;
`

export const Description = styled.p`
  line-height: 20px;
  margin-bottom: 10px;
  font-size: 14px;
`

export const FromWrapper = styled.div`
  label {
    font-size: 14px;
    font-weight: 600;
  }
`

export const FromBox = styled.div`
  background-color: ${props => props.theme.colors.backgroundLightDark};
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 6px 16px;
  
  > div {
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span.price {
      font-weight: 600;
    }
  }
`

export const WraningMessage = styled.div`
  background: ${props => props.theme.colors.warning1};
  border: 1px solid ${props => props.theme.colors.warning1};
  border-radius: 10px;
  margin-bottom: 15px;
  padding: 5px 10px;
  font-size: 14px;
  line-height: 20px;
`

export const ButtonWrapper = styled.div`
  display: flex;
  button:first-child {
    margin-right: 10px;
  }
`

export const FormGroup = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  label {
    font-size: 14px;
    font-weight: 600;
  }
`