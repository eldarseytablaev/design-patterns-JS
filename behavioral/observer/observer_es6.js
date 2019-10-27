class ObjObservable {
  constructor() {
    this.observers = []
  }

  subscribeObserver(observer) {
    this.observers.push(observer)
  }

  unsubscribeObserver(observer) {
    this.observers = this.observers.filter(item => item !== observer)
  }

  notifyObserver(observer, msg = null) {
    const observerFound = this.observers.find(item => item === observer)
    if (observerFound) {
      observerFound.notify(msg)
    }
  }

  notifyAllObservers(msg = null) {
    this.observers.forEach(observer => observer.notify(msg))
  }

  getObservers() {
    return this.observers
  }
}

class Observer {
  constructor(behavior) {
    return {
      notify: (msg = null) => {
        behavior(msg)
      }
    }
  }
}

module.exports = { ObjObservable, Observer }
