/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "Player" }]*/

var Player = Class({

  constructor: function (name, coinAppearance) {
    this._coinAppearance = coinAppearance
    this._name = name
    this._wantsToQuit = false
  },
  getCoinAppearence: function () {
    return this._coinAppearance
  },
  getWantsToQuit: function () {
    return this._wantsToQuit
  },
  setWantsToQuit: function (wantsToQuit) {
    this._wantsToQuit = !!wantsToQuit;
  }

})
