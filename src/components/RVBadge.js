import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'react-emotion'
import { RVBox } from 'components'
import { Colors } from 'styles'

const styles = css({
  background: Colors.theme.primary,
  borderRadius: 20,
  color: Colors.grey.white,
  width: 'fit-content',
})

const RVBadge = ({ className: classNameProp, ...other }) => {
  const className = [styles, classNameProp]
  return <RVBox className={className} px2 py1 {...other} />
}

RVBadge.propTypes = {
  className: PropTypes.string,
}

export default RVBadge
