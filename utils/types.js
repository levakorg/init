const is = ({ data, type }) => typeof data === type

const isString = (data) => is({ data, type: 'string' })
const isBoolean = (data) => is({ data, type: 'boolean' })

module.exports = { is, isString, isBoolean }
