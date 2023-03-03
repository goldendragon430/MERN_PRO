import styled from 'styled-components'

export const Container = styled.div``

export const Heading = styled.div`
  padding: 15px 20px 12px;
  span {
    max-width: 300px;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 20px;
    font-weight: 500;
    display: inline-block;
    overflow: hidden;
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

export const DepositAddressWrapper = styled.div`
  label {
    font-size: 14px;
    font-weight: 600;
  }
`

export const DepositAddressBox = styled.div`
  word-break: break-all;
  background-color: ${props => props.theme.colors.backgroundLightDark};
  border-radius: 5px;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 13px;
  font-size: 14px;
  display: flex;
  svg {
    cursor: pointer;
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