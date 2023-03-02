import styled from 'styled-components'

export const ComponentWraper = styled.div`
  background: ${props => props.theme.colors.lightGray};
  padding: 40px 0;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1200px) {
    align-items: flex-start;
    flex-direction: row;
  }
`
export const LeftWraper = styled.div`
  width: 100%;
  flex-flow: wrap;
  display: flex;
  @media (min-width: 1200px) {
    width: 860px;
    flex-direction: row;
  }
`
export const UtilityItem = styled.div`
  background: ${props => props.theme.colors.backgroundColor};
  border-radius: 10px;
  margin-bottom: 25px;
  padding: 18px 20px;
  box-shadow: 0 0 10px rgb(4 17 29 / 20%);
  height: unset;
  width: 100%;
  margin-right: 0px;
  p {
    font-size: 15px;
    line-height: 22px;    
  }

  @media (min-width: 1200px) {
    width: 405px;
    height: 150px;
    margin-right: 25px;
  }
`

export const ItemTitle = styled.div`
  display: flex;
  align-items: center;
  letter-spacing: -.2px;
  margin-bottom: 9px;
  font-weight: 600;
  span {
    margin-left: 6px;
  }
`

export const RightWraper = styled.a`
  width: 413px;
  max-width: 100%;
  height: fit-content;
  background: ${props => props.theme.colors.backgroundColor};
  box-shadow: 0 0 10px rgb(4 17 29 / 20%);
  border-radius: 10px;
  color: ${props => props.theme.colors.textPrimary};
  text-decoration: none;
`

export const RightHead = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  background: ${props => props.theme.colors.lightDark};
  font-size: 14px;
  border-radius: 10px 10px 0px 0px;
  align-items: center;
`

export const RightMain = styled.div`
  font-size: 12px;
  line-height: 1.7;
  padding: 15px 20px 0px;
`

export const RightFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  font-size: 14px;
  align-items: center;
`

export const UtilityLogo = styled.span`
  font-size: 20px;
  font-weight: 600;
`

