const assert = require('assert')
const { Prt, fes, pft } = require('../../../behavioral/observer/observer.js')
const { ObjObservable, Observer } = require('../../../behavioral/observer/observer_es6')

describe('observer test', () => {

  it('sanity', () => {
    const product = new Prt()
    product.register(fes)
    product.register(pft)
    product.setBasePrice(100)
    assert.strictEqual(product.price, 240)
  })

})

describe('observer es6 test', () => {

  it('the observable should subscribe observer and notify observers', () => {

    const observer1 = new Observer((msg) => assert.strictEqual(msg,1))
    const observer2 = new Observer((msg) => assert.strictEqual(msg,2))
    const observer3 = new Observer((msg) => assert.strictEqual(msg,3))

    const objObservable = new ObjObservable()

    objObservable.subscribeObserver(observer1)
    objObservable.subscribeObserver(observer2)
    objObservable.subscribeObserver(observer3)

    objObservable.notifyObserver(observer1, 1)
    objObservable.notifyObserver(observer2, 2)
    objObservable.notifyObserver(observer3, 3)
  })

  it('the observable should unsubscribe observer', () => {

    const observer1 = new Observer(() => {})
    const observer2 = new Observer(() => {})
    const observer3 = new Observer(() => {})

    const objObservable = new ObjObservable()

    objObservable.subscribeObserver(observer1)
    objObservable.subscribeObserver(observer2)
    objObservable.subscribeObserver(observer3)

    objObservable.unsubscribeObserver(observer1)
    objObservable.unsubscribeObserver(observer2)
    objObservable.unsubscribeObserver(observer3)

    const observers = objObservable.getObservers()

    assert.notStrictEqual(observers.some(item => item === observer1),true)
    assert.notStrictEqual(observers.some(item => item === observer2), true)
    assert.notStrictEqual(observers.some(item => item === observer3),true)
  })

  it('the observable should notify all observers', () => {
    const observer1 = new Observer((msg) => assert.strictEqual(msg,1))
    const observer2 = new Observer((msg) => assert.strictEqual(msg,1))
    const observer3 = new Observer((msg) => assert.strictEqual(msg,1))

    const objObservable = new ObjObservable()

    objObservable.subscribeObserver(observer1)
    objObservable.subscribeObserver(observer2)
    objObservable.subscribeObserver(observer3)

    objObservable.notifyAllObservers(1)
  })
})
