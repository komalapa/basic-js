//import { replace } from 'sinon';
import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain(email) {
  // const trimDots = (str) => {
  //   const re = new RegExp('^\\.+|\\.+$')
  //   console.log(typeof str)
  //   str = str.replace(re, '')
  //   console.log(str)
  //   return str
  // }
  //return trimDots(email.split('@')[email.split('@').length -1])
  return email.split('@')[email.split('@').length -1]
}
