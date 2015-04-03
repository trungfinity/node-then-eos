'use strict';

var eos = require('end-of-stream');
var consume = require('stream-consume');
var thenify = require('thenify');

eos = thenify(eos);

module.exports = function (stream) {
  consume(stream);

  return eos(stream, {
    error: true,
    readable: stream.readable,
    writable: stream.writable && !stream.readable
  });
};
