import React from 'react'
import { css } from 'emotion'
import { Layout } from 'styles'
import { RVBox } from 'components'

export default class RVGrid extends React.Component {
  render() {
    const { className: customClassName, ...otherProps } = this.props

    const className = css([Layout.grid, customClassName])

    return <RVBox {...otherProps} className={className} />
  }
}
