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
  const output = []
  for (let i=0; i<matrix.length; i++){
    for(let j=0; j<matrix[i].length; j++){
      let sum = 0;
      console.log(matrix[i][j], i,j)
      if (i>0){//prev row
        //sum = matrix[i-1][j-1] ? sum + 1 : sum;
        sum = matrix[i-1][j] ? sum + 1 : sum;
        sum = matrix[i-1][j+1] ? sum + 1 : sum;
      }
      // sum = matrix[i][j-1] ? sum + 1 : sum;
      sum = matrix[i][j] ? sum + 1 : sum;
      sum = matrix[i][j+1] ? sum + 1 : sum;
      if (i < matrix.length -1){//next row
        //sum = matrix[i+1][j-1] ? sum + 1 : sum;
        sum = matrix[i+1][j] ? sum + 1 : sum;
        sum = matrix[i+1][j+1] ? sum + 1 : sum;
      }
      output[i][j] = sum
    }
  }
  return output
}