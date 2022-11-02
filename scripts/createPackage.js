const { createFile } = require('../utils/node.js')
const TEMPLATE_TYPES = require('../constants/templateTypes.js')

const createPackage = ({ name, description, usePackage, usePrettier, useStylelint, useEslint }) => {
  const fileName = 'package.json'
  const content = getPackageContent({
    name,
    description,
    usePackage,
    usePrettier,
    useStylelint,
    useEslint
  })

  createFile({ fileName, content })
}

const getPackageContent = ({
  name: contentName,
  description: contentDescription,
  usePackage,
  usePrettier,
  useStylelint,
  useEslint
}) => {
  const isScript = usePackage === TEMPLATE_TYPES.script
  const isPackage = usePackage === TEMPLATE_TYPES.package
  const isProject = usePackage === TEMPLATE_TYPES.project

  const isPrivate = `\t"private": ${isProject},\n`
  const main = '\t"main": "index.js",\n'
  const bin = isScript ? '\t"bin": "bin.js",\n' : ''
  const version = '\t"version": "1.0.0",\n'
  const name = `\t"name": "@levakorg/${contentName}",\n`
  const description = `\t"description": "${contentDescription},\n`
  const author = '\t"author": "levakorg authors <levakorg@gmail.com>",\n'
  const homepage = !isProject ? `\t"homepage": "https://github.com/levakorg/${contentName}",\n` : ''
  const repository = !isProject
    ? `\t"repository": "https://github.com/levakorg/${contentName}",\n`
    : ''
  const bugs = !isProject ? `\t"bugs": "https://github.com/levakorg/${contentName}/issues",\n` : ''
  const license = !isProject ? '\t"license": "MIT",\n' : ''
  const keywords = !isProject ? '\t"keywords": [],\n' : ''
  const files = !isProject
    ? '\t"files": [\n\t\t"LICENSE",\n\t\t"README.md",\n\t\t"TODO.md",\n\t\t"CHANGELOG.md",\n\t\t"index.js"\n\t],\n'
    : ''
  const publishConfig = !isProject ? '\t"publishConfig": {\n\t\t"access": "public"\n\t},\n' : ''
  const scripts = `\t"scripts": {${
    usePrettier
      ? `\n\t\t"prettier": "prettier check .",\n\t\t"prettier:fix": "prettier --write .",\n`
      : ''
  }${
    useStylelint
      ? `\t\t"stylelint": "stylelint '{**/*,*}.{css,less,scss,sass,styl,stylus,styled.js,styled.ts}' --allow-empty-input",\n\t\t"stylelint:fix": "stylelint '{**/*,*}.{css,less,scss,sass,styl,stylus,styled.js,styled.ts}' --allow-empty-input --fix",\n`
      : ''
  }${
    useEslint
      ? `\t\t"eslint": "eslint . --ext .json,.cjs,.mjs,.js,.ts,.jsx,.tsx,.vue,.svelte",\n\t\t"eslint:fix": "eslint . --ext .json,.cjs,.mjs,.js,.ts,.jsx,.tsx,.vue,.svelte --fix",\n`
      : ''
  }${
    usePrettier || useStylelint || useEslint
      ? `\t\t"format": "${usePrettier ? 'yarn prettier:fix' : ''}${
          useStylelint ? ' && yarn stylelint:fix' : ''
        }${useEslint ? ' && yarn eslint:fix' : ''}"`
      : ''
  }\n\t},\n`
  const dependencies = '\t"dependencies": {\n\t},\n'
  const devDependencies = `\t"devDependencies": {\n\t}${isPackage ? ',\n' : '\n'}`
  const peerDependencies = isPackage ? '\t"peerDependencies": {\n\t}\n' : ''

  return (
    '{\n' +
    isPrivate +
    main +
    bin +
    version +
    name +
    description +
    author +
    homepage +
    repository +
    bugs +
    license +
    keywords +
    files +
    publishConfig +
    scripts +
    dependencies +
    devDependencies +
    peerDependencies +
    '}\n'
  )
}

module.exports = createPackage
