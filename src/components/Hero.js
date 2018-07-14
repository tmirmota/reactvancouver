import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'
import { RVButton, RVContainer, RVText } from 'components'
import { Colors, Layout } from 'styles'
import background from '../assets/background.jpg'

const styles = {
  hero: css({
    height: '100vh',
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }),
  background: css({
    background: Colors.theme.secondary,
    background: Colors.gradient.dark,
    width: '100%',
    height: '100%',
  }),
  title: css({
    color: Colors.grey.white,
  }),
  description: css({
    color: Colors.grey.white,
  }),
}

const Background = styled.div(styles.background)

const Hero = ({ onClickCTA, className }) => {
  return (
    <section className={className}>
      <Background>
        <RVContainer
          py2
          pt4
          flex
          itemsCenter
          alignCenter
          style={{ height: '100%' }}
        >
          <RVText tag="h1" my4 heading className={styles.title}>
            Join one of the biggest tech communities in Vancouver
          </RVText>
          <RVText tag="p" my4 className={styles.description}>
            You’re a developer who wants to learn more about React or is looking
            for a job, a recruiter who wants to find talent, or an entrepreneur
            who wishes to connect with new people? You’re in the right place.
          </RVText>
          <RVButton halo onClick={onClickCTA}>
            Get your ticket for July meetup
          </RVButton>
        </RVContainer>
      </Background>
    </section>
  )
}
Hero.propTypes = {
  onClickCTA: PropTypes.object.isRequired,
}

export default styled(Hero)(styles.hero)
