/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "ttt_new_game" }]*/

function ttt_new_game() {
  window.my_player1 = new Player('player1', 'x')
  window.my_player2 = new Player('player2', 'o')
  window.my_board = new Board([' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' '])
  window.my_game = new TicTacToe(my_player1, my_player2, my_board)
  window.my_game.start()
}
