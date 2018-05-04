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
  it('nextTurn should return GAME_CONTINUE by default ', function() {
    //given
    //when
    var r = new Referee();
    //then
    expect(r.nextTurn()).toEqual("GAME_CONTINUE")
  });
  it('nextTurn should return GAME_OVER if player1 wants to quit', function() {
    //given
    //when
    var p1 = new Player('player1', 'x')
    var r = new Referee(p1);
    r.getPlayer1().setWantsToQuit(true)
    //then
    expect(r.nextTurn()).toEqual("GAME_OVER")
  });
});
