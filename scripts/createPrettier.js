const { createFile } = require('../utils/node.js')

const createPrettier = () => {
  const fileName = '.prettierrc.js'
  const content = "module.exports = {\n\t...require('@levakorg/prettier-config')\n}\n"

  createFile({ fileName, content })
}

module.exports = createPrettier
