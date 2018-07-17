import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Buttons } from 'styles'
import { RVBox } from 'components'
import { injectStyles } from 'utils'

function openInNewTab(url) {
  const win = window.open(url, '_blank')
  win.focus()
}

const RVButton = ({ className: classNameProp, link, ...otherProps }) => {
  const className = classNames(Buttons.base, Buttons.medium, classNameProp)

  return (
    <RVBox
      className={className}
      {...otherProps}
      {...(link ? { onClick: () => openInNewTab(link) } : null)}
    />
  )
}

RVButton.propTypes = {
  tag: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  link: PropTypes.string,
}

RVButton.defaultProps = {
  tag: 'button',
  type: 'button',
}

export default injectStyles(Buttons)(RVButton)
