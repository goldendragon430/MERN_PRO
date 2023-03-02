import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  padding-top: 30px;
  > img {
    height: 250px;
    width: 100%;
    border-radius: 15px;
    object-fit: cover;
  }
`

export const Toolbar = styled.div`
  position: absolute;
  left: 0;
  bottom: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 15px;

  @media (min-width: 576px) {
    padding: 0px 30px;
  }
`

export const LeftToolbar = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  svg {
    font-size: 18px;
    margin-left: 5px;
    color: ${props => props.theme.colors.primary};
  }
`

export const RightToolbar = styled.div`
  display: flex;
  flex-direction: column;
  a {
    display: flex;
    align-items: center;
    margin: 3px 0px;
    text-decoration: none;
    color: ${props => props.theme.colors?.white};
    span {
      font-size: 16px;
      font-weight: 500;
    }
    img {
      height: 20px;
      margin-right: 5px;
    }
  }
`
