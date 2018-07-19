import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'
import {
  RVButton,
  RVContainer,
  RVText,
  RVBox,
  RVIcon,
  RVGrid,
  RVLink,
} from 'components'
import { Colors, Layout } from 'styles'
import background from '../assets/background.jpg'
import Img from 'gatsby-image'

const styles = {
  hero: css({
    minHeight: '100vh',
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }),
  overlay: css({
    background: Colors.gradient.dark,
    width: '100%',
    minHeight: '100vh',
  }),
  container: css({
    minHeight: '100vh',
  }),
  contentWrapper: css({
    maxWidth: 750,
  }),
  title: css({
    color: Colors.grey.white,
    '@media (max-width: 420px)': {
      textAlign: 'left',
    },
  }),
  description: css({
    fontSize: Layout.calcSpace(2.5),
    color: Colors.grey.white,
    '@media (max-width: 420px)': {
      textAlign: 'left',
    },
  }),
  sponsoredby: css({
    color: Colors.grey.white,
    letterSpacing: 2,
    textTransform: 'uppercase',
  }),
  sponsor: css({
    filter: 'brightness(0) invert(1)',
    opacity: '.7',
  }),
}

const Overlay = styled.div(styles.overlay)

const Hero = ({ onClickCTA, sponsors, ...otherProps }) => {
  return (
    <RVBox tag="section" {...otherProps}>
      <Overlay>
        <RVContainer
          flex
          column
          center
          itemsCenter
          alignCenter
          className={styles.container}
          pt8
          pb2
        >
          <RVBox className={styles.contentWrapper}>
            <RVText tag="h1" mb4 heading className={styles.title}>
              Join one of the biggest tech communities in Vancouver
            </RVText>
            <RVText tag="p" mb4 className={styles.description}>
              You’re a developer who wants to learn more about React or is
              looking for a job, a recruiter who wants to find talent, or an
              entrepreneur who wishes to connect with new people? You’re in the
              right place.
            </RVText>
            <RVGrid
              justifyCenter
              gridTemplateColumns={[
                'repeat(1, 1fr)',
                'repeat(2, min-content)',
                'repeat(2, min-content)',
              ]}
              mb8
            >
              <RVButton onClick={onClickCTA} halo>
                July Meetup
              </RVButton>
              <RVButton halo link="https://slackrv.now.sh">
                <RVIcon
                  key={'slack'}
                  mr1
                  flex
                  fontAwesomeIcon={{
                    icon: ['fab', 'slack'],
                    size: '1x',
                    color: 'white',
                  }}
                />Join Slack
              </RVButton>
            </RVGrid>
            <RVText className={styles.sponsoredby} mb1>
              Sponsored by
            </RVText>
            <RVGrid
              justifyCenter
              itemsCenter
              gridTemplateColumns={[
                'repeat(1, 1fr)',
                'repeat(3, min-content)',
                'repeat(3, min-content)',
              ]}
            >
              {sponsors.map(sponsor => (
                <RVBox key={sponsor.node.id}>
                  <Img
                    fixed={sponsor.node.companyLogoDark.hero}
                    className={styles.sponsor}
                  />
                </RVBox>
              ))}
            </RVGrid>
          </RVBox>
        </RVContainer>
      </Overlay>
    </RVBox>
  )
}
Hero.propTypes = {
  onClickCTA: PropTypes.func.isRequired,
}

export default styled(Hero)(styles.hero)
