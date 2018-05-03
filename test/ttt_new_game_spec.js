describe('ttt_new_game function', function() {
    it('should be expected', function() {
      expect(ttt_new_game).toBeDefined()
    });
    it('should instantiate player 1', function() {
      expect(ttt_new_game()[0] instanceof Player).toBe(true)
    });
});    
