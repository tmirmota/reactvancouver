import React from 'react'
import { RVBox } from 'components'
import { Colors } from 'styles'

const styles = {
  background: Colors.theme.primary,
  borderRadius: 20,
  color: Colors.grey.white,
  width: 'fit-content',
}

const RVBadge = props => {
  const { className: customClassName, ...other } = props
  const className = [customClassName, styles]
  return <RVBox className={className} px2 py1 {...other} />
}

export default RVBadge
