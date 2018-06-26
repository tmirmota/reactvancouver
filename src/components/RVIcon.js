import React from 'react'
import { RVBox } from 'components'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab)

export default class RVIcon extends React.Component {
  render() {
    const { fontAwesomeIcon, ...otherProps } = this.props
    return (
      <RVBox {...otherProps}>
        <FontAwesomeIcon {...fontAwesomeIcon} />
      </RVBox>
    )
  }
}
