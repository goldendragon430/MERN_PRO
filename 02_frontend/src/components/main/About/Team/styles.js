import styled from 'styled-components'

export const Container = styled.div`
  padding: 40px 0px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
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

export const MemeberDetail = styled.div`
  max-width: 80%;
`

export const MemberLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.textPrimary};
  text-decoration: none;
  margin-bottom: 10px;

  span {
    margin-right: 6px;
  }
`

export const MemberName = styled.div`
  font-weight: 600;
`

export const MemberTitle = styled.div`
  margin-bottom: 10px;
`

export const MemberDescription = styled.div`
  font-size: 12px;
  color: ${props => props.theme.colors.gray};
`