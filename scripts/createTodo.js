const { createFile } = require('../utils/node.js')

const createTodo = () => {
  const fileName = 'TODO.md'
  const content = '# TODO\n\n## 1.0.1\n'

  createFile({ fileName, content })
}

module.exports = createTodo
