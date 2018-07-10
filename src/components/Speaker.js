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
    <Img fixed={fixed} imgStyle={{ borderRadius: 6 }} />
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

    {_renderTalks(talks)}
  </RVBox>
)

const _renderTalks = talks => {
  const lastTalk = sortBy(talks, 'date').reverse()[0]
  const { id, title, date } = lastTalk
  return (
    <RVBox key={id} className={styles.talkBox}>
      <RVBadge className={styles.talkDateBadge}>{date}</RVBadge>
      <RVText className={styles.titleText}>{title}</RVText>
      {talks.length > 1 && (
        <RVText>
          And {talks.length - 1} more talk{talks.length > 2 && 's'}...
        </RVText>
      )}
    </RVBox>
  )
}

const styles = {
  nameBox: css({
    height: 80,
  }),
  titleBox: css({
    height: 60,
  }),
  talkBox: css({
    minHeight: 120,
  }),
  talkDateBadge: css({
    marginBottom: 20,
  }),
  titleText: {
    minHeight: 50,
  },
}

export default Speaker
