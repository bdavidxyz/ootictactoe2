/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "Referee" }]*/

var Referee = Class({

  constructor: function (player1) {
    this._player1 = player1
  },
  nextTurn: function () {
    if (this._player1 && this._player1._wantsToQuit) {
      return "GAME_OVER"
    }
    return "GAME_CONTINUE"
  }

})
