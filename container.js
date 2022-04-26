/**container.js*/


/**
 * A container of integers that should support
 * addition, removal, and search for the median integer
 */
class Container {
  constructor() {
    this.array = []
  }

  /**
   * Adds the specified value to the container
   *
   * @param {number} value
   */
  add(value) {
    // TODO: implement this method
    return this.array.push(value)
  }

  /**
   * Attempts to delete one item of the specified value from the container
   *
   * @param {number} value
   * @return {boolean} true, if the value has been deleted, or
   *                   false, otherwise.
   */
  delete(value) {
    // TODO: implement this method
    var originalLength = this.array.length
    this.array = this.array.filter(x => x !== value);
    return originalLength === this.array.length ? false : true;
  }

  /**
   * Finds the container's median integer value, which is
   * the middle integer when the all integers are sorted in order.
   * If the sorted array has an even length,
   * the leftmost integer between the two middle
   * integers should be considered as the median.
   *
   * @return {number} the median if the array is not empty, or
   * @throws {Error} a runtime exception, otherwise.
   */
  getMedian() {
    // TODO: implement this method
    var arr = this.array
    if (arr.length === 0) throw new Error('Empty array');
    console.log("length: "+arr.length)
    const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
    return arr.length % 2 === 0 ? nums[mid-1] : nums[mid];
  }

}

module.exports = Container;



