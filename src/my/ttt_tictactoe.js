/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "TicTacToe" }]*/

var TicTacToe = Class({

  constructor: function () {
    this._status = "NOT_STARTED"
  },
  start : function() {
    this._status = "STARTED"    
  },
  getStatus : function() {
    return this._status
  }
})
