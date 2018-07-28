import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { RVBox } from 'components'
import { Images } from 'styles'

const RVAvatar = ({ img, ...otherProps }) => (
  <RVBox {...otherProps}>
    <Img className={Images.avatar} {...img} />
  </RVBox>
)

RVAvatar.propTypes = {
  img: PropTypes.object.isRequired,
}

export default RVAvatar
