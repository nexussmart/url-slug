import { MARKETING_DICTIONNARY } from './marketing-dictionnary'

function dictionaryCheck(fragment, separator){

  let regExp, value;

  for (let entryIndex = 0; entryIndex < MARKETING_DICTIONNARY.length; entryIndex++) {
    value = MARKETING_DICTIONNARY[entryIndex].toLowerCase();
    regExp = new RegExp(value, 'gi');
    fragment = fragment.replace(regExp, separator + value + separator);
  }

  return fragment.split(separator).filter(Boolean).join(separator);
}

export const MARKETING_TRANSFORMER = function marketingConverter(fragments, separator) {

  const buffer = [];

  for (let index = 0; index < fragments.length; index++) {
    buffer.push( dictionaryCheck(fragments[index].toLowerCase(), separator ) );
  }

  return buffer.join(separator);
}
