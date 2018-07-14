import React from 'react'
import { Typography } from 'styles'
import { RVBox } from 'components'
import classNames from 'classnames'

export default class RVText extends React.Component {
  render() {
    const { className: classNameProp, ...props } = this.props

    const restProps = {}
    const componentClasses = []

    Object.keys(props).map(key => {
      if (props[key] === true && Typography[key]) {
        componentClasses.push(Typography[key])
      } else {
        restProps[key] = props[key]
      }
    })

    const className = classNames(classNameProp)

    return <RVBox {...restProps} className={className} />
  }
}
