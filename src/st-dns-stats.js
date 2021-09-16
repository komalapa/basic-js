import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  const domainsStat = {};
  domains.forEach(domain =>{
    domain = domain.split('.');
    let part = '';
    for (let i = domain.length - 1; i>=0; i--){
      part =part + '.' +domain[i];
      domainsStat[part] = domainsStat[part] ? domainsStat[part] + 1 : 1; 
    }
  })
  //console.log(domainsStat)
  return domainsStat
}
