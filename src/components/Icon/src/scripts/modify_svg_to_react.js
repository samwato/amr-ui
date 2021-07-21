#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const [svgType, MODE = 'dev'] = process.argv.slice(2)

const regexPatterns = [
  '',
  [ /stroke-width/g, 'strokeWidth' ],
  [ /stroke-linecap/g, 'strokeLinecap' ],
  [ /stroke-linejoin/g, 'strokeLinejoin' ],
  [ /fill-rule/g, 'fillRule' ],
  [ /clip-rule/g, 'clipRule' ],
]

const svgReactConvert = async (type) => {
  const directory = path.join(__dirname, '../', type)
  // List out files in directory
  const files = fs.readdirSync(directory)
  // Loop over found files
  for (const fileName of files) {
    const filePath = path.join(directory, fileName);
    // Read contents of file
    const fileContents = fs.readFileSync(filePath, 'utf8')
    // Regex reducer to implement all the regex expressions
    const regexReducer = (accString, [regExp, replacement]) => {
      if (!accString) {
        accString = fileContents
      }
      const newAccString = accString.replace(regExp, replacement)
      if (MODE !== 'prod') console.log(regExp, newAccString)
      return newAccString
    }
    // Resulting svg string
    const resultContents = regexPatterns.reduce(regexReducer)
    // Write new contents to existing file
    if (MODE === 'prod') fs.writeFileSync(filePath, resultContents, 'utf8')
    if (MODE !== 'prod') {
      console.log(`updated ${fileName} but not saved`)
    } else {
      console.log(`updated ${fileName} and saved`)
    }
  }
}

if (svgType === undefined && ( svgType !== 'outline' || svgType !== 'solid' )) {
  console.error('First argument was not "outline" or "solid"')
} else {
  svgReactConvert(svgType)
}
