// {
//   to: 'receiver unique address',
//   from: 'sender unique address',
//   subject: 'service name',
//   verb: 'action',
//   object: 'your request or response payload',
//   actor: 'entity sending the request',
//   dateSubmitted: 'date request is sent',
//   duration: 'ms service took to run'
// }

var palmetto = require('palmettoflow-nodejs')
var ee  = palmetto()

ee.on('/echo', function(e) {
  ee.emit('send', {
    to: e.from,
    from: e.to,
    subject: e.subject,
    verb: e.verb,
    object: e.object
  })
})

module.exports = ee
