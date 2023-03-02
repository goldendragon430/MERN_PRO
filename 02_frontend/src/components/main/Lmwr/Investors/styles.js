import styled from 'styled-components'

export const ComponentWraper = styled.div`
  background: ${props => props.theme.colors.lightGray};
  margin-top: 10px;
  padding: 40px 0 0;

  @media (min-width: 768px) {
    margin-top: 0px;
    padding: 40px 0;
  }
`

export const InvestorHeader = styled.div`
  margin-bottom: 20px;
  h2 {
    letter-spacing: -.2px;
    font-size: 26px;
    font-weight: 600;
    text-align: center;

    @media (min-width: 768px) {
      text-align: left;
    }
  }
`

export const InvestorList = styled.div`
  width: 100%;
  white-space: nowrap;
  overflow-x: scroll;
  text-align: center;
  @media (min-width: 768px) {
    white-space: normal;
    overflow-x: auto;
  }
  
`

export const InvestImgStyled = styled.div`
  height: 100px;
  display: inline-block;
`

export const InvestImg = (props) => {
  return <InvestImgStyled {...props} style={{ background: `url(${props.bgimage}) 50%/${props.imgWidth} no-repeat`, width: `${props.width}` }}>
    {props.children}
  </InvestImgStyled>
}
