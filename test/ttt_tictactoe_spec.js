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
  it('getReferee instance method should be defined', function() {
    //given
    //when
    var game = new TicTacToe();
    //then
    expect(game.getReferee).toBeDefined()
  });
  it('getReferee instance method should return Referee class', function() {
    //given
    var game = new TicTacToe();
    //when
    var referee = game.getReferee()
    //then
    expect(referee instanceof Referee).toEqual(true)
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
  it('should launch nine turns', function() {
    //given
    var game = new TicTacToe();
    spyOn(game.getReferee(), "nextTurn")
    //when
    game.start()
    //then
    expect(game.getReferee.nextTurn.calls.count()).toEqual(9);
  });
});
