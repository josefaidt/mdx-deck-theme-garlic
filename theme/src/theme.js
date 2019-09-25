import React from 'react'
import prism from '@theme-ui/prism/presets/theme-ui'
import Provider from './components/Provider'

const WrappedProvider = props => <Provider {...props} />

export default {
  colors: {
    text: '#585159',
    background: '#F5F5EE',
    primary: '#A8595E',
    secondary: '#EAA638',
    accent: '#8EB38C',
    muted: '#D6DEC84d',
    gray: '#8EB38C',
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
      backgroundColor: 'muted',
      borderRadius: '0.3rem',
      fontSize: '2.5rem',
    },
    blockquote: {
      marginTop: 0,
      marginBottom: 0,
      fontWeight: 'normal',
      fontStyle: 'italic',
    },
  },
  Provider: WrappedProvider,
}
