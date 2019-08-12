import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import Loader from './_loader'

const StyledSandbox = styled.iframe`
  width: 95vw;
  height: 88vh;
  border: 0;
  z-index: 99;
  border-radius: 0.7rem;
  overflow: hidden;
  display: ${props => (props.isLoading ? 'none' : 'block')};
`

const CodeSandbox = props => {
  const [isLoading, setIsLoading] = useState(true)

  const loadHandler = () => {
    setIsLoading(false)
  }

  return (
    <>
      {isLoading && <Loader isLoading={isLoading} />}
      <StyledSandbox
        src={props.url}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
        onLoad={loadHandler}
        isLoading={isLoading}
        {...props}
      />
    </>
  )
}

CodeSandbox.defaultProps = {
  url: 'https://codesandbox.io/embed/new?codemirror=1',
}

CodeSandbox.propTypes = {
  url: PropTypes.string,
}

export default CodeSandbox
