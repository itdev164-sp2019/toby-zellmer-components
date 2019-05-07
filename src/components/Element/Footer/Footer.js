// @flow
import React from 'react'
import PropTypes from 'prop-types'
import { BaseContainer } from '../BaseContainer'

export const Footer = (props: PropTypes.node) => (
    <BaseContainer as="footer" {...props} />
)

Footer.propTypes = {
    children: PropTypes.node.isRequired
}