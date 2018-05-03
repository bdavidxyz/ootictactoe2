/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "Board" }]*/


var Board = Class({
  constructor: function(arrayBoard) {
    this._arrayBoard = arrayBoard
  },

  getArrayBoard : function() {
    return this._arrayBoard
  }

})
