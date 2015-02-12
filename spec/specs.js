describe('wordOrder', function() {
  it('takes a word returns an object containing the word with the value of 1', function() {
    expect(wordOrder("hello")).to.eql({ hello: 1 });
  });
});
