import React from 'react'
import { RVText } from 'components'
import { css } from 'emotion'

const EricTestPage = () => (
  <RVText h1 h3 className={css({ color: 'red' })} style={{ color: 'blue' }}>
    You can style using props, className, or style.<br />
    Text will be styled as following with styles coming later overriding styles
    preceeding it.<br />
    baseStyle > props > className > style<br />
    Styles can be either emotion style obj, or style object.
  </RVText>
)

export default EricTestPage
