import React from 'react'
import Provider from './components/Provider'
import colors from './colors'

const WrappedProvider = props => <Provider {...props} />

export default {
  googleFont: 'https://fonts.googleapis.com/css?family=IBM+Plex+Mono|IBM+Plex+Sans',
  fonts: {
    body: 'IBM Plex Sans, sans-serif',
    monospace: 'IBM Plex Mono, monospace',
  },
  colors: {
    text: '#585159',
    background: '#F5F5EE',
    primary: '#A8595E',
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
  pre: {
    fontSize: '0.7em',
  },
  code: {
    fontSize: '0.7em',
    color: 'primary',
  },
  quote: {
    fontStyle: 'italic',
  },
  Provider: WrappedProvider,
}
