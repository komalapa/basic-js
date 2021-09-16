import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
 export default {
// const chain ={
  node : undefined,
  getLength() {
    let count = 0;
    let node = this.node
    while (typeof node != 'undefined'){
      //console.log('len', node)
      count++;
      node = node.next
      //
    }
    //console.log('len', count)
    return count;
  },
  addLink(value) {
    let node = this.node;
    //console.log('add', node)
    const newNode = {node: value, next: undefined}
    if (typeof node === 'undefined') {
      this.node = newNode;
      //console.log(node)
      return this;
    }
    while (typeof node.next != 'undefined'){
      node = node.next
    }
    
    node.next = newNode;
    // console.log('addlink',value,this.finishChain())
    return this
  },
  removeLink(position) {
    console.log('del', this.showChain(), position)
    //console.log('del', position, typeof position, this.getLength(), 'throw?', (!position || typeof position !== 'number' || position > this.getLength()))
    if (!position || typeof position !== 'number' || position > this.getLength() || position < 1){
      this.node = undefined;
      throw new Error ("You can't remove incorrect link!")
    } 
    let count = 0;
    let node = this.node;
    if (position === 1){ //first is special item
      this.node = this.node.next;
      return this
    }
    while (typeof node.next != 'undefined'){
      count++;
      console.log('count',count, 'pos', position)
      if (count === position-1){
        node.next = node.next.next;
        return this;
      }
      node = node.next
    }
    if (count === position) node = undefined 
    return this
  },
  reverseChain() {
    let node = this.node;
    if (!node) return this;
    const chain = [];
    while (typeof node.next != 'undefined'){
      chain.push(node.node)
      node = node.next
    }
    chain.push(node.node)
    this.node = undefined;
    for (let i = chain.length -1; i>=0; i--){
      this.addLink(chain[i])
    }
    return this
  },
  showChain(){
    let node = this.node;
    const chain = [];
    while (typeof node.next != 'undefined'){
      // chain.push(node.node)
      node.node === null ? chain.push('null') : chain.push(node.node)
    
      node = node.next
    }
    node.node === null ? chain.push('null') : chain.push(node.node)
    return '( ' + chain.join(' )~~( ') + ' )'
  },
  finishChain() {
    let node = this.node;
    const chain = [];
    while (typeof node.next != 'undefined'){
      // chain.push(node.node)
      node.node === null ? chain.push('null') : chain.push(node.node)
    
      node = node.next
    }
    node.node === null ? chain.push('null') : chain.push(node.node)
    this.node = undefined;
    //console.log('chain',chain)
    return '( ' + chain.join(' )~~( ') + ' )'
  }
};




// console.log(chain.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain())
// console.log(chain.finishChain())