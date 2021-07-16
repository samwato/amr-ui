# AMR UI
This is a react component library being build for internal projects.
The goal is to convert the existing modules into this library ready to be used.

## Project Setup
```
npx create-react-app amr-ui --template typescript --use-npm

npm uninstall react-scripts

rm -r public src
mkdir -p src/components
touch src/index.js

npx sb init
npm i @storybook/addon-postcss classnames prop-types
npm i -D storybook-css-modules-preset typescript-plugin-css-modules

// add to tsconfig.json
  "compilerOptions": {
    /..
    "plugins": [{ "name": "typescript-plugin-css-modules" }],
    /..
  }

// add to .storybook/main.js
  "@storybook/addon-postcss",
  "storybook-css-modules-preset",
  
// package.json remove react scripts
