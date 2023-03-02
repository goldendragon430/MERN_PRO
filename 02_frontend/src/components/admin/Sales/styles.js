import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px 0px;

  @media (min-width: 1200px) {
    padding: 20px 0px 20px 0px;
  }
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