import React from 'react'
import { css } from 'emotion'
import { sortBy } from 'lodash'
import Img from 'gatsby-image'
import { RVBox, RVText, RVBadge } from 'components'

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
    <RVBox className={styles.nameBox}>
      <RVText subheading>
        {firstName} {lastName}
      </RVText>
    </RVBox>

    <RVBox className={styles.titleBox}>
      <RVText>
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

const _renderTalk = ({ id, title, date }) => (
  <RVBox key={id} className={styles.talkBox}>
    <RVBadge className={styles.talkDateBadge}>{date || 'Unknown'}</RVBadge>
    <RVText className={styles.titleText}>{title}</RVText>
  </RVBox>
)

const styles = {
  nameBox: css({
    height: 80,
  }),
  titleBox: css({
    minHeight: 50,
    marginBottom: 10,
  }),
  talksBox: css({
    maskImage: 'linear-gradient(to bottom, black 90%, transparent)',
    overflowX: 'hidden',
    overflowY: 'auto',
    WebkitOverflowScrolling: 'touch',
    maxHeight: 220,
    '@media (max-width: 420px)': {},
  }),
  talkBox: css({
    minHeight: 90,
    marginBottom: 10,
  }),
  talkDateBadge: css({
    float: 'left',
    marginBottom: 10,
    height: 30,
    fontSize: '60%',
    minWidth: 105,
    textAlign: 'center',
    marginRight: 10,
  }),
  titleText: {
    minHeight: 50,
  },
}

export default Speaker
