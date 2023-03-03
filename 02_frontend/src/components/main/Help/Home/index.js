import React from 'react'
import VscSearch from '@meronex/icons/vsc/VscSearch'
import BsFillStarFill from '@meronex/icons/bs/BsFillStarFill'
import { Button, Input } from '../../../../styles'
import { LayoutContainer } from '../../../shared'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  HeroContainer,
  InnerHeaderContent,
  SearchWrapper,
  SearchContentWrapper,
  PromotedArticalContainer,
  PromotedContent,
  PromotionItem,
  KnowledgeContainer,
  KnowledgeContent,
  KnowledgeItem,
  SectionHeader,
  TeamItem,
  TeamWraper
} from './styles'
import BsCheckCircle from '@meronex/icons/bs/BsCheckCircle'
import { useApi } from '../../../../contexts/ApiContext'

export const Home = () => {
  const navigate = useNavigate()
  const [{getRole}] = useApi()
  const role = getRole()
  const promotionList = [
    { title: 'Why Block Reward', content: <span> <BsCheckCircle style={{width: '20px', height: '20px', paddingTop: '8px'}}/>80% of business Rev comes from 20% of customers, on our platform we allow for customers from multiple businesses to redeem and see promotions at your store. <br /> <BsCheckCircle style={{width: '20px', height: '20px', paddingTop: '8px'}}/> Build a new customer base, our platform allows customers from other businesses an insight of what products and discounts may be offered. <br /> <BsCheckCircle style={{width: '20px', height: '20px', paddingTop: '8px'}}/> Block Reward allows for customizable membership for your customers, giving them full control of what promotions they redeem'</span> },
    { title: 'Customers redeem discounts and rewards made simple', content: <span > <BsCheckCircle style={{width: '20px', height: '20px', paddingTop: '8px'}}/>To join Block Reward your customers will signup via email or phone number, once they have a profile set up they will be able to see what memberships your business will be offering <br /> <BsCheckCircle style={{width: '20px', height: '20px', paddingTop: '8px'}}/> As a retailer you will have a dedicated page to display special offers for your loyalty program members. While all members of the Block Reward ecosystem will have the ability to redeem some discounts, rewards are reserved for full business members or at the retailer’s discretion. <br /> <BsCheckCircle style={{width: '20px', height: '20px', paddingTop: '8px'}}/> Our platform allows for your customers to easily sign up and become a member of your loyalty program, and email or phone number  is all that is required to be part of the program, this is so your customers can regain access to their membership if they lose a device.</span> },
    { title: 'Rewards Customizable for you and your customers', content: <span> <BsCheckCircle style={{width: '20px', height: '20px', paddingTop: '8px'}}/>Setting the rewards you offer is key to making sure your customers have a unique experience. Block Reward allows for retailers to set special offers and discounts offered to their membership holders. <br /> <BsCheckCircle style={{width: '20px', height: '20px', paddingTop: '8px'}}/> Customers earn Block Reward Token that is used on our platform, users can redeem offers using the token they earn on purchases. (Retailer example) up to 25% off, 5% per token, Max 5 tokens</span> },
  ]

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
    <>
      <Container>
        {/* <HeroContainer>
          <InnerHeaderContent>
            <h2>What can we help you with?</h2>
            <SearchWrapper>
              <SearchContentWrapper>
                <VscSearch />
                <Input
                  placeholder='Type your question here...'
                />
              </SearchContentWrapper>
              <Button color='primary' borderRadius='2px'>Search</Button>
            </SearchWrapper>
          </InnerHeaderContent>
        </HeroContainer> */}
        <LayoutContainer>
          <PromotedArticalContainer>
            <h2>Join our Ecosystem</h2>
            <PromotedContent>
              {promotionList.map((item, i) => (
                <PromotionItem key={i}>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                  </div>
                </PromotionItem>
              ))}
             <Button
              color="primary"
              type='submit'
              style={{color:'yellow'}}
              onClick = {()=>{navigate(`/partner`)}}
            >
              Partner With Us
            </Button>
             
            </PromotedContent>
          </PromotedArticalContainer>
        </LayoutContainer>
        <LayoutContainer>
          <KnowledgeContainer>
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
          </KnowledgeContainer>
        </LayoutContainer>
      </Container>
    </>
  )
}
