import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { RVButton, RVContainer, RVText } from 'components'
import {
  heroStyles,
  backgroundStyles,
  titleStyles,
  descriptionStyles,
} from './style'

const Background = styled.div(backgroundStyles)

const Hero = ({ className }) => {
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
          <RVText tag="h1" my4 className={titleStyles}>
            Join one of the biggest tech communities in Vancouver
          </RVText>
          <RVText tag="p" my4 className={descriptionStyles}>
            You’re a developer who wants to learn more about React or is looking
            for a job, a recruiter who wants to find talent, or an entrepreneur
            who wishes to connect with new people? You’re in the right place.
          </RVText>
          <RVButton halo>Get your ticket for July meetup</RVButton>
        </RVContainer>
      </Background>
    </section>
  )
}
Hero.propTypes = {}

export default styled(Hero)(heroStyles)
