const { createFile } = require('../utils/node.js')

const createEditorconfig = () => {
  const fileName = '.editorconfig'
  const content =
    'root = true\n\n[*]\nindent_style = space\nindent_size = 2\ntab_width = 2\nend_of_line = lf\ncharset = utf-8\ntrim_trailing_whitespace = true\ninsert_final_newline = true\n'

  createFile({ fileName, content })
}

module.exports = createEditorconfig
