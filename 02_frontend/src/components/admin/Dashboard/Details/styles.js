import styled from 'styled-components'

export const AccountBalance = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  font-weight: 200;
  span {
    margin-right: 12px;
  }
  .amount {
    margin: 0px;
    font-weight: 500;
  }
`

export const StatusBar = styled.div`
  background-color: ${props => props.theme.colors.backgroundLightGray};
  width: 100%;
  border-radius: 10px;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 14px;
  display: flex;
  font-weight: 100;
  overflow: hidden;
  flex-direction: column;
  padding: 0;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 0 0 0 15px;
  }
`

export const Billing = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  padding-top: 0px;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};

  @media (min-width: 768px) {
    padding: 0px;
    flex-direction: row;
    border-bottom: none;
  }
`

export const VerifyStatus = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  padding-top: 0px;

  button {
    padding-right: 35px;
    position: relative;
    border-radius: 10px;

    @media (min-width: 768px) {
      border-radius: 0px;
    }
    
    &:hover{
      > svg {
        transform: translateX(4px);
      } 
    }

    > svg {
      position: absolute;
      right: 10px;
      transition: all 0.3s;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 0px;
  }
`

export const Collecting = styled.div`
  padding: 10px 0;
  display: flex;
  align-items: center;
  > svg {
    font-size: 23px;
    margin-right: 6px;
  }
`
export const AddBilling = styled.div`
  padding: 10px 15px;
  margin-left: 10px;
  font-weight: 500;
  align-items: center;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  border: 1px solid  ${props => props.theme.colors.borderColor};
  cursor: pointer;

  &:hover{
   > svg {
    transform: translateX(4px);
   } 
  }

  > svg {
    transition: all 0.3s;
    margin-left: 10px;
  }

  @media (min-width: 768px) {
    border-radius: 0px;
    border-top: none;
    border-bottom: none;
    border-left: 1px solid ${props => props.theme.colors.borderColor};
    border-right: 1px solid ${props => props.theme.colors.borderColor};
  }
`
export const Veryfied = styled.div`
  align-items: center;
  display: flex;
  padding: 10px 15px;

  > svg {
    margin-right: 6px;
  }
`