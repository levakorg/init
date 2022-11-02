const { createFile } = require('../utils/node.js')

const createChangelog = () => {
  const fileName = 'CHANGELOG.md'
  const content = '# CHANGELOG\n\n## 1.0.0\n\n- Initial config\n'

  createFile({ fileName, content })
}

module.exports = createChangelog
