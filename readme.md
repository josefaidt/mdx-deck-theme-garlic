# Garlic Theme for [mdx-deck](https://github.com/jxnblk/mdx-deck)

[![NPM Package Version](https://img.shields.io/npm/v/mdx-deck-theme-garlic.svg?style=flat-square)](https://www.npmjs.com/package/mdx-deck-theme-garlic)

Visit the [live demo](https://mdx-deck-theme-garlic.josefaidt.now.sh).

## Getting Started

In your new mdx-deck project, create a `theme.js` file and paste the following sample code to override the default values:

```jsx
// theme.js
import theme, { Provider } from 'mdx-deck-theme-garlic'

const config = {
  logo: () => <svg></svg>, // your SVG logo React component
  logoUrl: 'https://google.com', // link for logo wrapper
  author: 'josef.aidt', // author name
  authorUrl: 'https://josefaidt.me' // author name
}

const wrapper = props => <Provider {...config} {...props} />

export default {
  ...theme,
  Provider: wrapper,
}
```

## Layout Components

### Contour

```markdown
import { Contour } from 'mdx-deck-theme-garlic'

<Contour>

# Title

some text

</Contour>
```