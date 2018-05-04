describe('ttt_tictactoe_spec.js', function() {
  it('TicTacToe should be defined', function() {
    //given
    //when
    //then
    expect(TicTacToe).toBeDefined()
  });
  it('getStatus instance method should be defined', function() {
    //given
    //when
    var game = new TicTacToe();
    //then
    expect(game.getStatus).toBeDefined()
  });
  it('start instance method should be defined', function() {
    //given
    //when
    var game = new TicTacToe();
    //then
    expect(game.start).toBeDefined()
  });
  it('should have status NOT_STARTED by default', function() {
    //given
    //when
    var game = new TicTacToe();
    //then
    expect(game.getStatus()).toEqual("NOT_STARTED")
  });
  it('should have status STARTED when game is started', function() {
    //given
    var game = new TicTacToe();
    //when
    game.start()
    //then
    expect(game.getStatus()).toEqual("STARTED")
  });
});
