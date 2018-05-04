/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "TicTacToe" }]*/

var TicTacToe = Class({

  constructor: function () {
    this._status = "NOT_STARTED"
    this._referee = new Referee()
  },
  start : function() {
    this._status = "STARTED"
    _.times(9, this._referee.nextTurn)     
  },
  getStatus : function() {
    return this._status
  },
  getReferee : function() {
    return this._referee
  }
})
