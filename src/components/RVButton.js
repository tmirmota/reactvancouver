import React from 'react'
import { css } from 'emotion'
import { Buttons } from 'styles'
import { RVBox } from 'components'

export default class RVButton extends React.Component {
  render() {
    const {
      onClick,
      onPress,
      className: customClassName,
      ...props
    } = this.props

    const restProps = {}
    const style = [Buttons.base, Buttons.fill, Buttons.medium]

    Object.keys(props).map(key => {
      if (props[key] === true && Buttons[key]) {
        style.push(Buttons[key])
      } else {
        restProps[key] = props[key]
      }
    })

    style.push(customClassName)
    const className = css(style)

    return (
      <RVBox
        {...restProps}
        className={className}
        onClick={onClick || onPress}
      />
    )
  }
}

RVButton.defaultProps = {
  tag: 'button',
}
