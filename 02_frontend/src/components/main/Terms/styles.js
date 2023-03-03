import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 20px;
`

export const Header = styled.div`
  margin-bottom: 20px;
  > h2 {
    letter-spacing: -.2px;
    font-size: 22px;
    font-weight: 600;
    line-height: 1.4;
    @media (min-width: 768px) {
      font-size: 26px;
    }
  }
`

export const Content = styled.div`
  font-weight: 100;
  color: ${props => props.theme.colors.gray};
  p {
    margin-bottom: 15px;
    font-size: 14px;
    line-height: 18px;
  }

  strong {
    color: ${props => props.theme.colors.textPrimary};
    font-size: 15px;
  }

  table {
    text-align: left;
    margin-bottom: 15px;
    font-size: 14px;
    line-height: 18px;
    border-spacing: 0;
    border-collapse: collapse;
    width: 100%;
    
    tr th {
      color: ${props => props.theme.colors.textPrimary};
    }

    tr th, tr td {
      border: 1px solid ${props => props.theme.colors.textPrimary};
      padding: 10px;
    }
  }
`