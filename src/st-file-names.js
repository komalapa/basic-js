import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function inArrayBeforeIndex(arr, el, index){
  for (let i = 0; i < index; i++){
    if (arr[i] === el) return true
  }
  return false
}


export default function renameFiles(names) {
  names.forEach((fileName, i)=>{
    let count = 1;
    let newName = fileName
    while (inArrayBeforeIndex(names, newName, i)){
      newName = fileName + `(${count})`
      count++
    }
    names[i] = newName
  })
  return names
}