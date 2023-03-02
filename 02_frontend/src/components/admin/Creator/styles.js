import styled, { css } from 'styled-components'

export const Container = styled.div`
  padding: 20px 0px;

  @media (min-width: 1200px) {
    padding: 20px 0px 20px 30px;
  }
`

export const CardForm = styled.form``

export const FormGroup = styled.div`
  margin-bottom: 15px;
  max-width: 650px;
  input, textarea {
    width: 100%;
    font-size: 14px;
  }
  > p {
    font-size: 14px;
    font-weight: 600;
  }
  textarea {
    height: 90px;
  }
`

export const PhotoUploadStyled = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  > input {
    display: none;
  }
  svg {
    display: none;
    font-size: 20px;
    z-index: 1;
  }
  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  &:hover {
    svg {
      display: block;
    }
  }

  ${({ bgimage }) => bgimage && css`
    background-repeat: no-repeat, repeat;
    background-size: cover;
    object-fit: cover;
    background-position: center;
  `}
`
export const PhotoUpload = (props) => {
  const style = {}
  if (props.bgimage) {
    style.backgroundImage = `url(${props.bgimage})`
  } else {
    style.backgroundColor = '#CACACA'
  }

  return (
    <PhotoUploadStyled {...props} style={style}>
      {props.children}
    </PhotoUploadStyled>
  )
}


export const BannerPhotoStyled = styled.div`
  height: 152.5px;
  width: 100%;
  margin-top: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  > input {
    display: none;
  }
  svg {
    display: none;
    font-size: 20px;
    z-index: 1;
    position: relative;
  }
  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  &:hover {
    svg {
      display: block;
    }
  }

  ${({ bgimage }) => bgimage && css`
    background-repeat: no-repeat, repeat;
    background-size: cover;
    object-fit: cover;
    background-position: center;
  `}
`
export const BannerPhoto = (props) => {
  const style = {}
  if (props.bgimage) {
    style.backgroundImage = `url(${props.bgimage})`
  } else {
    style.backgroundColor = '#CACACA'
  }

  return (
    <BannerPhotoStyled {...props} style={style}>
      {props.children}
    </BannerPhotoStyled>
  )
}

export const TextWrapper = styled.div`
  max-width: 650px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`
