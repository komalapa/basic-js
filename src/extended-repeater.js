import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
//options:
// repeatTimes sets the number of repetitions of the str;
// separator is a string separating repetitions of the str; default +
// addition is an additional string that will be added to each repetition of the str;
// additionRepeatTimes sets the number of repetitions of the addition;
// additionSeparator is a string separating repetitions of the addition. default |
  if (str === null) str = 'null';
  let {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|'} = options;
  if (addition === null) addition = 'null';
  let strArr = new Array(repeatTimes);
  strArr.fill(str);
  const additionArr = new Array(additionRepeatTimes);
  additionArr.fill(addition);
  const additionStr = additionArr.join(additionSeparator) 
  strArr = strArr.map(s => s + additionStr)
  console.log(str, options, strArr, additionArr)
  return strArr.join(separator)
}
