import React from 'react'
import { css } from 'emotion'
import { Layout } from 'styles'
import { RVBox } from 'components'
import PropTypes from 'prop-types'

export default class RVCard extends React.Component {
  render() {
    const { className: customClassName, ...props } = this.props

    const className = css([Layout.card, customClassName])

    return <RVBox {...props} className={className} />
  }
}

RVCard.propTypes = {
  className: PropTypes.string,
}
