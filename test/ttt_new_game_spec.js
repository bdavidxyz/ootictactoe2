describe('ttt_new_game function', function() {
    it('should be defined', function() {
      //given
      //when
      //then
      expect(ttt_new_game).toBeDefined()
    });
    it('should create player 1', function() {
      //given
      //when
      ttt_new_game()
      //then
      expect(window.player1).toBeDefined()
    });
    it('should create player1 as instanceof Player', function() {
      //given
      //when
      ttt_new_game()
      //then
      expect(window.player1 instanceof Player).toEqual(true)
    });
    it('should have an "x" coin' , function() {
      //given
      //when
      ttt_new_game()
      //then
      expect(window.player1.getCoinAppearence()).toEqual("x")
    });
});    
