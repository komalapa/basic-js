import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit( n ) {//simple way. Is there another?
  // let nStr = n.toString();
  // const numbers = [];
  // for (let i = 0; i < nStr.length; i++){
  //   numbers.push(+(nStr.substring(0,i)+nStr.substring(i+1)));
  // }

  // return numbers.reduce((max,num) => max > num ? max : num, 0)
  let deleted =false;
  const nArr = n.toString().split('');
  for(let i = 0; i < nArr.length-1; i++){ //delete from left to right if previous < next
    if (nArr[i]<nArr[i+1]) {
      nArr[i]='';
      deleted = true;
      break;
    }
  }
  if (!deleted) nArr[nArr.length-1]=''; //if not deleted delete last
  return +nArr.join('')
}
