import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr, depth = 0) {
    if (!Array.isArray(arr)) return 0;
    const max = arr.reduce((max ,el) => {
      const depthIn = this.calculateDepth(el,depth)
      return depthIn > max ? depthIn : max;
    }, 0);
    return max+1 //max of inner arrays + 1 main array
  }
}
