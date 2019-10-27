const assert = require('assert')

const { eventEmitter } = require('../../../behavioral/observer/observer-event-emitter')

describe('observer-event-emitter-test', () => {
  it('sanity', () => {
    eventEmitter.on('somethingIsReady', msg => assert.strictEqual(msg, 1))
    eventEmitter.emit('somethingIsReady', 1)
  })
})
