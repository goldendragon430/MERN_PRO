import styled from 'styled-components'

export const ComponentWraper = styled.div`
  background: ${props => props.theme.colors.backgroundLightGray};
`

export const Container = styled.div`
  border-top: 2px dashed ${props => props.theme.colors.borderColor};
  padding: 20px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  
  @media (min-width: 1200px) {
    flex-direction: row;
  }
`

export const ItemContainer = styled.div`
  font-size: 15px;
  padding: 10px 0px;
  display: flex;
  @media (min-width: 1200px) {
    padding: 20px 0px;
  }
`
export const ItemTitle = styled.div`
  font-weight: bold;
`
export const ItemValue = styled.div`
  margin-left: 10px;
  font-weight: 100;
`