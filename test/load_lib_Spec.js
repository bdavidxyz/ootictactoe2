describe("External libs", function () {
  it("should have versions", function () {
    expect($).toBeDefined();
    expect(jasmine).toBeDefined();
    expect(jasmine.version).toEqual('2.99.0');
    expect(_).toBeDefined();
    expect(Class).toBeDefined();
    expect(_.VERSION).toEqual('4.17.5');
    expect($.fn.jquery).toEqual('2.2.4');
  })
})
