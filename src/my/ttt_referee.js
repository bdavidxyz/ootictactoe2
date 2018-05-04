/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "Referee" }]*/

var Referee = Class({

  constructor: function (player1, player2, board) {
    this._player1 = player1
    this._player2 = player2
    this._board = board
  },
  nextTurn: function () {
    if (this._player1 && this._player1.getWantsToQuit()) {
      return "GAME_OVER"
    }
    if (this._player2 && this._player2.getWantsToQuit()) {
      return "GAME_OVER"
    }
    if (this._board && this._board.isFull()) {
      return "GAME_OVER"
    }
    if (this._board && this._board.threeCoinAligned()) {
      return "GAME_OVER"
    }
    return "GAME_CONTINUE"
  }

})
