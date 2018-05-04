/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "Player" }]*/

var Player = Class({

  constructor: function (name, coinAppearance) {
    this._coinAppearance = coinAppearance
    this._name = name
  },
  getCoinAppearence: function () {
    return this._coinAppearance
  }
})
