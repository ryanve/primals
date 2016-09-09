# primals
Parse stringified primitives (primitive types) into their JavaScript values

```sh
npm install primals --save
```

## Usage

```js
var primals = require('primals')

// Conversions
primals('undefined') // undefined
primals('null') // null
primals('true') // true
primals('false') // false
primals('47') // 47
primals('4e7') // 4e7
primals('NaN') // NaN
primals('Infinity') // Infinity
primals('-Infinity') // -Infinity

// Other values are returned unchanged
primals('example') // 'example'
primals('[]') // '[]'
primals([]) // []
```

## License
[MIT](LICENSE)
