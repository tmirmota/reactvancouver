import React from 'react'
import { css } from 'emotion'
import { Layout } from 'styles'
import { RVBox } from 'components'

export default class RVCard extends React.Component {
  render() {
    const { className: customClassName, ...props } = this.props

    const restProps = {}
    const style = [Layout.card, styles.root]

    Object.keys(props).map(key => {
      if (props[key] === true && styles[key]) {
        style.push(styles[key])
      } else {
        restProps[key] = props[key]
      }
    })

    style.push(customClassName)

    const className = css(style)

    return <RVBox {...restProps} className={className} />
  }
}

const styles = {
  root: {
    padding: Layout.calcSpace(4),
  },
  center: {
    textAlign: 'center',
  },
}
