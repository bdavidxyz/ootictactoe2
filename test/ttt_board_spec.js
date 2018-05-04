describe('ttt_board_spec.js', function() {
  it('Board should be defined', function() {
    //given
    //when
    //then
    expect(Board).toBeDefined()
  });
  it('Should be able to be instantiated', function() {
    //given
    //when
    var board = new Board()
    //then
    expect(board instanceof Board).toEqual(true)
  });
  it('Should have the isFull function', function() {
    //given
    //when
    var board = new Board()
    //then
    expect(_.isFunction(board.isFull)).toEqual(true);
  });
  it('Should not be full by default', function() {
    //given
    //when
    var board = new Board()
    //then
    expect(board.isFull()).toEqual(false);
  });
});
