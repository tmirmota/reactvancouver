import React from 'react'
import Img from 'gatsby-image'
import { Images } from 'styles'
import { RVBox } from 'components'

export default class RVAvatar extends React.Component {
  render() {
    const { img, ...otherProps } = this.props

    return (
      <RVBox {...otherProps}>
        <Img className={Images.avatar} {...img} />
      </RVBox>
    )
  }
}
