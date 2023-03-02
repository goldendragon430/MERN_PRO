import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px 0px;
  // max-width:1050px;
  @media (min-width: 1200px) {
    padding: 20px 0px 20px 0px;
  }
`
export const AccountBalance = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  >span{
    margin-left:20px;
  }
`
export const Option = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;

  > span {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }
`

export const WalletList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
export const CardWrapper = styled.div`
  position: relative;
  box-shadow: 0 7px 14px rgb(60 66 87 / 10%), 0 3px 6px rgb(0 0 0 / 10%);
  border-radius: 10px;
  background-color: ${props => props.theme.colors.backgroundDark};
  margin-bottom: 20px;
`

export const CardInnerWrapper = styled.div`
  padding: 15px 20px;
`

export const CardBody = styled.div`
  margin-top: 15px;
  height: 300px;
`

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 15px;
  margin-bottom: 10px;
  > svg {
    margin-right: 6px;
  }
`