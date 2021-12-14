
class Queue {
    #list = [];
  
    enqueue(item) {
      //implement me
      this.#list.push(item)
    }
  
    dequeue() {
      //implement me
     return this.#list.shift()
    }
  
    hasNext() {
      //implement me
      const length = this.#list.length
     return length ? true : false
      
    }
    size() {
      return this.#list.length
    }
  }
  const line = new Queue();
  line.enqueue('not a number')
  line.enqueue('another not a number')

  // console.log(line.size())
  // console.log(line.dequeue())

  // console.log(line.hasNext())
  class BetterQueue {
    
    #list = [];
    #index = 0;
  
    enqueue(item) {
      //implement me
      this.#list.push(item)
    }
  
    dequeue() {
      //implement me
     if(this.#list.length - this.#index){
       const firstItem = this.#list[#index]
       #index++;
       return firstItem;
     }
    }
  
    hasNext() {
      //implement me
      const length = this.#list.length - this.#index
     return length ? true : false
      
    }
    size() {
      return this.#list.length - this.#index
    }
  }

const better = new BetterQueue

// syntax checking with stack

class Stack {
  #list = [];

  push(item) {
    //implement me
  }

  pop() {
    //implement me
  }

  peek() {
    //implement me
  }

  get size() {
    //implement me
  }
}
const syntaxCheck = (str) => {
  let num = 0;
  const arr = str.split('')
for(let item of arr){
  if(item === '{' || item === '(' ) {
    num++;
  } else if(item === '}' || item === ')' ){
    num--;
  }
}
return !num

}