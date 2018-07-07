import React from 'react'
import { Forms } from 'styles'
import { css } from 'emotion'

export default class RVInput extends React.Component {
  render() {
    const {
      className: customClassName,
      tag: Component,
      type,
      ...other
    } = this.props

    const className = css([Forms.input, customClassName])

    return (
      <div className={Forms.inputWrapper}>
        <Component {...other} type={type} className={className} />
      </div>
    )
  }
}

RVInput.defaultProps = {
  type: 'text',
  tag: 'input',
}
