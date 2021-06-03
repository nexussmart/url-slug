import convert from './convert'
import revert from './revert'
import * as transformers from './transformers'

import { VOLPY_OPTIONS } from './volpy'

const urlSlug = function (string, options) {
  return convert(string, options)
}

for (const transformer in transformers) {
  urlSlug[transformer] = transformers[transformer]
}

const volpy = function (string) {
  return convert(string, VOLPY_OPTIONS)
}

urlSlug.convert = convert
urlSlug.revert = revert
urlSlug.volpy = volpy

export default urlSlug
