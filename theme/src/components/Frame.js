import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import Loader from './_loader'

const StylediFrame = styled.iframe`
  width: 85vw;
  height: 85vh;
  border: 0;
  border-radius: 0.7rem;
  overflow: hidden;
  display: ${props => (props.isLoading ? 'none' : 'block')};
`

const Frame = props => {
  const [isLoading, setIsLoading] = useState(true)

  const loadHandler = () => {
    setIsLoading(false)
  }

  return (
    <>
      {isLoading && <Loader isLoading={isLoading} text={props.loadingText} />}
      <StylediFrame
        src={props.url}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
        onLoad={loadHandler}
        isLoading={isLoading}
        {...props}
      />
    </>
  )
}

Frame.defaultProps = {
  url: 'https://yarnpkg.com/en/package/mdx-deck-theme-garlic',
  loadingText: 'Loading...',
}

Frame.propTypes = {
  url: PropTypes.string,
  loadingText: PropTypes.string,
}

export default Frame
