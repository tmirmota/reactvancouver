import React from 'react'
import { RVBox } from 'components'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab)

export default class RVIcon extends React.Component {
  render() {
    const { href, fontAwesomeIcon, ...otherProps } = this.props
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <RVBox {...otherProps}>
          <FontAwesomeIcon {...fontAwesomeIcon} />
        </RVBox>
      </a>
    )
  }
}
