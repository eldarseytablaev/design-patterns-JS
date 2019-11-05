/**
 * Хранитель состояния
 */
class Memento {
  constructor(state) {
    this._state = state
  }

  getState() {
    return this._state
  }
}

/**
 * Создателем
 */
class Originator {
  constructor() {
    this._state = null
  }

  setState(state) {
    this._state = state
  }

  getState() {
    return this._state
  }

  /**
   * Создать снимок состояния объекта
   * @returns {Memento}
   */
  createMemento() {
    return new Memento(this._state)
  }

  /**
   * Восстановить состояние
   * @param {Memento} memento
   */
  setMemento(memento) {
    this._state = memento.getState()
  }
}

/**
 * Опекун
 */
class Caretaker {
  constructor() {
    this._memento = null
  }

  /**
   * @param {Memento} memento
   */
  setMemento(memento) {
    this._memento = memento
  }

  /**
   * @return {Memento}
   */
  getMemento() {
    return this._memento
  }
}

module.exports = { Originator, Caretaker }
