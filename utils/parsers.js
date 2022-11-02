const TEMPLATE_TYPES = require('../constants/templateTypes.js')
const { isBoolean } = require('./types')

const parseArguments = ({ args }) => {
  const onlyArgs = args.filter((arg) => !arg.startsWith('/'))
  const { fromEntries, entries } = Object

  if (onlyArgs < 2) {
    throw new Error(
      'You need 2 arguments. The first is the name of the template, the second is its description, which will be in a package.json'
    )
  }

  const initParams = {
    '--name': parseName({ name: onlyArgs[0] }),
    '--description': onlyArgs[1],
    '--use-editorconfig': true,
    '--use-gitignore': true,
    '--use-prettier': true
  }

  const packageParams = {
    script: {
      usePackage: 'script',
      useLicense: true,
      useReadme: true,
      useChangeLog: true,
      useTodo: true,
      useEnv: false,
      useStylelint: false,
      useEslint: 'javascript'
    },
    package: {
      usePackage: 'package',
      useLicense: true,
      useReadme: true,
      useChangeLog: true,
      useTodo: true,
      useEnv: false,
      useStylelint: false,
      useEslint: 'javascript'
    },
    project: {
      usePackage: 'project',
      useLicense: false,
      useReadme: false,
      useChangeLog: false,
      useTodo: false,
      useEnv: true,
      useStylelint: 'css',
      useEslint: 'javascript'
    }
  }

  const makeKey = ({ key }) => {
    return key
      .split('')
      .slice(2)
      .map((l, i, arr) => (l === '-' ? '' : null) ?? (arr[i - 1] === '-' ? l.toUpperCase() : l))
      .join('')
  }

  onlyArgs
    .slice(2)
    .forEach(
      (arg, i, arr) =>
        arg.startsWith('--') &&
        (initParams[arg] = arr[i + 1] === 'false' ? false : arr[i + 1] ?? true)
    )

  const packageType = initParams['--use-package']

  if (
    packageType !== TEMPLATE_TYPES.script &&
    packageType !== TEMPLATE_TYPES.package &&
    packageType !== TEMPLATE_TYPES.project &&
    packageType !== false &&
    packageType !== true &&
    !Object.is(packageType, undefined)
  ) {
    throw new Error(
      'The package must be of string type: "script" | "package" | "project" or boolean'
    )
  }

  const params = {
    ...packageParams[packageType || TEMPLATE_TYPES.project],
    ...fromEntries(entries(initParams).map(([key, value]) => [makeKey({ key }), value])),
    usePackage: isBoolean(packageType)
      ? packageType && TEMPLATE_TYPES.project
      : packageType ?? TEMPLATE_TYPES.project
  }

  return { params }
}

const parseName = ({ name }) => {
  return name
    .split(/\W/)
    .filter((letter) => letter)
    .join('-')
    .split('')
    .map((l, i) => (l === l.toLowerCase() ? l : (i === 0 ? '' : '-') + l.toLowerCase()))
    .join('')
}

module.exports = { parseArguments, parseName }
