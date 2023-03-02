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
  MemberDescription,
  MemberLink
} from './styles'
import BsCheckCircle from '@meronex/icons/bs/BsCheckCircle'

export const Team = () => {

  // const data = [
  //   {
  //     image: "https://limewire.com/img/team_marcus.png",
  //     name: "Marcus Feistl",
  //     link: "https://www.linkedin.com/in/paulzehetmayr/",
  //     title: "Artist Acquisition",
  //     description: "ex-Bitpanda Head of Brand & ex-Bugatti Rimac"
  //   },
  //   {
  //     image: "https://limewire.com/img/team_marcus.png",
  //     name: "Marcus Feistl",
  //     link: "https://www.linkedin.com/in/paulzehetmayr/",
  //     title: "Artist Acquisition",
  //     description: "adsfasdf"
  //   },
  //   {
  //     image: "https://limewire.com/img/team_marcus.png",
  //     name: "Marcus Feistl",
  //     link: "https://www.linkedin.com/in/paulzehetmayr/",
  //     title: "Artist Acquisition",
  //     description: "ex-Bitpanda Head of Brand & ex-Bugatti Rimac"
  //   },
  //   {
  //     image: "https://limewire.com/img/team_marcus.png",
  //     name: "Marcus Feistl",
  //     link: "https://www.linkedin.com/in/paulzehetmayr/",
  //     title: "Artist Acquisition",
  //     description: "ex-Bitpanda Head of Brand & ex-Bugatti Rimac"
  //   },
  //   {
  //     image: "https://limewire.com/img/team_marcus.png",
  //     name: "Marcus Feistl",
  //     link: "https://www.linkedin.com/in/paulzehetmayr/",
  //     title: "Artist Acquisition",
  //     description: "ex-Bitpanda Head of Brand & ex-Bugatti Rimac"
  //   },
  //   {
  //     image: "https://limewire.com/img/team_marcus.png",
  //     name: "Marcus Feistl",
  //     link: "https://www.linkedin.com/in/paulzehetmayr/",
  //     title: "Artist Acquisition",
  //     description: "ex-Bitpanda Head of Brand & ex-Bugatti Rimac"
  //   },
  //   {
  //     image: "https://limewire.com/img/team_marcus.png",
  //     name: "Marcus Feistl",
  //     link: "https://www.linkedin.com/in/paulzehetmayr/",
  //     title: "Artist Acquisition",
  //     description: ""
  //   },
  //   {
  //     image: "https://limewire.com/img/team_marcus.png",
  //     name: "Marcus Feistl",
  //     link: "https://www.linkedin.com/in/paulzehetmayr/",
  //     title: "Artist Acquisition",
  //     description: ""
  //   },
  //   {
  //     image: "https://limewire.com/img/team_marcus.png",
  //     name: "Marcus Feistl",
  //     link: "https://www.linkedin.com/in/paulzehetmayr/",
  //     title: "Artist Acquisition",
  //     description: ""
  //   },
  //   {
  //     image: "https://limewire.com/img/team_marcus.png",
  //     name: "Marcus Feistl",
  //     link: "https://www.linkedin.com/in/paulzehetmayr/",
  //     title: "Artist Acquisition",
  //     description: ""
  //   },
  //   {
  //     image: "https://limewire.com/img/team_marcus.png",
  //     name: "Marcus Feistl",
  //     link: "https://www.linkedin.com/in/paulzehetmayr/",
  //     title: "Artist Acquisition",
  //     description: ""
  //   },
  //   {
  //     image: "https://limewire.com/img/team_marcus.png",
  //     name: "Marcus Feistl",
  //     link: "https://www.linkedin.com/in/paulzehetmayr/",
  //     title: "Artist Acquisition",
  //     description: ""
  //   },
  // ]
  const data = [
    {
      title: "More customer referrals",
      content: "If you have a great loyalty rewards program, people may tell their friends and family about it. More referrals equals more customers.",
    },
    {
      title: "Higher customer retention",
      content: " If people find value in your customer loyalty program, they’ll likely stick around longer.",
    },
    {
      title: "More sales",
      content: "Want a higher average order value? According to recent loyalty research, 49% of consumers agree they’ve spent more after joining a loyalty program. ",
    },
    {
      title: "Brand advocacy",
      content: "A successful loyalty program can turn regular customers into brand advocates. This group helps your company get in front of new customers through word of mouth, which is a low-cost marketing strategy versus paid ads",
    }
  ]

  return (
    <Container>
      <SectionHeader>
        <h2>Why a Membership Program and a Reward System are Important</h2>
      </SectionHeader>
      <TeamWraper>
        {data.map((item, i) =>
          <TeamItem key={i}>
            <div className="header">
              <BsCheckCircle style={{width: '20px', height: '20px'}}/>
              <h3>{item.title}</h3>
            </div>
            <p>{item.content}</p>
            {/* <MemeberDetail>
              <img src={item.image} alt='' />
              <MemberLink href={item.link} target="_blank" rel="noreferrer">
                <span>Find on</span> <GrLinkedin size="20"/>
              </MemberLink>
              <MemberName>{item.name}</MemberName>
              <MemberTitle>{item.title}</MemberTitle>
              <MemberDescription>{item.description}</MemberDescription>
            </MemeberDetail> */}
          </TeamItem>
        )}
      </TeamWraper>
    </Container>
  )
}