const assert = require('assert')

const { Originator, Caretaker } = require('../../../behavioral/memento/memento_es6')

describe('memento es6 tests', () => {

  it('sanity', () => {
    const originator = new Originator()
    originator.setState('On')

    // Store internal state
    const caretaker = new Caretaker()
    caretaker.setMemento(originator.createMemento())
    const result = originator.getState()
    assert.strictEqual(result, 'On')

    // Continue changing originator
    originator.setState('Off')
    const result2 = originator.getState()
    assert.strictEqual(result2, 'Off')

    // Restore saved state
    originator.setMemento(caretaker.getMemento())
    const result3 = originator.getState()
    assert.strictEqual(result3, 'On')
  })

})
