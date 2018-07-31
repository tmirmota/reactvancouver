import React from 'react'
import { css } from 'react-emotion'
import Img from 'gatsby-image'
import { RVBox, RVText, RVBadge } from 'components'
import { Colors, Typography } from 'styles'
import { sortBy } from 'lodash'
import moment from 'moment'

const Speaker = ({
  fixed,
  firstName,
  lastName,
  jobTitle,
  company,
  talks = [],
}) => (
  <RVBox>
    {fixed && <Img fixed={fixed} imgStyle={{ borderRadius: 6 }} />}
    <RVBox mt1>
      <RVText subheading className={styles.name}>
        {firstName} {lastName}
      </RVText>
    </RVBox>

    <RVBox mb2>
      <RVText className={styles.title}>
        {jobTitle}
        {!!company && ` at ${company}`}
      </RVText>
    </RVBox>
    <div className={styles.talksBox}>{_renderTalks(talks)}</div>
  </RVBox>
)

const _renderTalks = talks => {
  const sortedTalks = sortBy(talks, 'date').reverse()
  return sortedTalks.map(_renderTalk)
}

const _renderTalk = ({ id, title, date }) => {
  const formatedDate = date ? moment(date).format('MMM Do, Y') : 'Unknown'

  return (
    <RVBox key={id} className={styles.talkBox}>
      <RVBadge className={styles.talkDateBadge}>{formatedDate}</RVBadge>
      <RVText className={styles.titleText}>{title}</RVText>
    </RVBox>
  )
}

const styles = {
  name: css({
    margin: 0,
  }),
  title: css({
    color: Colors.grey.medium,
    fontWeight: Typography.font.weight.bold,
  }),
  talksBox: css({
    maskImage: 'linear-gradient(to bottom, #FFFFFF 80%, transparent)',
    overflowX: 'hidden',
    overflowY: 'auto',
    WebkitOverflowScrolling: 'touch',
    maxHeight: 220,
    '@media (max-width: 420px)': {},
  }),
  talkBox: css({
    minHeight: 88,
    marginBottom: 8,
  }),
  talkDateBadge: css({
    marginTop: 0,
    marginBottom: 8,
    height: 32,
    fontSize: 12,
    minWidth: 105,
    textAlign: 'center',
    marginRight: 8,
  }),
  titleText: {
    minHeight: 48,
  },
}

export default Speaker
