import React from 'react'
import { RVBox } from 'components'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab)

const RVIcon = ({ fontAwesomeIcon, ...otherProps }) => {
  return (
    <RVBox tag="div" {...otherProps}>
      <FontAwesomeIcon {...fontAwesomeIcon} />
    </RVBox>
  )
}

export default RVIcon
