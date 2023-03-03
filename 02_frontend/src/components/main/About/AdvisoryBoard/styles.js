import styled from 'styled-components'

export const Container = styled.div`
  padding-bottom: 40px;
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
  border: 1px solid ${props => props.theme.colors.borderColor};
`

export const TeamItem = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 14px;
  padding: 15px 0;
  font-weight: 100;

  img {
    height: 50px;
    border-radius: 5px;
    margin-bottom: 15px;
  }

  @media (min-width: 768px) {
    width: 25%;
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