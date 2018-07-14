import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'styles'
import { RVBox } from 'components'
import classNames from 'classnames'

const RVCard = ({ className: classNameProp, ...otherProps }) => {
  const className = classNames(Layout.card, classNameProp)

  return <RVBox className={className} {...otherProps} />
}

RVCard.propTypes = {
  className: PropTypes.string,
}

export default RVCard
