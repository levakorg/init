require('colors')
const { writeFileSync } = require('fs')
const { execSync } = require('child_process')

const createFile = ({ fileName, content }) => {
  console.log(`Create file, ${fileName}`.blue.bgBrightWhite.bold)
  try {
    writeFileSync(fileName, content)
  } catch (e) {
    console.warn(`Error create ${fileName}, ${e}`.red.bgBrightWhite.bold)
  } finally {
    console.log(`The file ${fileName} created`.green.bgBrightWhite.bold)
  }
}

const runScript = ({ script }) => {
  console.log(`Run script, ${script}`.blue.bgBrightWhite.bold)
  try {
    execSync(script)
  } catch (e) {
    console.warn(`Error run ${script}, ${e}`.red.bgBrightWhite.bold)
  } finally {
    console.log(`The script ${script} worked`.green.bgBrightWhite.bold)
  }
}

module.exports = { createFile, runScript }
