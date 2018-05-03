/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "ttt_new_game" }]*/

function ttt_new_game() {
  var player1 = new Player('player1', 'x')
  var player2 = new Player('player2', 'o')
  var board = new Board()
  var game = new TicTacToe(player1, player2, board)
  game.start()
  return [player1, player2, board, game]
}
