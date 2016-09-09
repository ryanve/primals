!function(api) {

  function ok(actual, correct) {
    if (correct === correct ? actual !== correct : actual === correct) {
      var msg = [typeof actual, actual, 'should be', typeof correct, correct]
      throw new Error(msg.join(' '))
    }
  }

  var a = []
  var o = {}
  var f = function() {}

  ok(api(0), 0)
  ok(api(1), 1)
  ok(api(a), a)
  ok(api(o), o)
  ok(api(f), f)
  ok(api(''), '')
  ok(api(' '), ' ')
  ok(api('1 '), '1 ')
  ok(api(' 1'), ' 1')
  ok(api('4.7'), 4.7)
  ok(api('4e7'), 4e7)
  ok(api(true), true)
  ok(api(false), false)
  ok(api('test'), 'test')
  ok(api('true'), true)
  ok(api('false'), false)
  ok(api('null'), null)
  ok(api('0'), 0)
  ok(api('-0'), 0)
  ok(api('47'), 47)
  ok(api('-47'), -47)
  ok(api('undefined'))
  ok(api(Infinity), Infinity)
  ok(api(-Infinity), -Infinity)
  ok(api('Infinity'), Infinity)
  ok(api('-Infinity'), -Infinity)
  ok(api(NaN), NaN)
  ok(api('NaN'), NaN)

  console.log('All tests passed =)')
}(require('./'));
