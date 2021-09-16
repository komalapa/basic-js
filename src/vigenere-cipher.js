import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
// class VigenereCipheringMachine {
  constructor(isDirect = true){
    this.isDirect = isDirect
    this.alphabet = [
      'A','B','C','D','E',
      'F','G','H','I','J',
      'K','L','M','N','O',
      'P','Q','R','S','T',
      'U','V','W','X','Y',
      'Z',
    ]
  }
  cipher(str, key, direction){ //direction true - encr; false - decr
    if (typeof str !== 'string' || typeof key !== 'string') throw new Error('Incorrect arguments!')
    this.key = key;
    const keyArr = key.split('').map(letter => this.alphabet.indexOf(letter.toUpperCase()))
    const strArr = str.toUpperCase().split('')
    let counter = 0;
    for (let i = 0; i < strArr.length; i++){
      const letterIndex = this.alphabet.indexOf(strArr[i]) ;
      if (letterIndex >= 0){
        let newI = direction ? (letterIndex + keyArr[counter % keyArr.length])%this.alphabet.length : (letterIndex - keyArr[counter % keyArr.length])%this.alphabet.length;
        newI = newI < 0 ? newI + this.alphabet.length : newI;
        strArr[i] = this.alphabet[newI]
        counter++
      }
    }
    return strArr.join('');
  }
  encrypt(str, key) {
    let output = this.cipher(str,key,true);
    if (!this.isDirect) output = output.split('').reverse().join('');
    return output;
  }
  decrypt(str, key = this.key) {
    let output = this.cipher(str,key,false);
    if (!this.isDirect) output = output.split('').reverse().join('');
    return output;
  }
}
