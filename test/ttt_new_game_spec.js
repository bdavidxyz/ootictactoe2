describe('ttt_new_game function', function() {
  beforeEach(function() {
/*    delete window.my_player1
    delete window.my_player2*/
    _.forOwn(window, function(value, key) {
      if (_.startsWith(key, "my_")) {
        delete window[key]
      }
    })
  })
  it('should be defined', function() {
    //given
    //when
    //then
    expect(ttt_new_game).toBeDefined()
  });
  it('should create player 1', function() {
    //given
    expect(window.my_player1).not.toBeDefined()
    //when
    ttt_new_game()
    //then
    expect(window.my_player1).toBeDefined()
  });
  it('should create my_player1 as instanceof Player', function() {
    //given
    expect(window.my_player1).not.toBeDefined()
    //when
    ttt_new_game()
    //then
    expect(window.my_player1 instanceof Player).toEqual(true)
  });
  it('should have an "x" coin appearance', function() {
    //given
    expect(window.my_player1).not.toBeDefined()
    //when
    ttt_new_game()
    //then
    expect(window.my_player1.getCoinAppearence()).toEqual("x")
  });
  it('should create player 2', function() {
    //given
    expect(window.my_player2).not.toBeDefined()
    //when
    ttt_new_game()
    //then
    expect(window.my_player2).toBeDefined()
  });
  it('should create my_player2 as instanceof Player', function() {
    //given
    expect(window.my_player2).not.toBeDefined()
    //when
    ttt_new_game()
    //then
    expect(window.my_player2 instanceof Player).toEqual(true)
  });
  it('should have an "o" coin appearance', function() {
    //given
    expect(window.my_player2).not.toBeDefined()
    //when
    ttt_new_game()
    //then
    expect(window.my_player2.getCoinAppearence()).toEqual("o")
  });
  it('should create my_board', function() {
    //given
+   expect(window.my_board).not.toBeDefined()
    //when
    ttt_new_game()
    //then
+   expect(window.my_board).toBeDefined()
  });
/*  it('should create my_board as instanceof Board', function() {
    //given
+   expect(window.my_board).not.toBeDefined()
    //when
    ttt_new_game()
    //then
    expect(window.my_board instanceof Board).toEqual(true)
  });
  it('should use an array for the Board', function() {
    //given
+   expect(window.my_board).not.toBeDefined()
    //when
    ttt_new_game()
    //then
+   expect(window.my_board.getArrayBoard()).toEqual([' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' '])
  });
  it('should create a TicTacToe', function() {
    //given
    //when
    ttt_new_game()
    //then
    expect(window.my_game).toBeDefined()
  });
  it('should start a game', function() {
    //given
    //when
    ttt_new_game()
    //then
    expect(window.my_game.start).toBeDefined()
  }); 
 */
});
