import React from 'react'
import { RVBox, RVLink, RVText, RVGrid, RVIcon } from 'components'
import { css } from 'react-emotion'
import { Colors } from 'styles'

const links = [
  { navigate: '/jobs', title: 'Jobs' },
  { navigate: '/events', title: 'Events' },
  { navigate: '/speakers', title: 'Speakers' },
  { navigate: '/contact-us', title: 'Contact Us' },
]

const icons = [
  { icon: 'slack', link: 'https://slackrv.now.sh' },
  { icon: 'meetup', link: 'https://www.meetup.com/ReactJS-Vancouver-Meetup/' },
]

const grey = Colors.grey.calc(80)

const styles = {
  text: css({
    color: grey,
    a: {
      color: grey,
      textDecoration: 'underline',
    },
  }),
}

const Footer = () => (
  <RVBox tag="footer" container pb2 pt3>
    <RVBox flex center alignCenter>
      <RVText label className={styles.text}>
        Designed by <RVLink href="https://www.alexa-gueguen.com">Alexa</RVLink>{' '}
        & <RVLink href="https://github.com/AkimaLunar">Ria</RVLink> <br />
        Developed by <RVLink href="https://github.com/tmirmota">
          Thomas
        </RVLink>, <RVLink href="https://github.com/AkimaLunar">Ria</RVLink> &{' '}
        <RVLink href="https://github.com/bosung90">Eric</RVLink>
      </RVText>
    </RVBox>
  </RVBox>
)

export default Footer
