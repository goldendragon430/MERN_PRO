import styled from 'styled-components'

export const Container = styled.div`
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-radius: 20px;
  margin:  5px;
  padding: 8px;
  transition: all .2s;
  cursor: pointer;
  background-color:#222222;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 0 2px ${props => props.theme.colors.borderColor};
    .hover-view {
      display: flex;
    }
  }
`

export const ImageWrapper = styled.div`
    width: 100%;
    height: 0;
    border-radius: 15px;
    margin-bottom: 10px;
    padding-bottom: 100%;
    position: relative;
    overflow: hidden;

  > img {
    width: 100%;
    object-fit: cover;
    height: 100%;
    border-radius: 15px;
    margin-bottom: 10px;
    position: absolute;
    top: 0;
    left: 0;
  }
`

export const ArtistWrapper = styled.div`
  display: flex;
  align-items: center;
  letter-spacing: -.2px;
  font-size: 14px;
  font-weight: 500;
  position: relative;
  svg {
    color: ${props => props.theme.colors.primary};
    margin-left: 5px;
    font-size: 16px;
  }
`

export const TitleWrapper = styled.p`
  text-overflow: ellipsis;
  max-width: 100%;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 600;
  overflow: hidden;
`

export const EditionWrapper = styled.div`
  display: flex;
  align-items: center;
  svg {
    margin-right: 6px;
  }
  span {
    text-overflow: ellipsis;
    max-width: 100%;
    white-space: nowrap;
    font-size: 14px;
    overflow: hidden;
  }
`

export const CommercialsWrapper = styled.div`
  height: 60px;
  background: ${props => props.theme.colors.lightGray};
  border-radius: 10px;
  margin-top: 10px;
  padding: 10px;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  .title {
    color: ${props => props.theme.colors.textGray};
  }
`

export const ReleaseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`

export const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`

export const MediaTypeWrapper = styled.div`
  position: absolute;
  top: 15px;
  left: 20px;
  z-index: 1;
  display: none;
  align-items: center;
  color: white;
  span {
    font-size: 15px;
    font-weight: 500;
    margin-left: 6px;
  }
`

export const StarWrapper = styled.div`
  position: absolute;
  top: 15px;
  right: 20px;
  z-index: 1;
  display: none;
  align-items: center;
  color: white;
  span {
    font-size: 15px;
    font-weight: 500;
    margin-left: 6px;
  }
`

export const Algorand = styled.div`
  width: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 10px;
  left: 0;
  > div {
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding: 3px 10px;
    border-radius: 5px;
    background-color: ${props => props.theme.colors.lightGray};
    span {
      margin-left: 6px;
      font-size: 14px;
      font-weight: 600;
    }
    svg {
      width: 14px;
      fill: ${props => props.theme.colors.white};
    }
  }
`
