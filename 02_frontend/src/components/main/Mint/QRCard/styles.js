import styled from 'styled-components'

export const Container = styled.div``

export const Heading = styled.div`
  padding: 15px 20px 12px;
  text-align : center;
  span {
    max-width: 300px;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 20px;
    font-weight: 500;
    display: inline-block;
    overflow: hidden;
  }
`

export const Body = styled.div`
  padding: 0 20px 35px;
  display: flex;
  justify-content: center;
  > p {
    font-size: 14px;
    margin-bottom: 10px;
  }
`