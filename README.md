# react-gifs

Simple react app with the following config:

- React, ReactDOM
- Webpack 4
- Babel with es2015 and react presets
- Bootstrap (css only, loaded from a cdn in `index.html`)
- work with `.js` or `.jsx` files
- main `application.scss` stylesheet is imported in `index.js` as a module to enjoy hot reloading

## Scripts

To start the local Webpack Dev Server (usually on port `8080`):

```bash
yarn start
```

To lint all JavaScript files in the `src` folder:

```bash
yarn lint
```

To build and deploy your app to `gh-pages` branch on the GitHub repo:

```bash
yarn deploy
```
## Features
1. When a user types a query, the list of Gifs should display the 10 first results the `giphy-api` returns.
1. When a user clicks on a gif from the list, it should appear on the main scene on the left.
1. (Optional) When a user focuses in / out of the input, find a nice way to twist the UI on the left part (opacity, background-color, border...) to show your user he's in / out of the input!
