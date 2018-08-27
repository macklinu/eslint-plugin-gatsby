# eslint-plugin-gatsby

> Helps enforce best practices for Gatsby projects

:warning: _This is a README to help determine if this would be useful to build - the code for this doesn't exist yet._

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Setup](#setup)
- [Rules](#rules)
  - [`no-invalid-node-api`](#no-invalid-node-api)
  - [`no-invalid-browser-api`](#no-invalid-browser-api)
  - [`no-invalid-ssr-api`](#no-invalid-ssr-api)
  - [`no-invalid-gatsby-config`](#no-invalid-gatsby-config)
- [Contributing](#contributing)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Setup

Nothing to set up (yet). :smile:

## Rules

### `no-invalid-node-api`

Warns when the `gatsby-node.js` file exports an unknown Node API function.

:white_check_mark: Example of passing code:

```js
// gatsby-node.js

exports.createPages = () => {
  // ...
}
```

:x: Example of code that produces violations:

```js
// gatsby-node.js

exports.someUnknownFunction = () => {
  // ...
}
```

### `no-invalid-browser-api`

Warns when the `gatsby-browser.js` file exports an unknown browser API function.

:white_check_mark: Example of passing code:

```js
// gatsby-browser.js

exports.onClientEntry = () => {
  // ...
}
```

:x: Example of code that produces violations:

```js
// gatsby-browser.js

exports.someUnknownFunction = () => {
  // ...
}
```

### `no-invalid-ssr-api`

Warns when the `gatsby-ssr.js` file exports an unknown SSR API function.

:white_check_mark: Example of passing code:

```js
// gatsby-ssr.js

exports.onRenderBody = () => {
  // ...
}
```

:x: Example of code that produces violations:

```js
// gatsby-ssr.js

exports.someUnknownFunction = () => {
  // ...
}
```

### `no-invalid-gatsby-config`

Warns when the `gatsby-config.js` contains unknown configuration options.

:white_check_mark: Example of passing code:

```js
// gatsby-config.js

module.exports = {
  siteMetadata: {},
  plugins: [],
  proxy: {},
  // ...
}
```

:x: Example of code that produces violations:

```js
// gatsby-config.js

module.exports = {
  unknownOption: {},
}
```

## Contributing

If you have suggestions for a rule or improvements to any of the rules listed here (naming, documentation, etc.), please open an issue or PR. :smile:
