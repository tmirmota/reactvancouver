import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import { css } from 'react-emotion'
import classNames from 'classnames'
import { faCalendar, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { RVText, RVGrid, RVIcon, RVLink, Talk } from 'components'
import { Colors, Buttons, Typography } from 'styles'

const styles = {
  eventTitle: css({
    marginBottom: '.7rem',
  }),
  eventDate: css({
    color: Colors.grey.medium,
    fontWeight: Typography.font.weight.bold,
  }),
  eventSubheadingWrapperGrid: css({
    gridGap: 0,
    gridRowGap: '.5rem',
    gridColumnGap: '1rem',
  }),
  statsTitle: css({
    fontSize: '5rem',
  }),
}

function getGMapsLink({ query, lat, lon }) {
  return `https://maps.google.com/?q=${query}&ll=${lat},${lon}`
}

const EventDetails = ({
  title,
  venueName,
  venueAddress,
  location,
  startDate,
  endDate,
  description,
  talks,
  eventbriteEventId,
}) => {
  const gMapsLink = getGMapsLink({
    query: venueName + venueAddress,
    ...location,
  })

  return (
    <div>
      <RVText subheading className={styles.eventTitle}>
        {title}
      </RVText>
      <RVGrid
        gridTemplateColumns={[
          'repeat(1,1fr)',
          'min-content 100%',
          'min-content 100%',
        ]}
        className={styles.eventSubheadingWrapperGrid}
        mb1
      >
        <RVIcon href={gMapsLink} fontAwesomeIcon={{ icon: faMapMarker }} />
        <RVLink href={gMapsLink} target="_blank" rel="noopener noreferrer">
          <RVText>
            {venueName} {venueAddress}
          </RVText>
        </RVLink>
        <RVIcon
          fontAwesomeIcon={{
            icon: faCalendar,
            className: styles.eventDate,
          }}
        />
        <RVText className={styles.eventDate}>
          {moment(startDate).format('dddd, MMM Do, Y')}{' '}
          {moment(startDate).format('h:mmA')}
          {' - '}
          {moment(endDate).format('h:mmA')}
        </RVText>
      </RVGrid>

      {description && (
        <div
          dangerouslySetInnerHTML={{
            __html: description.childMarkdownRemark.html,
          }}
        />
      )}

      {talks && talks.map(talk => <Talk key={talk.id} {...talk} />)}

      {eventbriteEventId && (
        <RVLink
          href={`https://www.eventbrite.com/e/${eventbriteEventId}`}
          className={classNames(Buttons.base, Buttons.medium)}
          px2
          py1
        >
          Get Tickets
        </RVLink>
      )}
    </div>
  )
}

EventDetails.propTypes = {
  title: PropTypes.string.isRequired,
  venueName: PropTypes.string.isRequired,
  venueAddress: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  description: PropTypes.object,
  eventbriteEventId: PropTypes.number,
}

export default EventDetails
