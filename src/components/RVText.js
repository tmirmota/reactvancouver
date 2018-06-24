import React from 'react'
import { css } from 'emotion'
export default class RVText extends React.Component {
  render() {
    const {
      children,
      className: customClassName,
      style: customStyle,
      ...props
    } = this.props
    // 1. Apply base style
    const style = [styles.baseStyle]
    // 2. Apply prop styles
    Object.keys(props).map(key => {
      if (props[key] === true) {
        style.push(styles[key])
      }
    })
    // 3. Apply className and customStyle
    style.push(customClassName)
    style.push(customStyle)
    const className = css(style)
    return (
      <div {...props} className={className}>
        {children}
      </div>
    )
  }
}

const styles = {
  baseStyle: {
    color: '#333',
  },
  dark: {
    color: 'white',
  },
  h1: {
    fontSize: 32,
  },
  h2: {
    fontSize: 24,
  },
  h3: {
    fontSize: 20,
  },
  h4: {
    fontSize: 18,
  },
  h5: {
    fontSize: 16,
  },
  h6: {
    fontSize: 14,
  },
  h7: {
    fontSize: 12,
  },
  xBold: {
    fontWeight: '900',
  },
  bold: {
    fontWeight: '700',
  },
  thin: {
    fontWeight: '300',
  },
  xThin: {
    fontWeight: '100',
  },
  light: {
    color: '#aaa',
  },
  xLight: {
    color: '#eee',
  },
}
