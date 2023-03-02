import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: relative;
  box-shadow: 0 7px 14px rgb(60 66 87 / 10%), 0 3px 6px rgb(0 0 0 / 10%);
  border-radius: 10px;
  background-color: ${props => props.theme.colors.backgroundDark};
  margin-bottom: 20px;
  margin-top : 20px;
  
  width: 100%;
  max-width:600px;
  @media (min-width: 768px) {
    width: calc(50% - 10px);
  }


`

export const CardHeading = styled.div`
  align-items: center;
  padding: 15px 20px 0;
  display: flex;
  svg {
    font-size: 25px;
    margin-right: 5px;
  }
  span {
    font-size: 18px;
    font-weight: 600;
  }
`

export const CardBody = styled.div`
  padding: 25px 30px;
`
export const SubLayoutContainer = styled.div`
display:flex;
flex-wrap: wrap;
justify-content: space-around;
`
export const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 15px;
  p {
    font-size: 14px;
    font-weight: 600;
  }
  input {
    width: 100%;
  }
  ${({ isHalf }) => isHalf && css`
    @media (min-width: 769px) {
      width: calc(50% - 10px);
    }
  `}
`