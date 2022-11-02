const { createFile } = require('../utils/node.js')
const ESLINT_TYPES = require('../constants/eslintTypes.js')

const createEslint = ({ useEslint }) => {
  const fileName = '.eslintrc.js'
  const content = `module.exports = {\n\textends: ['@levakorg/eslint-config${
    ESLINT_TYPES[useEslint] ?? ESLINT_TYPES.javascript
  }']\n}\n`

  createFile({ fileName, content })
}

module.exports = createEslint
