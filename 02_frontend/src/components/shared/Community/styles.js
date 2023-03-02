import styled from 'styled-components'

export const Container = styled.div`
  background: ${props => props.theme.colors.backgroundLightGray};
  width: 100%;
  min-height: 80px;
  text-align: center;
  letter-spacing: -.2px;
  border-radius: 10px;
  flex-flow: row;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  font-weight: 100;
  display: flex;
  overflow: hidden;  
  flex-direction: column;
  font-size: 15px;
  @media (min-width: 1200px) {
    flex-direction: row;
  }
`

export const CommunityLinks = styled.div`
  display: flex;
  overflow-x: auto;
  max-width: 100%;
  padding: 20px 10px 15px;
  flex-direction: column;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors.textPrimary};
    text-decoration: none;
    margin-right: 0px;
    margin-bottom: 30px;
    &::last-child {
      margin-right: 0px;
    }
    span {
      margin-left: 6px;
      white-space: nowrap;
    }

    @media (min-width: 768px) {
      margin-bottom: 0px;
      margin-right: 35px;
    }
  }
  
  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1200px) {
    padding: 0px;
  }
`