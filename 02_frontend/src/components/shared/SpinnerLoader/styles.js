import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Logo = styled.div`
  img {
    height: auto;
    aspect-ratio: attr(width) / attr(height);
    max-height: 150px;
  }
`

export const Content = styled.h1`
  font-weight: normal;
  text-transform: capitalize;
  margin-top: 0px;
  padding-bottom: 50px;
  font-size: 25px;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`

export const Spinner = styled.div`
  @keyframes spinner-content {
    0% { transform: rotate(0) }
    100% { transform: rotate(360deg) }
  }

  .spinner-content div {
    box-sizing: border-box!important
  }

  .spinner-content > div {
    width: ${props => props.iconStyleWidth || '108'}px;
    height: ${props => props.iconStyleHeight || '108'}px;
    border-radius: 50%;
    border: 8px solid #000;
    border-color: ${props => `${props.theme.colors.primary} transparent ${props.theme.colors.primary} transparent`};
    animation: spinner-content 1.8518518518518516s linear infinite;
  }

  .spinner-content > div:nth-child(2) { border-color: transparent }
  .spinner-content > div:nth-child(2) div {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotate(45deg);
  }

  .spinner-content > div:nth-child(2) div:before,
  .spinner-content > div:nth-child(2) div:after {
    content: "";
    display: block;
    position: absolute;
    width: 8px;
    height: 8px;
    top: -8px;
    left: 42px;
    background: ${props => props.theme.colors.primary};
    border-radius: 50%;
    box-shadow: 0 100px 0 0 ${props => props.theme.colors.primary};
  }

  .spinner-content > div:nth-child(2) div:after {
    left: -8px;
    top: 42px;
    box-shadow: 100px 0 0 0 ${props => props.theme.colors.primary};
  }

  .spinner {
    width: 200px;
    height: 200px;
    display: inline-block;
    overflow: hidden;
    background: #ffffff;
  }

  .spinner-content {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0;
  }

  .spinner-content div {
    box-sizing: content-box;
  }
`
