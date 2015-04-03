# then-eos

Promise-based end-of-stream.

## Installation

```sh
npm i then-eos -S
```

## Usage

```js
var fs = require('fs');
var eos = require('then-eos');

var stream = fs.createReadStream('LICENSE');

eos(stream).then(function () {
  // Reached end of the stream
});
```

## License

MIT licensed.
