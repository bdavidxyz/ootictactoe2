describe('ttt_referee_spec.js', function() {
  it('Referee should be defined', function() {
    //given
    //when
    //then
    expect(Referee).toBeDefined()
  })
  it('nextTurn instance method should be defined', function() {
    //given
    //when
    var r = new Referee()
    //then
    expect(r.nextTurn).toBeDefined()
  })
  it('nextTurn should return GAME_CONTINUE by default ', function() {
    //given
    //when
    var r = new Referee()
    //then
    expect(r.nextTurn()).toEqual("GAME_CONTINUE")
  })
  it('nextTurn should return GAME_OVER if player1 wants to quit', function() {
    //given
    var p1 = new Player('player1', 'x')
    var r = new Referee(p1)
    //when
    p1.setWantsToQuit(true)
    //then
    expect(r.nextTurn()).toEqual("GAME_OVER")
  })
  it('nextTurn should return GAME_OVER if player2 wants to quit', function() {
    //given
    var p1 = new Player('player1', 'x')
    var p2 = new Player('player2', 'o')
    var r = new Referee(p1, p2)
    //when
    p2.setWantsToQuit(true)
    //then
    expect(r.nextTurn()).toEqual("GAME_OVER")
  })
  it('nextTurn should return GAME_OVER if board is full', function() {
    //given
    var p1 = new Player('player1', 'x')
    var p2 = new Player('player2', 'o')
    var b = new Board()
    var r = new Referee(p1, p2, b)
    //when
    spyOn(b, 'isFull').and.returnValue(true)
    //then
    expect(r.nextTurn()).toEqual("GAME_OVER")
  })
  it('nextTurn should return GAME_OVER if there is 3 coin aligned', function() {
    //given
    var p1 = new Player('player1', 'x')
    var p2 = new Player('player2', 'o')
    var b = new Board()
    var r = new Referee(p1, p2, b)
    //when
    spyOn(b, 'threeCoinAligned').and.returnValue('x')
    //then
    expect(r.nextTurn()).toEqual("GAME_OVER")
  })
  it('nextTurn should return GAME_CONTINUE with nominal instantiation', function() {
    //given
    var p1 = new Player('player1', 'x')
    var p2 = new Player('player2', 'o')
    var b = new Board()
    //when
    var r = new Referee(p1, p2, b)
    //then
    expect(r.nextTurn()).toEqual("GAME_CONTINUE")
  })
})
