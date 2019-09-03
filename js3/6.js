/*
 * filter - takes in an object and a function. Return a new object
 * with key/value if the function returns true.
 * Example:
 * input: {5:'blah blah',name:'ho', zolo:'4thech'},(k,v)=>{return v.length > 3}
 * output: {5:'blah blah', zolo:'4thech'}
 * @param {object} a
 * @param {function} b
 * @returns {object} c
*/

const solution = (a, b) => {
  newObj = {}
  Object.prototype.objFilter = function (cb, i = 0, arr = Object.entries(this)) {
    if (i === arr.length) return newObj
    if (cb(arr[i][0], arr[i][1])) {
      newObj[arr[i][0]] = arr[i][1]
    }
    return this.objFilter(cb, i + 1)
  }
  return a.objFilter(b)
}

module.exports = {
  solution
}
