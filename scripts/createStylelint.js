const { createFile } = require('../utils/node.js')
const STYLELINT_TYPES = require('../constants/stylelintTypes.js')

const createStylelint = ({ useStylelint }) => {
  const fileName = '.stylelintrc.js'
  const content = `module.exports = {\n\textends: ['@levakorg/stylelint-config${
    STYLELINT_TYPES[useStylelint] ?? STYLELINT_TYPES.css
  }']\n}\n`

  createFile({ fileName, content })
}

module.exports = createStylelint
