import React from 'react'
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

    <RVText subheading>
      {firstName} {lastName}
    </RVText>
    <RVText>
      {jobTitle}
      {company && ` at ${company}`}
    </RVText>

    {talks.map(({ id, title, date }) => (
      <RVBox key={id}>
        <RVBadge>{date}</RVBadge>
        <RVText>{title}</RVText>
      </RVBox>
    ))}
  </RVBox>
)

export default Speaker
