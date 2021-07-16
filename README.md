# Steps
```
npx create-react-app amr-ui --template typescript --use-npm

npm uninstall react-scripts

rm -r public src
mkdir -p src/components
touch src/index.js

npx sb init
npm i @storybook/addon-postcss
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







Initialise the project:

# Clone the files
  npx degit chromaui/learnstorybook-design-system-template learnstorybook-design-system

  cd learnstorybook-design-system

# Install the dependencies
  yarn install


Add Prettier:
  yarn add --dev prettier

Add Storybook:
  npx -p @storybook/cli sb init
  yarn storybook

Build out each component

Distribute to NPM:

  yarn add --dev @babel/cli cross-env
  edit package.json for something

  # Initializes a scoped package
  yarn init --scope=@samwato

  yarn add --dev auto
  yarn auto create-labels


Add Prettier:
  yarn add --dev prettier
