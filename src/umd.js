import convert from './convert'
import revert from './revert'
import volpy from './volpy'
import * as transformers from './transformers'

const urlSlug = function (string, options) {
  return convert(string, options)
}

for (const transformer in transformers) {
  urlSlug[transformer] = transformers[transformer]
}

urlSlug.convert = convert
urlSlug.revert = revert
urlSlug.volpy = volpy

export default urlSlug
