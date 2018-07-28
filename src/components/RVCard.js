import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { RVBox } from 'components'
import { Layout } from 'styles'

const RVCard = ({ className: classNameProp, ...otherProps }) => {
  const className = classNames(Layout.card, classNameProp)

  return <RVBox className={className} {...otherProps} />
}

RVCard.propTypes = {
  className: PropTypes.string,
}

export default RVCard
