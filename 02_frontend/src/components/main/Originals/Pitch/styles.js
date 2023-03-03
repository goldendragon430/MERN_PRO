import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`

export const LeftWrapper = styled.div`
  width: 100%;
  padding-top: 65px;
  padding-bottom: 30px;
  > h2 {
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 15px;
  }
  
  @media (min-width: 1024px) {
    padding-bottom: 65px;
    width: 50%;
  }
`

const RightWrapperStyled = styled.div`
  width: 100%;
  background-position-x: 50%;
  background-position-y: center;
  background-size: 100%;
  background-repeat: no-repeat;

  @media (min-width: 1024px) {
    width: 540px;
  }
`
export const RightWrapper = (props) => {
  return (
    <RightWrapperStyled
      {...props}
      style={{ backgroundImage: `url(${props.bgimage})` }}
    >
      {props.children}
    </RightWrapperStyled>
  )
}