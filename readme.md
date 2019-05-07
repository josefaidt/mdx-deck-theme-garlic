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
  authorUrl: 'https://josefaidt.me' // author url
}

const wrapper = props => <Provider {...config} {...props} />

export default {
  ...theme,
  Provider: wrapper,
}
```

Import into your `deck.mdx` file:

```mdx
export { default as theme } from './theme'

# My first slide
```

### Theme Context

Access the theme color values via `ThemeContext`:

```js
// my-component
import React, { useContext } from 'react'
import { ThemeContext } from 'mdx-deck-theme-garlic'

const MyComponent = props => {
  const context = useContext(ThemeContext)
  return (
    <h1 style={{ color: context.colors.default }}></h1>
  )
}
```

Provided by the `ThemeContext`:

- colors
- color utilities (currently only `opacity`)
  - `context.util.opacity(color: HexString!, opacityPercent: Int!)`

#### Starting Colors

In case you would like to roll your own ThemeContext and wrap the provided Provider, styles for the built-in components reference the following Object keys

```js
// colors.js
export default {
  default: '#585159',
  accent: '#A8595E',
  bg: '#F5F5EE',
}
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