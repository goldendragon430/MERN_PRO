import styled from 'styled-components'

export const Container = styled.div`
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-radius: 20px;
  margin:  5px;
  padding: 8px;
  transition: all .2s;
  cursor: pointer;
`

export const ImageWrapper = styled.div`
  width: 100%;
  height: 0;
  border-radius: 15px;
  margin-bottom: 10px;
  padding-bottom: 35%;
  position: relative;
  overflow: hidden;
  transform: translateZ(0);
  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
    background: #e7e8ec;
    border-radius: 15px;
    margin-bottom: 10px;
    position: absolute;
    top: 0;
    left: 0;
  }
`

export const DetailsWrapper = styled.div`
  letter-spacing: -.2px;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  display: flex;
  padding: 0 10px;
`

export const LeftSide = styled.div`
  > p {
    text-overflow: ellipsis;
    max-width: 100%;
    white-space: nowrap;
    font-size: 14px;
    font-weight: 600;
    overflow: hidden;
  }
`

export const RightSide = styled.div``

export const ArtistWrapper = styled.div`
  display: flex;
  align-items: center;
  letter-spacing: -.2px;
  font-size: 14px;
  font-weight: 500;
  position: relative;
  svg {
    color: ${props => props.theme.colors.primary};
    margin-left: 6px;
    font-size: 16px;
  }
`
