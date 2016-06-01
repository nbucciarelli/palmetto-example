var palmetto = require('palmettoflow-nodejs')
var newEvent = require('palmettoflow-event').newEvent

var ee = palmetto()

var ne = newEvent('widgets', 'list', {})

var to = setTimeout(function() {
  console.log("Service did not respond")
}, 500)

ee.once(ne.from, function(e) {
  clearTimeout(to)
  console.log(e.object)
})

ee.emit('send', ne)
