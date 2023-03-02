import styled from 'styled-components'

export const Container = styled.div`
max-width: 1440px;
width: 100%;
max-width: 1440px;
margin: 0 auto;
padding-left: 20px;
padding-right: 20px;
padding-bottom: 20px;
padding-top: 20px;
background-color: #00934B;
height:600px;
@media (min-width: 768px) {
  padding-left: 30px;
  padding-right: 30px;
  
}
`
// background-color: #00934B;

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top:120px;
`

export const LeftSide = styled.div`
  display: flex;
  margin-bottom: 10px;

  h2 {
    letter-spacing: -.2px;
    margin-right: 30px;
    font-size: 26px;
    font-weight: 700
  }
`

export const CreatorListWrapper = styled.div`
  align-items: center;
  font-size: 14px;
  display: flex;
  > span {
    margin-right: 10px;
  }
`

export const CreatorItem = styled.div`
  display: flex;
  align-items: center;
  border-radius: 50px;
  margin-right: 7px;
  padding: 2px 12px 2px 10px;
  box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
  cursor: pointer;
  border: 1px solid ${props => props.theme.colors.gray};

  span {
    font-size: 14px;
    margin-right: 5px;
  }
  &:hover {
    svg {
      transform: translateX(3px);
      transition: all 0.2s;
    }
  }
`

export const RigthSide = styled.div`
  margin-bottom: 10px;
`

export const Option = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;

  > span {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }
`

export const FeaturedContent = styled.div`
  margin-bottom: 40px;
  overflow: hidden;
  box-shadow: 0 1px 2px rgb(0 0 0 / 35%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;
  overflow: hidden;
  padding: 25px;
  position: relative;
  align-items: center;


  > h3 {
    letter-spacing: -.2px;
    font-size: 28px;
    font-weight: 700;
    position: relative;
    z-index: 2;
  }
  > p {
    letter-spacing: -.2px;
    font-size: 16px;
    position: relative;
    font-weight: 500;
    z-index: 2;
  }
  button {
    z-index: 2;
    width: fit-content;
    position: relative;
    margin-top: 20px;
  }
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }

  @media (min-width: 768px) {
    padding: 30px;
    height: 260px;
    align-items: flex-start;
  }

  @media (min-width: 994px) {
    padding: 50px;
  }
`

export const MaskBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(0,0,0,.5);
  z-index: 1;
`