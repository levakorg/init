const { createFile } = require('../utils/node.js')

const createGitignore = ({ useEnv }) => {
  const fileName = '.gitignore'
  const content = `# dependencies\n/node_modules\n\nnpm-debug.log\nyarn-error.log${
    useEnv ? '\n\n# environment\n.env\n.env.dev\n.env.stage' : ''
  }\n\n# editors\n/.idea\n/.vscode\n\n# other\n.DS_Store\n`

  createFile({ fileName, content })
}

module.exports = createGitignore
