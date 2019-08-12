import React from 'react'
import prism from '@theme-ui/prism/presets/theme-ui'
import Provider from './components/Provider'

const WrappedProvider = props => <Provider {...props} />

export default {
  colors: {
    text: '#585159',
    background: '#F5F5EE',
    primary: '#A8595E',
    secondary: '#DB805E',
    accent: '#8EB38C',
    gray: '#585159',
  },
  googleFont: 'https://fonts.googleapis.com/css?family=IBM+Plex+Mono|IBM+Plex+Sans',
  fonts: {
    body: 'IBM Plex Sans, sans-serif',
    monospace: 'IBM Plex Mono, monospace',
  },
  styles: {
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
      ...prism,
      fontSize: '2.5rem',
    },
    quote: {
      fontStyle: 'italic',
    },
  },
  Provider: WrappedProvider,
}
