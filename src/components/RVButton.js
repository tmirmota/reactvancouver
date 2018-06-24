import React from 'react'
import { css } from 'emotion'
import { Buttons } from 'styles'

export default class RVButton extends React.Component {
  render() {
    const {
      children,
      onClick,
      onPress,
      className: customClassName,
      style: customStyle,
      ...props
    } = this.props
    const restProps = {}
    // 1. Apply base style
    const style = [Buttons.base]
    // 2. Apply prop Buttons
    Object.keys(props).map(key => {
      if (props[key] === true && Buttons[key]) {
        style.push(Buttons[key])
      } else {
        restProps[key] = props[key]
      }
    })
    // 3. Apply className and customStyle
    style.push(customClassName)
    style.push(customStyle)
    const className = css(style)

    return (
      <button {...restProps} className={className} onClick={onClick || onPress}>
        {children}
      </button>
    )
  }
}
