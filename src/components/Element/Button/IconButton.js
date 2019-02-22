import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ButtonBase } from './ButtonBase'

const StyledButton = styled(ButtonBase)`
  ${props => props.theme.variants.iconButton[props.variant || 'primary']};
`

export const IconButton = styled(({ icon, ...props }) => {
  let clone = React.cloneElement(icon, ...props)
  return <StyledButton as={clone.type} {...props} className={props.className} />
})`
  // We could add styles here, but it is not necessary.
`

IconButton.defaultProps = {
  size: 24
}

IconButton.propTypes = {
  icon: PropTypes.node.isRequired,
  variant: PropTypes.string
}