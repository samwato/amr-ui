# AMR UI
This repo is a React component library for all ui elements related to the AMR Hub project.
These new components are written in Typescript and visualized with Storybook.
The idea is to replace the src/ui folder with better components via npm.
For future this library will be used as the foundation for all custom GUI projects.

## Things Todo
- Continue work on replacing existing components with Typescript
- Add testing


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

