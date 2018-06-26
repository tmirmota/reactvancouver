import React from 'react'
import { css } from 'emotion'
import { Layout } from 'styles'
import { RVBox } from 'components'

export default class RVGrid extends React.Component {
  render() {
    const { className: customClassName, ...props } = this.props

    const restProps = {}
    const style = [Layout.grid]

    Object.keys(props).map(key => {
      if (props[key] === true && Layout[key]) {
        style.push(Layout[key])
      } else {
        restProps[key] = props[key]
      }
    })

    style.push(customClassName)

    const className = css(style)

    return <RVBox {...restProps} className={className} />
  }
}
