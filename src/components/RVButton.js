import React from 'react'
import { css } from 'emotion'
import { Buttons } from 'styles'

export default class RVButton extends React.Component {
  render() {
    const {
      children,
      onPress,
      className: customClassName,
      style: customStyle,
      ...props
    } = this.props
    // 1. Apply base style
    const style = [Buttons.base]
    // 2. Apply prop Buttons
    Object.keys(props).map(key => {
      if (props[key] === true) {
        style.push(Buttons[key])
      }
    })
    // 3. Apply className and customStyle
    style.push(customClassName)
    style.push(customStyle)
    const className = css(style)

    return (
      <div {...props} className={className} onPress={onPress}>
        {children}
      </div>
    )
  }
}
