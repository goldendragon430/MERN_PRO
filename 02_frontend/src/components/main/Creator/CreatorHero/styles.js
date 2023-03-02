import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 30px;
`

export const ImageWrapper = styled.div`
  position: relative;
  > img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 15px;
  }
  .banner-carousel {
    height:250px;
    .thumbs {
      display:none;
    }

    .carousel-img-wrapper {
      img {
        object-fit:cover;
        height:240px;
        border-radius:15px;
      }
    }
  }
`

export const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px 10px 0px;
  flex-direction: column;
  > img {
    width: 100px;
    height: 100px;
    margin-right: 20px;
    box-shadow: 0 1px 2px rgb(0 0 0 / 35%);
    border-radius: 50%;
  }

  @media (min-width: 769px) {
    flex-direction: row;
  }

  @media (min-width: 1200px) {
    margin: 0px;
    position: absolute;
    bottom: 25px;
    left: 30px;
    img {
      width: 70px;
      height: 70px;
    }
  }
`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  span {
    text-shadow: 1px 1px rgb(0 0 0 / 10%);
    font-size: 26px;
    margin-right: 10px;
  }
  svg {
    color: ${props => props.theme.colors.primary};
    font-size: 22px;
  }
`

export const InfoWrapper = styled.div`
  border-radius: 10px;
  background-color: ${props => props.theme.colors?.backgroundColor};
  margin-top: 20px;

  @media (min-width: 769px) {
    position: absolute;
    right: 20px;
    bottom: 20px;
  }
`

export const InfoTopeWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  span {
    font-size: 14px;
    font-weight: 500;
  }
  svg {
    margin-right: 5px;
  }
`

export const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid ${props => props.theme.colors.borderColor};
  padding: 5px;
  input {
    flex: 1;
    margin-right: 10px;
  }
`
