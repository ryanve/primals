!function(root) {

  var anySpace = /\s/

  function primals(value) {
    if (typeof value != 'string' || !value || anySpace.test(value)) return value
    if ('undefined' === value) return void 0
    if ('false' === value) return false
    if ('true' === value) return true
    if ('null' === value) return null
    if (+value || +value === 0 || 'NaN' === value) return +value
    return value
  }

  if (typeof module != 'undefined' && module.exports) module.exports = primals
  else root.primals = primals

}(this);
