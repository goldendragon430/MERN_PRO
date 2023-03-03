import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px 0px;
  margin-bottom: 10px;
  > h2 {
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 20px;
  }
`

export const CreatorListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 0px;
  width: calc(100% + 20px);
  margin-left: -10px;

  > div {
    width: calc(50% - 20px);
    margin: 10px;
  }

  @media (min-width: 576px) {
    width: calc(100% + 30px);
    margin-left: -15px;
    > div {
      width: calc(33.33% - 30px);
    }
  }

  @media (min-width: 768px) {
    width: calc(100% + 30px);
    margin-left: -15px;
    > div {
      width: calc(20% - 30px);
    }
  }

  @media (min-width: 1200px) {
    > div {
      width: calc(14% - 30px);
    }
  }
`

export const CreatorItem = styled.div`
  margin: 15px;
  cursor: pointer;
`

export const ImgWrapper = styled.div`
  width: 100%;
  height: 0;
  border-radius: 15px;
  margin-bottom: 10px;
  padding-bottom: 100%;
  position: relative;
  overflow: hidden;
  transform: translateZ(0);
  border-radius: 50%;
  img {
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

export const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    max-width: 98%;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: inline-block;
    overflow: hidden;
  }
  svg {
    color: ${props => props.theme.colors.primary};
    margin-left: 5px;
  }
`
