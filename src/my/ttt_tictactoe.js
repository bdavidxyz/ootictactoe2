/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "TicTacToe" }]*/

var TicTacToe = Class({

  constructor: function () {
    this._status = "NOT_STARTED"
    this._referee = new Referee()
  },
  start : function() {
    this._status = "STARTED"    
  },
  getStatus : function() {
    return this._status
  }
})
