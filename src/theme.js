import React from 'react'
import Provider from './components/Provider'
import colors from './colors'

const WrappedProvider = props => <Provider {...props} />

export default {
  googleFont: 'https://fonts.googleapis.com/css?family=IBM+Plex+Mono|IBM+Plex+Sans',
  font: 'IBM Plex Sans, sans-serif',
  monospace: 'IBM Plex Mono, monospace',
  colors: {
    text: colors.default,
    background: colors.bg,
    link: colors.accent,
    code: colors.accent,
    codeBackground: colors.bg,
  },
  h1: {
    marginTop: 0,
    fontSize: '1.8em',
  },
  h2: {
    marginTop: 0,
  },
  h3: {
    marginTop: 0,
  },
  code: {
    fontSize: '0.7em',
  },
  pre: {
    fontSize: '0.7em',
  },
  quote: {
    fontStyle: 'italic',
  },
  Provider: WrappedProvider,
}
