describe('ttt_asker_spec.js', function() {
  it('Asker should be defined', function() {
    expect(Asker).toBeDefined()
  });
  it('Should be able to be asked', function() {
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
  });
});
