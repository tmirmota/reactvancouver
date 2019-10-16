import React from 'react'
import PropTypes from 'prop-types'
import { RVGrid, RVText, RVAvatar, RVBox, RVIcon } from 'components'

const SpeakerSummary = ({
  id,
  profilePicture,
  firstName,
  lastName,
  jobTitle,
  company,
  githubLink,
  linkedInLink,
}) => (
  <RVBox flex>
    {!!profilePicture && (
      <RVAvatar
        img={{
          fixed: profilePicture.fixed,
        }}
        mr2
      />
    )}
    <RVBox>
      <RVText>
        {firstName} {lastName}
      </RVText>
      <RVText mb1>
        {jobTitle}
        {company && ' at '}
        {company}
      </RVText>
      <RVBox flex>
        {githubLink && (
          <RVLink href={githubLink}>
            <RVIcon
              fontAwesomeIcon={{
                icon: ['fab', 'github'],
              }}
              mr1
              aria-label={`${firstName}'s GitHub profile`}
            />
          </RVLink>
        )}

        {linkedInLink && (
          <RVLink href={linkedInLink}>
            <RVIcon
              fontAwesomeIcon={{
                icon: ['fab', 'linkedin'],
              }}
              mr1
              aria-label={`${firstName}'s LinkedIn profile`}
            />
          </RVLink>
        )}
      </RVBox>
    </RVBox>
  </RVBox>
)

SpeakerSummary.propTypes = {
  id: PropTypes.string.isRequired,
  profilePicture: PropTypes.object.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string,
  jobTitle: PropTypes.string,
  company: PropTypes.string,
  githubLink: PropTypes.string,
  linkedInLink: PropTypes.string,
}

const Talk = ({ id, title, speakers }) => (
  // TODO: Remove mb3
  <RVGrid key={id} columns2 mb3>
    <RVText subheading>{title}</RVText>

    {speakers &&
      speakers.map(speaker => <SpeakerSummary key={speaker.id} {...speaker} />)}
  </RVGrid>
)

Talk.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  speakers: PropTypes.array.isRequired,
}

export default Talk
