import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 20px;
`
export const ImageWrapper = styled.div`
  position: relative;
  > img {
    width: 100%;
    object-fit: cover;
    border-radius: 15px;
  }
 
`
export const SubContainer = styled.div`
  width: calc(80% + 30px);
  margin-left: 15px;

`