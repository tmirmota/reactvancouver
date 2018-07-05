import React from 'react'
import { Forms } from 'styles'
import { css } from 'emotion'

export default class RVInput extends React.Component {
  render() {
    const { className: customClassName, type, ...other } = this.props

    const className = css([Forms.input, customClassName])

    return <input {...other} type={type} className={className} />
  }
}

RVInput.defaultProps = {
  type: 'text',
}
