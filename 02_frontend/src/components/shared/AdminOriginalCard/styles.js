import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  box-shadow: 0 7px 14px rgb(60 66 87 / 10%), 0 3px 6px rgb(0 0 0 / 10%);
  border-radius: 10px;
  background-color: ${props => props.theme.colors.backgroundDark};
  margin-bottom: 20px;
`