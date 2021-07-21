#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const [MODE = 'dev'] = process.argv.slice(2)

const generateInterface = async () => {
  const directory = path.join(__dirname, '../solid')
  // List out files in directory
  const files = fs.readdirSync(directory)
  // Get rid of file extentsion
  const filenames = files.map(n => n.split('.')[0])
  // Filter out unique names
  const uniqueNames = filenames.filter((name, index, self) => {
    if (name === 'index') {
      return false
    } else if (self.indexOf(name) === index) {
      return true
    } else {
      return false
    }
  })
  // Create a string
  const interfaceString = uniqueNames.join('\' | \'')
  
  console.log(interfaceString)
  // // Loop over found files
  // for (const fileName of files) {
  //   const filePath = path.join(directory, fileName);
  //   // Read contents of file
  //   const fileContents = fs.readFileSync(filePath, 'utf8')
  //   // Regex reducer to implement all the regex expressions
  //   const regexReducer = (accString, [regExp, replacement]) => {
  //     if (!accString) {
  //       accString = fileContents
  //     }
  //     const newAccString = accString.replace(regExp, replacement)
  //     if (MODE !== 'prod') console.log(regExp, newAccString)
  //     return newAccString
  //   }
  //   // Resulting svg string
  //   const resultContents = regexPatterns.reduce(regexReducer)
  //   // Write new contents to existing file
  //   if (MODE === 'prod') fs.writeFileSync(filePath, resultContents, 'utf8')
  //   if (MODE !== 'prod') {
  //     console.log(`updated ${fileName} but not saved`)
  //   } else {
  //     console.log(`updated ${fileName} and saved`)
  //   }
  // }
}

generateInterface()
