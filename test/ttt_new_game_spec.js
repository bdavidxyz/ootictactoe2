describe('ttt_new_game function', function() {
    it('should be defined', function() {
      expect(ttt_new_game).toBeDefined()
    });
    it('should create player 1', function() {
      expect(window.player1).toBeDefined()
      //expect(ttt_new_game()[0] instanceof Player).toBe(true)
    });
});    
