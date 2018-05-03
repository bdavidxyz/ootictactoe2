/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "Player" }]*/

var Player = Class({

  constructor: function (name, coinAppearance) {
    // super might promote current instance
    var self = this.super();
    this.coinAppearance = coinAppearance
    this.name = name
    // and remember to return it
    return self;
  },

  getCoinAppearence: function () {
    return this.coinAppearance
  }
})
