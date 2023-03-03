import styled from 'styled-components'

export const Container = styled.div``

export const HeroContainer = styled.div`
  background: ${props => props.theme.colors.primaryContrast};
  padding: 80px 0px;
`

export const TeamWraper = styled.div`
  display: flex;
  flex-flow: wrap;
  padding: 25px 0 20px;
  min-height: 400px;
  border-radius: 10px;
  /* border: 1px solid ${props => props.theme.colors.borderColor}; */
`

export const TeamItem = styled.div`
  width: 100%;
  height: 120px;
  text-align: left;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  padding: 15px 15px;
  margin-left: 30px;
  font-weight: 100;
  border: 1px solid white;
  border-radius: 15px;
  .header {
    display: flex;
    h3 {
      margin-left: 10px
    }
  }

  @media (min-width: 1200px) {
    width:45%
  }

  @media (max-width: 1354px) {
    height: 140px
  }

  @media (max-width: 1200px) {
    height: 140px;
    width: 45%
  }

  @media (max-width: 1006px) {
    height: 160px;
    width: 45%;
    margin-top: 30px;
  }

  @media (max-width: 1006px) {
    height: 180px;
    width: 45%
  }

  @media (max-width: 730px) {
    height: 120px;
    width: 100%
  }
`

export const InnerHeaderContent = styled.div`
  margin: 0 auto;
  max-width: 720px;

  > h2 {
    font-size: 45px;
    margin-bottom: 20px;
  }
`

export const SectionHeader = styled.div`
  margin-bottom: 20px;
  h2 {
    letter-spacing: -.2px;
    font-size: 26px;
    font-weight: 700;
  }
`

export const SearchWrapper = styled.div`
  display: flex;
  width: 100%;
  button {
    margin-left: 15px;
    height: 50px;
  }
`

export const SearchContentWrapper = styled.div`
  position: relative;
  height: 50px;
  flex: 1;
  svg {
    position: absolute;
    left: 10px;
    top: 18px;
  }
  input {
    width: 100%;
    padding-left: 35px;
    height: 100%;
    border-radius: 2px;
  }
`

export const PromotedArticalContainer = styled.div`
  width: 100%;
  padding: 40px 0px;

  > h2 {
    font-size: 41px;
    text-align: center;
    margin-bottom: 30px;
  }
`

export const KnowledgeContainer = styled.div`
  width: 100%;
  padding: 40px 0px;

  > h2 {
    font-size: 41px;
    text-align: center;
    margin-bottom: 30px;
  }
`

export const PromotedContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-left: 0px;
  justify-content:center;
  h3 {
    color: ${props => props.theme.colors.yellow};
  }

  > div {
    width: 100%;
    margin-bottom: 20px;
  }

  @media (min-width: 576px) {
    margin-left: -10px;
    width: calc(100% + 20px);
    > div {
      margin: 0px 10px 20px 10px;
      width: calc(50% - 20px);
    }
  }

  @media (min-width: 769px) {
    > div {
      width: calc(33.33% - 20px);
    }
  }
`

export const PromotionItem = styled.div`
  display: flex;
  align-items: flex-start;
  > svg {
    margin-right: 15px;
    color: ${props => props.theme.colors.slogan};
    font-size: 24px;
  }

  > div {
    h4 {
      font-size: 18px;
      margin-bottom: 15px;
      color: ${props => props.theme.colors.yellow };
    }
    p {
      font-size: 14px;
      color: ${props => props.theme.colors.gray};
    }
  }
`

export const KnowledgeContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  > div {
    width: 100%;
  }

  @media (min-width: 769px) {
    > div {
      width: 50%;
    }
  }
`

export const KnowledgeItem = styled.div`
  padding: 15px 15px 15px 20px;
  cursor: pointer;
  transition: all 0.3s linear;
  border-radius: 8px;
  > div {
    h2 {
      font-size: 16px;
      font-weight: 600;
      text-transform: uppercase;
      margin-bottom: 15px;
    }
    p {
      font-size: 16px;
      color: ${props => props.theme.colors.gray};
    }
  }

  @media (min-width: 576px) {
    padding: 24px 24px 24px 30px;
  }

  &:hover {
    background-color: ${props => props.theme.colors.lightGray};
  }
`