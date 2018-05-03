/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "Asker" }]*/

var Asker = Class({
  ask: function (question) {
    return prompt(question);
  }
});
