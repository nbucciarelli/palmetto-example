var EventEmitter = require('events')
var ee = new EventEmitter()

ee.on('msg', function (msg) {
  console.log(msg)
})

ee.emit('msg', 'HELLO WORLD')
