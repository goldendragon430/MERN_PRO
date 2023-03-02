import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div``

export const Heading = styled.div`
  padding: 15px 20px 12px;
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
  padding: 0 20px 15px;
`

export const Item = styled.div`
  width: 100%;
  text-align: left;
  border-top: 1px solid ${props => props.theme.colors.borderColor};
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  flex-flow: row;
  align-content: center;
  align-items: center;
  margin-bottom: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  transition: all .2s;
  display: flex;
  overflow: hidden;
`

export const ImageWrapper = styled.div`
  height: 70px;
  width: 70px;
  box-shadow: none;
  border-radius: 5px;
  margin: 0 13px 0 0;
  padding: 0;
  display: inline-block;
  position: relative;
  overflow: hidden;
  transform: translateZ(0);

  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
    border-radius: 5px;
    margin-bottom: 10px;
    position: absolute;
    top: 0;
    left: 0;
  }
`

export const Details = styled.div`
 > p {
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 225px;
  font-size: 14px;
  display: block;
  position: relative;
  top: 0;
  overflow: hidden;
 }
`

export const Artist = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  svg {
    margin-left: 5px;
    color: ${props => props.theme.colors.primary};
  }
`

export const SocialItem = styled.a`
  width: 100%;
  margin-bottom: 10px;
  border-radius: 20px;
  padding: 0 16px;
  font-size: 14px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s linear;
  background: ${props => props.theme.colors.backgroundLightDark};
  color: ${props => props.theme.colors.white};
  border-color: ${props => props.theme.colors.backgroundLightDark};
  &:hover {
    background: ${props => darken(0.04, props.theme.colors.backgroundLightDark)};
  }
  &:active {
    background: ${props => darken(0.1, props.theme.colors.backgroundLightDark)};
  }
  img {
    width: 20px;
    margin-right: 5px;
  }
`
