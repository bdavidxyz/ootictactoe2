describe('ttt_tictactoe_spec.js', function() {
  it('TicTacToe should be defined', function() {
    expect(TicTacToe).toBeDefined()
  });
  it('getStatus instance method should be defined', function() {
    var game = new TicTacToe();
    expect(game.getStatus).toBeDefined()
  });
/*  it('Should be able to be asked', function() {
    var asker = new Asker();
    expect(asker.ask).toBeDefined()
  });
  it('Should call window.prompt when asking', function() {
    spyOn(window, "prompt")
    var asker = new Asker();
    //when
    asker.ask()
    //then
    expect(window.prompt).toHaveBeenCalled();
  });
  it('Should call window.prompt with same given arg, when asking', function() {
    spyOn(window, "prompt")
    var asker = new Asker();
    //when
    asker.ask("something")
    //then
    expect(window.prompt).toHaveBeenCalledWith("something");
  });
  it('Should return what the prompt returns', function() {
    spyOn(window, "prompt").and.returnValue(42);
    var asker = new Asker();
    //when
    var result = asker.ask()
    //then
    expect(result).toEqual(42);
  });*/
});