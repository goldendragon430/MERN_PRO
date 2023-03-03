import React from 'react'
import GrLinkedin from '@meronex/icons/gr/GrLinkedin';

import {
  Container,
  SectionHeader,
  TeamWraper,
  TeamItem,
  MemeberDetail,
  MemberName,
  MemberTitle,
  MemberLink
} from './styles'

export const AdvisoryBoard = () => {

  const data = [
    {
      image: "https://limewire.com/img/partner_wutang.jpg",
      name: "Tareef Michael",
      link: "https://www.linkedin.com/in/tareef-michael-7678a5a3/",
      title: "Management, Wu-Tang Clan"
    },
    {
      image: "https://limewire.com/img/partner_wutang.jpg",
      name: "Tareef Michael",
      link: "https://www.linkedin.com/in/tareef-michael-7678a5a3/",
      title: "Management, Wu-Tang Clan"
    },
    {
      image: "https://limewire.com/img/partner_wutang.jpg",
      name: "Tareef Michael",
      link: "https://www.linkedin.com/in/tareef-michael-7678a5a3/",
      title: "Management, Wu-Tang Clan"
    },
    {
      image: "https://limewire.com/img/partner_wutang.jpg",
      name: "Tareef Michael",
      link: "https://www.linkedin.com/in/tareef-michael-7678a5a3/",
      title: "Management, Wu-Tang Clan"
    },
    {
      image: "https://limewire.com/img/partner_wutang.jpg",
      name: "Tareef Michael",
      link: "https://www.linkedin.com/in/tareef-michael-7678a5a3/",
      title: "Management, Wu-Tang Clan"
    },
    {
      image: "https://limewire.com/img/partner_wutang.jpg",
      name: "Tareef Michael",
      link: "https://www.linkedin.com/in/tareef-michael-7678a5a3/",
      title: "Management, Wu-Tang Clan"
    },
    {
      image: "https://limewire.com/img/partner_wutang.jpg",
      name: "Tareef Michael",
      link: "https://www.linkedin.com/in/tareef-michael-7678a5a3/",
      title: "Management, Wu-Tang Clan"
    },
    {
      image: "https://limewire.com/img/partner_wutang.jpg",
      name: "Tareef Michael",
      link: "https://www.linkedin.com/in/tareef-michael-7678a5a3/",
      title: "Management, Wu-Tang Clan"
    },
  ]

  return (
    <Container>
      <SectionHeader>
        <h2>Partners & Advisory Board</h2>
      </SectionHeader>
      <TeamWraper>
        {data.map((item, i) =>
          <TeamItem key={i}>
            <MemeberDetail>
              <img src={item.image} alt='' />
              <MemberName>{item.name}</MemberName>
              <MemberTitle>{item.title}</MemberTitle>
              <MemberLink href={item.link} target="_blank" rel="noreferrer">
                <span>Find on</span> <GrLinkedin size="20"/>
              </MemberLink>
            </MemeberDetail>
          </TeamItem>
        )}
      </TeamWraper>
    </Container>
  )
}