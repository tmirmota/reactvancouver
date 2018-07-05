import React from 'react'
import { Forms } from 'styles'
import { css } from 'emotion'

export default class RVLabel extends React.Component {
  render() {
    const { className: customClassName, ...other } = this.props

    const className = css([Forms.label, customClassName])

    return <label {...other} className={className} />
  }
}
