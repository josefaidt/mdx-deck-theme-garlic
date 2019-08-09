import React from 'react'
import theme, { Provider, GithubIcon } from 'mdx-deck-theme-garlic'

const config = {
  // eslint-disable-next-line react/display-name
  logo: () => <GithubIcon />,
  logoUrl: 'https://github.com/josefaidt/mdx-deck-theme-garlic',
  author: '@josefaidt',
  authorUrl: 'https://josefaidt.dev/',
}

const wrapper = props => <Provider {...config} {...props} />

export default {
  ...theme,
  Provider: wrapper,
}
