var ee = require('./service')

ee.on('1234', function(e) {
  console.log(e.object)
})

ee.emit('send', {
  to: '/echo',
  from: '1234',
  subject: "ECHO",
  verb: 'RUN',
  object: 'ECHO ME'
})
