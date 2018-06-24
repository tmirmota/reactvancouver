import React from 'react'
import { RVText, RVButton, RVSwitch } from 'components'
import { css } from 'emotion'

const EricTestPage = () => (
  <div>
    HELLO
    <RVText
      h1
      h3
      className={styles.custom}
      style={{ color: 'black', fontSize: 15 }}
    >
      You can style using props, className, or style.<br />
      Text will be styled as following with styles coming later overriding
      styles preceeding it.<br />
      {'baseStyle > props > className > style'}
      <br />
      Styles can be either emotion style obj, or style object.
    </RVText>
    <RVButton>Button</RVButton>
    <RVSwitch>Switch</RVSwitch>
  </div>
)

const styles = {
  custom: css({
    color: 'red',
  }),
}

export default EricTestPage
