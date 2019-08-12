# Garlic Theme for [mdx-deck](https://github.com/jxnblk/mdx-deck)

[![NPM Package Version](https://img.shields.io/npm/v/mdx-deck-theme-garlic.svg?style=flat-square)](https://www.npmjs.com/package/mdx-deck-theme-garlic)

Visit the [live demo](https://mdx-deck-theme-garlic.josefaidt.now.sh). SVG Designs made possible thanks to [Hero Patterns by Steve Schoger](https://www.heropatterns.com/).

## Getting Started

At the top of your `deck.mdx` file, import the theme and add to the `themes` array:

```md
import theme from 'mdx-deck-theme-garlic'

export const themes = [
  theme,
]

# My first slide
```

### To use Logo and Author

In your new mdx-deck project, create a `theme.js` file, create a config object with your values (values not provided will not be rendered, therefore you can optionally use either logo, author, or both) as shown below:

```jsx
// theme.js
import React from 'react'
import theme, { Provider, GithubIcon } from 'mdx-deck-theme-garlic'

const config = {
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
```

Import into your `deck.mdx` file:

```md
export { default as theme } from './theme'

# My first slide
```

## Layout Components

### Contour

#### Props

```js
Contour.defaultProps = {
  invert: false,
  contentWidth: 70, // out of 100
}
```

#### Example

```markdown
import { Contour } from 'mdx-deck-theme-garlic'

<Contour>

# Title

some text

</Contour>
```

### Contour Invert

<details>
<summary>Props</summary>

```js
Contour.props = {
  invert: true,
  contentWidth: 70, // default
}
```

</details>

<details>
<summary>Example</summary>

```markdown
import { Contour } from 'mdx-deck-theme-garlic'

<Contour invert>

# Title

some text

</Contour>
```

</details>

### Contour with Custom Width

<details>
<summary>Props</summary>

```js
Contour.props = {
  invert: false, // default
  contentWidth: 90,
}
```

</details>

<details>
<summary>Example</summary>

```markdown
import { Contour } from 'mdx-deck-theme-garlic'

<Contour contentWidth={90}>

# Title

some text

</Contour>
```

</details>

## Content Components

### CodeSandbox

**Props**

```js
CodeSandbox.defaultProps = {
  url: 'https://codesandbox.io/embed/new?codemirror=1',
}
```

**Example**

```markdown
import { CodeSandbox } from 'mdx-deck-theme-garlic'

<CodeSandbox
  url="https://codesandbox.io/embed/new?codemirror=1"
/>
```

### Frame

**Props**

```js
Frame.defaultProps = {
  url: 'https://yarnpkg.com/en/package/mdx-deck-theme-garlic',
  loadingText: 'Loading...',
}
```

**Example**

```markdown
import { Frame } from 'mdx-deck-theme-garlic'

<Frame
  url="https://yarnpkg.com/en/package/mdx-deck-theme-garlic"
  loadingText="Loading..."
/>
```
