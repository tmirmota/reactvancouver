import React from 'react'
import { RVBox } from 'components'
import { container } from 'styles/Layout'
import styled from 'react-emotion'

const Container = styled.div(container)

const RVContainer = ({ className, children, ...otherProps }) => (
  <RVBox {...otherProps}>
    <Container className={className}>{children}</Container>
  </RVBox>
)

export default RVContainer
