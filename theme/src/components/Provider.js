import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { useThemeUI, ThemeProvider } from 'theme-ui'
import Prism from '@theme-ui/prism'
import { useDeck } from 'mdx-deck'
import ProgressBar from './ProgressBar'
import StyledIcon from './Icon.css'

const components = {
  // eslint-disable-next-line react/display-name
  pre: ({ children }) => <>{children}</>,
  code: Prism,
}

const StyledTag = styled.a`
  position: fixed;
  right: 0;
  top: 0;
  margin: 1rem;
  z-index: 1;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text || 'thistle'};
  text-decoration: none;
`

const StyledLayout = styled.main`
  font-family: ${({ theme }) => theme.fonts.body};
`

const Provider = props => {
  const { theme } = useThemeUI()
  const deck = useDeck()
  const { logo: Logo, logoUrl, author, authorUrl, children } = props
  console.log(deck)
  return (
    <StyledLayout>
      {Logo && logoUrl ? (
        <StyledIcon href={logoUrl} target="_blank" theme={theme}>
          {Logo ? <Logo theme={theme} /> : null}
        </StyledIcon>
      ) : (
        <h1>Hello World</h1>
      )}
      {author && authorUrl ? (
        <StyledTag href={authorUrl} target="_blank" theme={theme}>
          {author}
        </StyledTag>
      ) : (
        <h1>Hello World</h1>
      )}
      <ThemeProvider theme={theme} components={components}>
        {children}
      </ThemeProvider>
      <ProgressBar percent={Math.floor((100 / (deck.length - 1)) * deck.index)} />
    </StyledLayout>
  )
}

Provider.propTypes = {
  logo: PropTypes.func,
  logoUrl: PropTypes.string,
  author: PropTypes.string,
  authorUrl: PropTypes.string,
}

Provider.defaultProps = {
  logo: null,
  logoUrl: null,
  author: null,
  authorUrl: null,
}

export default Provider
