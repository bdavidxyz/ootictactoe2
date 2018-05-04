/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "TicTacToe" }]*/

var TicTacToe = Class({
  constructor: function (player1, player2, board) {
    this._status = "NOT_STARTED"
    this._referee = new Referee(player1, player2, board)
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
