import React from 'react'
import Img from 'gatsby-image'
import { Images } from 'styles'
import { RVBox } from 'components'
import { css } from 'emotion'

export default class RVFavicon extends React.Component {
  render() {
    const { img, ...otherProps } = this.props

    return (
      <RVBox {...otherProps}>
        <Img className={Images.favicon} {...img} />
      </RVBox>
    )
  }
}
