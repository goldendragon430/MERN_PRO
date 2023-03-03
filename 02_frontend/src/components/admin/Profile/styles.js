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
  input {
    width: 100%;
  }
  > p {
    font-size: 14px;
    font-weight: 600;
  }
`

export const PhotoUploadStyled = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  > input {
    display: none;
  }
  svg {
    display: none;
    font-size: 20px;
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
