import convert from './convert';
import { VOLPY_OPTIONS } from './volpy-options';

export default function (string) {
  return convert(string, VOLPY_OPTIONS)
}
