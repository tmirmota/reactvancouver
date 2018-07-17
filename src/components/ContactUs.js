import React from 'react'
import { RVBox, RVInput, RVGrid, RVText, RVButton, RVIcon } from 'components'

const icons = [
  { icon: 'slack', link: 'https://slack.reactvancouver.com/' },
  { icon: 'meetup', link: 'https://www.meetup.com/ReactJS-Vancouver-Meetup/' },
]

const ContactUs = () => (
  <RVGrid gridTemplateColumns={['repeat(1,1fr)', '1fr 2fr', '1fr 2fr']} mb3>
    <div>
      <RVText heading>Contact Us</RVText>
      {/* <RVText>or email us at: </RVText> */}
      <RVBox flex>
        {icons.map(({ icon, link }) => (
          <RVIcon
            key={icon}
            href={link}
            fontAwesomeIcon={{ icon: ['fab', icon], size: '3x' }}
            m2
          />
        ))}
      </RVBox>
    </div>
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <RVBox flex>
        <RVInput placeholder="Name" />
        <RVInput placeholder="Email" />
      </RVBox>

      <RVInput tag="textarea" placeholder="Message" rows="9" />
      <RVButton
        tag="input"
        type="submit"
        value="Submit"
        style={{
          float: 'right',
          textTransform: 'uppercase',
          letterSpacing: '0.1rem',
          lineHeight: 1,
          fontWeight: 700,
          WebkitFontSmoothing: 'antialiased',
        }}
        mt2
        px2
        py1
      />
    </form>
  </RVGrid>
)

export default ContactUs
