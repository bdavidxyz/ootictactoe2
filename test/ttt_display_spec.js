describe('ttt_display_spec.js', function() {
  it('Display should be defined', function() {
    expect(Display).toBeDefined()
  });
  it('should display something', function() {
    //given
    //when
    //then
    expect(ttt_display).toHaveBeenCalledWith("something")
  });
});
