import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 30px;
`
 
export const Table = styled.table`
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-collapse: collapse;
  width: 100%;

  th, td {
    padding: 10px 15px;
    font-size: 14px;
    text-align: left;
  }
  th {
    font-weight: 600;
  }
  
  tr td:first-child{
    @media (max-width: 700px) {
      min-width : 100px  
    }    
  }
`

export const THead = styled.thead`
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
`

export const TBody = styled.tbody`
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: ${props => props.theme.colors.primary};
    margin-left: 5px;
    font-size: 16px;
  }
`
export const PagenateCotainer = styled.div`
display : flex;
margin-top: 10px;
justify-content: flex-end;
button{
margin-left:5px
}
p{
  margin-right:30px;
}
@media (max-width: 1027px) {
  p{
    margin-right:10px;
  }
  
}

`
export const PagenateButton = styled.button`
 font-size: 16px;
 background:${props => props.theme.colors.backgroundDark};
 color: ${props => props.theme.colors.white};
 border: 0px solid gray;
 cursor : pointer;
 &:hover{
  color : ${props => props.theme.colors.primary};
 }
 &:disbled{
  color:gray
 }
`
 
export const Title = styled.h2`
margin-left : 0px;
margin-bottom : 20px;
`
export const SubContainer = styled.div`
display : flex;
justify-content: space-between;

`