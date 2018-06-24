import React from 'react'
import { css } from 'emotion'

export default class RVButton extends React.Component {
  render() {
    const { onPress, ...props } = this.props
    return (
      <div {...props} onPress={onPress}>
        Button
      </div>
    )
  }
}
