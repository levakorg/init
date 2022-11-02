const { createFile } = require('../utils/node.js')

const createReadme = ({ name, description }) => {
  const fileName = 'README.md'
  const content = `# ${name}\n\n${description}`

  createFile({ fileName, content })
}

module.exports = createReadme
