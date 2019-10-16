import React from 'react'
import { css } from 'react-emotion'
import { RVBox, RVLink, RVText, RVGrid, RVIcon } from 'components'
import { Colors } from 'styles'

const grey = Colors.grey.calc(50)

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
