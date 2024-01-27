class DynamicArray {
  constructor(defaultSize = 4) {
    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(defaultSize);
  }

  read(index) {
    if(index > this.length - 1){
      return undefined;
    }
    return this.data[index];
  }

  push(val) {
    if (this.length >= this.capacity) this.resize();
    this.data[this.length] = val;
    this.length++;
  }

  pop() {
    if(this.length === 0) return undefined;
    let lastitem = this.data[this.length - 1];
    this.length --;
    return lastitem;
  }


  shift() {
    if(this.length === 0) return undefined;
    let firstitem = this.data[0];
    for (let i = 0; i < this.length; i++){
      this.data[i] = this.data[i + 1];
    }

    this.length--;
    return firstitem;
  }

  unshift(val) {
    if (this.length >= this.capacity) this.resize();
    for (let i = this.length; i > 0; i--){
      this.data[i] = this.data[i - 1];
    }

    this.data[0] = val;
    this.length++;
    return val;
  }

  indexOf(val) {
    // Your c
  }

  resize() {
    // Your code here
  }
}

// let dynamicArr = new DynamicArray(8);
// dynamicArr.read(0); // 1
// dynamicArr.read(1); // 2
// console.log(dynamicArr);

module.exports = DynamicArray;
