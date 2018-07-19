import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'
import { RVButton, RVContainer, RVText, RVBox, RVIcon } from 'components'
import { Colors, Layout } from 'styles'
import background from '../assets/background.jpg'

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
  contentWrapper: css({
    maxWidth: 750,
  }),
  title: css({
    color: Colors.grey.white,
  }),
  description: css({
    color: Colors.grey.white,
  }),
}

const Overlay = styled.div(styles.overlay)

const Hero = ({ onClickCTA, ...otherProps }) => {
  return (
    <RVBox tag="section" {...otherProps}>
      <Overlay>
        <RVContainer
          py2
          pt4
          flex
          column
          center
          itemsCenter
          alignCenter
          style={{ height: '100%' }}
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
            <RVBox flex flexWrap>
              <RVButton onClick={onClickCTA} halo mr3 mb3>
                July Meetup
              </RVButton>
              <RVButton halo link="https://slack.reactvancouver.com/">
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
            </RVBox>
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
