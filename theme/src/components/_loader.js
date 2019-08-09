import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import colors from '../colors'
import { opacity } from '../util'

const StyledLoader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > p {
    font-size: 0.6em;
  }
  .loader {
    border: ${props => props.size / 8}em solid ${props => opacity(props.theme.default, 10)};
    border-top: ${props => props.size / 8}em solid ${props => opacity(props.theme.default, 60)};
    filter: brightness(120%);
    border-radius: 50%;
    width: ${props => props.size}em;
    z-index: 99;
    height: ${props => props.size}em;
    animation: spin 2s linear infinite;
    display: ${props => (props.isLoading ? 'block' : 'none')};

    align-self: center;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`

const Loader = props => {
  return (
    <StyledLoader {...props} theme={colors}>
      <div className="loader" />
      <p>{props.text}</p>
    </StyledLoader>
  )
}

Loader.defaultProps = {
  text: 'Loading CodeSandbox',
  isLoading: true,
  size: 4,
}

Loader.propTypes = {
  text: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
}

export default Loader