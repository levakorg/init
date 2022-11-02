require('colors')
const createPackage = require('./scripts/createPackage.js')
const createLicense = require('./scripts/createLicense.js')
const createReadme = require('./scripts/createReadme.js')
const createChangelog = require('./scripts/createChangelog.js')
const createTodo = require('./scripts/createTodo.js')
const createEditorconfig = require('./scripts/createEditorconfig.js')
const createEnv = require('./scripts/createEnv.js')
const createGitignore = require('./scripts/createGitignore.js')
const createPrettier = require('./scripts/createPrettier.js')
const createEslint = require('./scripts/createEslint.js')
const createStylelint = require('./scripts/createStylelint.js')
const { runScript } = require('./utils/node.js')
const { parseArguments } = require('./utils/parsers.js')

const { argv: args } = process

const run = () => {
  const { params } = parseArguments({ args })

  console.log('Template configuration', params)

  const {
    usePackage,
    useLicense,
    useReadme,
    useTodo,
    useChangelog,
    useEnv,
    useGitignore,
    useEditorconfig,
    usePrettier,
    useStylelint,
    useEslint
  } = params

  const useDependencies = usePackage && (usePrettier || useStylelint || useEslint)

  usePackage && createPackage(params)
  useLicense && createLicense(params)
  useReadme && createReadme(params)
  useTodo && createTodo(params)
  useChangelog && createChangelog(params)
  useEnv && createEnv(params)
  useGitignore && createGitignore(params)
  useEditorconfig && createEditorconfig(params)
  usePrettier && createPrettier(params)
  useStylelint && createStylelint(params)
  useEslint && createEslint(params)

  usePrettier && runScript({ script: 'yarn add -D prettier @levakorg/prettier-config' })
  useStylelint && runScript({ script: 'yarn add -D stylelint prettier @levakorg/stylelint-config' })
  useEslint && runScript({ script: 'yarn add -D eslint prettier @levakorg/eslint-config' })
  useDependencies && runScript({ script: 'yarn format' })

  if (!usePackage) {
    usePrettier &&
      console.log(
        'You can use prettier scripts: {\n\t"prettier": "prettier check .",\n\t"prettier:fix": "prettier --write .",\n}'
          .yellow.bold
      )
    useStylelint &&
      console.log(
        'You can use stylelint scripts: {\n\tstylelint": "stylelint \'{**/*,*}.{css,less,scss,sass,styl,stylus,styled.js,styled.ts}\' --allow-empty-input",\n\t"stylelint:fix": "stylelint \'{**/*,*}.{css,less,scss,sass,styl,stylus,styled.js,styled.ts}\' --allow-empty-input --fix",\n}'
          .yellow.bold
      )
    useEslint &&
      console.log(
        'You can use eslint scripts: {\n\t"eslint": "eslint . --ext .json,.cjs,.mjs,.js,.ts,.jsx,.tsx,.vue,.svelte",\n\t"eslint:fix": "eslint . --ext .json,.cjs,.mjs,.js,.ts,.jsx,.tsx,.vue,.svelte --fix",\n}'
          .yellow.bold
      )
  }
}

module.exports = run
