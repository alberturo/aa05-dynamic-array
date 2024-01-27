class DynamicArray {
  constructor(defaultSize = 4) {
    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(defaultSize);
  }

  read(index) {
    return this.data[index];
  }

  push(val) {
    if (this.length >= this.capacity) this.resize();
    this.data[this.length] = val;
    this.length++;
  }

  pop() {}

  shift() {}

  unshift(val) {
    // Your code here
  }

  indexOf(val) {
    // Your code here
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
