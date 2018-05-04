/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "Referee" }]*/

var Referee = Class({

  constructor: function (player1) {
    this._player1 = player1
  },
  nextTurn: function () {
    var result = "GAME_CONTINUE"
    if (this._player1 && this._player1._wantsToQuit) {
      result = "GAME_OVER"
    }
    return result
  }

})
