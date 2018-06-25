import React from 'react'
import { css } from 'emotion'
import { Spacing } from 'styles'

export default class RVBox extends React.Component {
  render() {
    const {
      className: classNameProp,
      style: customStyle,
      tag: Component,
      ...props
    } = this.props

    const restProps = {}
    const style = []

    Object.keys(props).map(key => {
      if (props[key] === true && Spacing[key]) {
        style.push(Spacing[key])
      } else {
        restProps[key] = props[key]
      }
    })

    style.push(classNameProp)
    style.push(customStyle)

    const className = css(style)

    return <Component {...restProps} className={className} />
  }
}

RVBox.defaultProps = {
  tag: 'div',
}
