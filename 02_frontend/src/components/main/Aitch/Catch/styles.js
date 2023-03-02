import styled, { css } from 'styled-components'

export const Container = styled.div`
  padding: 50px 0px;
  background-color: #00934B;
  background-repeat: no-repeat;
  background-size: contain;

  ${({ bgimage }) => css`
    background-image: url(${bgimage});
  `}

  @media (min-width: 990px) {
    padding: 100px 0px;
  }
`

export const Content = styled.div`
  padding-bottom: 40px;
  max-width: 556px;
  margin: 0px auto;
  text-align: center; 

  > h2 {
    font-size: 38px;
    font-weight: 500;
    margin-bottom: 5px;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  button {
    color: ${props => props.theme.colors.yellow };
  }
`

