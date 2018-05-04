describe('ttt_board_spec.js', function() {
  it('Board should be defined', function() {
    expect(Board).toBeDefined()
  });
  it('Should be able to be instantiated', function() {
    var board = new Board()
    expect(board instanceof Board).toEqual(true)
  });
  it('Should have the isFull function', function() {
    var board = new Board()
    expect(board.isFull).toBeDefined();
  });
  // it('Should not full by default', function() {
  //   var board = new Board()
  //   expect(board.isFull).toBeDefined();
  // });
});
