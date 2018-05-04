describe('ttt_referee_spec.js', function() {
  it('Referee should be defined', function() {
    //given
    //when
    //then
    expect(Referee).toBeDefined()
  });
  it('nextTurn instance method should be defined', function() {
    //given
    //when
    var r = new Referee();
    //then
    expect(r.nextTurn).toBeDefined()
  });
/*  it('getReferee instance method should be defined', function() {
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
  });*/
});
