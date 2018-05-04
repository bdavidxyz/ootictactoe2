/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "Referee" }]*/

var Referee = Class({

  constructor: function (player1) {
    this._player1 = player1
  },
  getPlayer1: function () {
    return this._player1
  },
  nextTurn: function () {
    return "GAME_CONTINUE"
  }

})
