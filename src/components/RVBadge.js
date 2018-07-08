import React from 'react'
import { RVBox } from 'components'

const RVBadge = props => {
  const { ...other } = props
  return <RVBox {...other} />
}

export default RVBadge
