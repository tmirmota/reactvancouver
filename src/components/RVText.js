import React from 'react'
import { css } from 'emotion'
import { Typography } from 'styles'
import { RVBox } from 'components'

export default class RVText extends React.Component {
  render() {
    const { className: customClassName, ...props } = this.props

    const restProps = {}
    const style = [styles.base]

    Object.keys(props).map(key => {
      if (props[key] === true && Typography[key]) {
        style.push(Typography[key])
      } else if (props[key] === true && styles[key]) {
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
  base: {},
}
