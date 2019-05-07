import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeConsumer } from 'styled-components'
import { BaseContainer } from '../Element'

const Query = styled(BaseContainer)`
    @media only screen and (max-width: ${props => props.size / 16}em) {
        display: none;
    }  
`

export const MediaQuery = ({ device, theme, children, ...props }) => {
    return (
        <ThemeConsumer>
        {theme => {
         const size = theme.media.sizes[device]
        

        return <Query size={size}>{children}</Query>
        }}
</ThemeConsumer>
    )
}

MediaQuery.propTypes = {
device: PropTypes.oneOf(['phone', 'tablet', 'desktop']),
children: PropTypes.node.isRequired
}