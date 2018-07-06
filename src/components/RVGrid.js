import React from 'react'
import { css } from 'emotion'
import { Layout } from 'styles'
import { RVBox } from 'components'
import { breakpoints } from 'styles/Layout'

export default class RVGrid extends React.Component {
  render() {
    const {
      className: customClassName,
      gridTemplateColumns,
      ...props
    } = this.props

    const restProps = {}
    const style = [Layout.grid.root]

    Object.keys(props).map(key => {
      if (props[key] === true && Layout.grid[key]) {
        style.push(Layout.grid[key])
      } else {
        restProps[key] = props[key]
      }
    })

    if (gridTemplateColumns) {
      style.push(breakpoints({ gridTemplateColumns }))
    }

    style.push(customClassName)

    const className = css(style)

    return <RVBox {...restProps} className={className} />
  }
}
