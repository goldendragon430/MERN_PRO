import React from 'react'
import { Button } from '../../../../styles'

import {
  Container,
  LeftWrapper,
  ButtonGroup,
  RightWrapper
} from './styles'

export const AboutHero = () => {
  return (
    <Container>
      <LeftWrapper>
        <h1>
          <span className="marker">We are on a mission to bring</span> <span className="marker">digital collectibles to everybody</span>
        </h1>
        <h2>
          Our mission is to lower the entry barrier into the world of NFT collectibles, both for artists and collectors in the music industry and the broader entertainment space.
        </h2>
        <ButtonGroup>
          <a href="https://careers.limewire.com/" target="_blank" rel="noreferrer">
            <Button color='primary'>Interested in joining the team?</Button>
          </a>
        </ButtonGroup>
      </LeftWrapper>
      <RightWrapper>
        <img src='https://limewire.com/team_universe.3dd3a574.png' alt='' />
      </RightWrapper>
    </Container>
  )
}