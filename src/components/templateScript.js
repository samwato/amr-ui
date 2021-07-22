#!/usr/bin/env node

const fs = require('fs')
const { mkdir, copyFile } = require('fs/promises')
const path = require('path')
const [func, name] = process.argv.slice(2)

const makeTemplate = async (name) => {
  // Needed files
  const templateFiles = [
    'index.js',
    'TEMPLATENAME.module.css',
    'TEMPLATENAME.stories.tsx',
    'TEMPLATENAME.tsx',
  ]
  const templateDir = path.join('./', '_TEMPLATE')
  try {
    // Init
    const newDir = path.join('./', name)
    // Check if folder exists
    const dirExists = fs.existsSync(newDir)
    if (dirExists) {
      throw new Error('Directory name already exists, won\'t override')
    }
    // Create empty files
    for (let i = 0; i < templateFiles.length; i++) {
      const templateFileName = templateFiles[i]
      const newFileName = templateFileName.replace('TEMPLATENAME', name)
      const newFilePath = path.join(newDir, newFileName)
      await mkdir(newDir, { recursive: true })
      await copyFile(path.join(templateDir, templateFileName), newFilePath)
      // const fileContents = fs.readFileSync(newFilePath, 'utf8')
      // const updatedFileContents = fileContents.replace(/TEMPLATENAME/g, name)
      // fs.writeFileSync(updatedFileContents, newFilePath)
    }
  } catch (err) {
    console.error(err.message)
  }
}

if (func === 'make_template') {
  makeTemplate(name)
}
