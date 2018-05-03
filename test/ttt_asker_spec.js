describe('ttt_asker_spec.js', function() {
  it('Asker should be defined', function() {
    expect(Asker).toBeDefined()
  });
  it('Should be able to be asked', function() {
    var asker = new Asker();
    expect(asker.ask).toBeDefined()
  });
  it('Should call window.prompt when asking', function() {
    // spyOn(window, "prompt").and.returnValue(42);
    spyOn(window, "prompt")
    var asker = new Asker();
    //when
    asker.ask()
    //then
    expect(window.prompt).toHaveBeenCalled();

  });
});
