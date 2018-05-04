/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "Referee" }]*/

var Referee = Class({

  constructor: function (player1, player2) {
    this._player1 = player1
    this._player2 = player2
  },
  nextTurn: function () {
    if (this._player1 && this._player1._wantsToQuit) {
      return "GAME_OVER"
    }
    if (this._player2 && this._player2._wantsToQuit) {
      return "GAME_OVER"
    }
    return "GAME_CONTINUE"
  }

})
