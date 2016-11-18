class ArrayList {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(value) {
    this.data[this.length] = value;
    this.length++;
  }
  pop() {
    const result = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return result;
    //or just return this.delete(this.length-1)
  }
  get(index) {
    return this.data[index];
  }

  // delete - function - accepts an index, 
  // removes value from list, collapses, 
  // and returns removed value
  delete(index) {
    const result = this.data[index];
    this._collapseTo(index);
    return result;
  }
  _collapseTo(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length-1];
    this.length--;
  }
}