/**
 * Хранитель состояния
 */
function Memento(state) {
  this._state = state
}
Memento.prototype.getState = function() {
  return this._state
}

/**
 * Создателем
 */
function Originator() {
  this._state = null
}
Originator.prototype.setState = function(state) {
  this._state = state
}
Originator.prototype.getState = function() {
  return this._state
}
Originator.prototype.createMemento = function() {
  return new Memento(this._state)
}
Originator.prototype.setMemento = function(memento) {
  this._state = memento.getState()
}

/**
 * Опекун
 */
function Caretaker() {
  this._mement = null
}
Caretaker.prototype.setMemento = function(memento) {
  this._memento = memento
}
Caretaker.prototype.getMemento = function() {
  return this._memento
}

module.exports = { Originator, Caretaker }
