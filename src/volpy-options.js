import { MARKETING_TRANSFORMER } from './custom-transformers'

export const VOLPY_OPTIONS = {
  camelCase: false,
  dictionary: {
    '+': '-plus-'
  },
  transformer: MARKETING_TRANSFORMER
}
