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
  it('nextTurn instance method should switch player', function() {
    //given
    //when
    var r = new Referee()
    //then
    expect(r.nextTurn()).toHaveBeenCalled()
  });
});
