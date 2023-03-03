import styled from 'styled-components'

export const Container = styled.div`
  padding: 30px 0;
  overflow: auto;
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 890px;
  }
`

export const LogoItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75px;
  padding: 0px 25px;
  white-space: nowrap;
  img {
    max-width: 100%;
    width: 100%;
  }
`
