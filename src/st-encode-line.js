import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let output = '';
  let counter = 1;
  for (let i = 0; i < str.length; i++){
    if (str[i]===str[i+1]){
      counter++
    } else {
      output = counter === 1 ? output + str[i] : output + `${counter}${str[i]}`;
      counter = 1;
    }
  }
  //console.log(output)
  return output
}
