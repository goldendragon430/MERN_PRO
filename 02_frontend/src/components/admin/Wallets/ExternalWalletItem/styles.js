import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width:600px;
  @media (min-width: 768px) {
    width: calc(50% - 10px);
  }
`

export const Heading = styled.div`
  padding: 15px 20px 0;
  display: flex;
  align-items: center;
  
  img{
    width : 20px;
    height : 20px;
    margin-right : 5px;
  }
  justify-content:space-between;
`

export const CardContent = styled.div`
  padding: 15px 20px;
  padding-top: 5px;
  > h4 {
    font-size: 20px;
    font-weight: 600;
  }
  p {
    font-size: 14px;
    color: ${props => props.theme.colors.gray};
    margin-top:8px;
   
  }
  svg{
    cursor:pointer;
    margin-left:10px;
  }
`

export const CardFooter = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  padding: 15px 20px 17px;
`
export const HeadingContainer = styled.div`
display: flex;
align-items: center;
p{
  font-size:12px;
  margin-left:3px;
}
`
export const TransactionItem = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 40px;
  padding: 0 16px;
  font-size: 14px;
  background-color: ${props => props.theme.colors.iconDark};
  color: white;
  transition: all 0.3s linear;
  svg {
    font-size: 18px;
    margin-right: 5px;
    display: none;
  }
  span {
    font-size: 14px;
  }
  &:first-child {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
  &:last-child {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  &:hover {
    background-color: #3c4256;
  }

  @media (min-width: 450px) {
    svg {
      display: block;
    }
  }
`