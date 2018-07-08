import React from 'react'
import { RVBox, RVLink, RVText, RVGrid, RVIcon } from 'components'

const links = [
  { navigate: '/jobs', title: 'Jobs' },
  { navigate: '/talks', title: 'Talks' },
  { navigate: '/events', title: 'Events' },
  { navigate: '/speakers', title: 'Speakers' },
  { navigate: '/sponsors', title: 'Sponsors' },
  { navigate: '/about-us', title: 'About Us' },
  { navigate: '/contact-us', title: 'Contact Us' },
]

const icons = [
  { icon: 'slack', link: 'https://slack.reactvancouver.com/' },
  { icon: 'meetup', link: 'https://www.meetup.com/ReactJS-Vancouver-Meetup/' },
]

const Footer = () => (
  <RVBox tag="footer" container py2>
    <RVGrid columns2>
      <RVBox>
        <RVText mb2 subheading>
          ReactVancouver
        </RVText>
        {links.map(({ navigate, title }) => (
          <RVLink key={title} navigate={navigate}>
            {title}
          </RVLink>
        ))}

        <RVText mt1>2018</RVText>
      </RVBox>

      <RVBox style={{ alignSelf: 'end', justifySelf: 'end' }}>
        {icons.map(({ icon, link }) => (
          <RVIcon
            key={icon}
            href={link}
            fontAwesomeIcon={{ icon: ['fab', icon], size: '3x' }}
            m2
          />
        ))}
      </RVBox>
    </RVGrid>
  </RVBox>
)

export default Footer
