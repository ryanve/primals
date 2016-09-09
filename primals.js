!function(root) {

  var anySpace = /\s/

  function primals(value) {
    if (typeof value != 'string' || !value || anySpace.test(value)) return value
    if ('false' === value) return false
    if ('true' === value) return true
    if ('null' === value) return null
    if (+value || +value === 0 || 'NaN' === value) return +value
    return 'undefined' === value ? void 0 : value
  }

  if (typeof module != 'undefined' && module.exports) module.exports = primals
  else root.primals = primals

}(this);
