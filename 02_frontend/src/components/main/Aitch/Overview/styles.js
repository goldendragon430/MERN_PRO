import styled from 'styled-components'

export const ContainerStyled = styled.div`
  padding: 50px 0px;
  background-color: #00934B;
  background-repeat: no-repeat;
  background-size: contain;

  @media (min-width: 990px) {
    padding: 100px 0px;
  }
`

export const InnerContainer = styled.div`
  > h2 {
    font-size: 28px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 40px;
    @media (min-width: 990px) {
      font-size: 38px;
    }
  }
`

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 100%;
  margin: 0px auto;
  max-width: 540px;
  
  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 990px) {
    flex-direction: row;
    max-width: 100%;
  }
`

export const ItemWrapper = styled.div`
  background-color: ${props => props.theme.colors.backgroundColor};
  padding: 50px;
  border-radius: 24px;
  text-align: center;
  width: 100%;
  margin: 20px 0px;

  @media (min-width: 990px) {
    width: calc(33.333% - 20px);
  }

  > img {
    width: 50px;
    margin-bottom: 25px;
  }
  
  > h3 {
    font-size: 30px;
    font-weight: 400;
    margin-bottom: 10px;
  }

  > p{
    font-weight: 100;
  }
`

export const Container = (props) => {
  return (
    <ContainerStyled {...props} style={{backgroundImage: `url(${props.bgimage})`}}>
      {props.children}
    </ContainerStyled>
  )
}

