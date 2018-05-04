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
