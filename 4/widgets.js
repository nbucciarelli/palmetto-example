// - newEvent
// - response
// - responseError

// var palmetto = require('palmettoflow-nodejs')
// var ee = palmetto()
var response = require('palmettoflow-event').response
var widgets = []

module.exports = function (ee) {
  ee.on('/widgets/create', function(e) {
    widgets.push(e.object)
    ee.emit('send', response(e, { ok: true }))
  })
}

// var ne = newEvent('widgets', 'create', {name: 'my widget'})
// ee.on(ne.from, handleEvent)
// e.emit('send', ne)
// {
//   to: '/widgets/create',
//   from: '{generated unique id}',
//   subject: 'widgets',
//   verb: 'create',
//   object: { name: 'my widget' }
//   dateSubmitted: '{generated date}'
// }
