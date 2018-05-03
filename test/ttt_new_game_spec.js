describe('ttt_new_game function', function() {
  beforeEach(function() {
    delete window.my_player1
    delete window.my_player2
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
    //when
    ttt_new_game()
    //then
    expect(window.my_player1 instanceof Player).toEqual(true)
  });
  it('should have an "x" coin appearance', function() {
    //given
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
    //when
    ttt_new_game()
    //then
    expect(window.my_player2 instanceof Player).toEqual(true)
  });
  it('should have an "o" coin appearance', function() {
    //given
    //when
    ttt_new_game()
    //then
    expect(window.my_player2.getCoinAppearence()).toEqual("o")
  });
});
