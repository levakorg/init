const { createFile } = require('../utils/node.js')

const createEnv = () => {
  const fileNameLis = ['.env', '.env.dev', '.env.stage', '.env.example']
  const content = ''

  fileNameLis.forEach((fileName) => createFile({ fileName, content }))
}

module.exports = createEnv
