import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */


export default function minesweeper (matrix) {
  const countAround = (i,j) =>{
    let count = 0;
    const startI = (i === 0) ? 0 : i - 1;
    const startJ = (j === 0) ? 0 : j - 1; 
    const endI = (i === matrix.length-1) ? matrix.length-1 : i + 1;
    const endJ = (j === matrix[i].length-1) ? matrix[i].length-1 : j + 1; 
    // console.log(i,j, '>>>>', startI, startJ, endI, endJ)
    for (let n=startI; n<=endI; n++){
      for(let m =startJ; m<=endJ; m++){
        if (!(m === i && n === j)){
          if (matrix[n][m]) count++;
        }
      }
    }
    // console.log('count', count)
    return count
  }


  
  const output = []
  for (let i=0; i<matrix.length; i++){
    output[i]=[]
    for(let j=0; j<matrix[i].length; j++){
      output[i][j] = countAround(i,j)
    }
  }
  return output
}