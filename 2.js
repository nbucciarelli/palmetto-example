var palmetto = require('palmettoflow-nodejs')
var ee = palmetto()

ee.on('/widgets/list', function(e) {
  console.log("WIDGETS")
})

ee.emit('send', {
  to: '/widgets/list',
  from: '1234',
  object: {}
})
