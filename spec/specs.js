describe('wordOrder', function() {

  it('takes a word returns an array containing the word', function() {
    expect(wordOrder("hello")).to.eql(["hello"]);
  });

  it('takes two words and returns them in an array', function() {
    expect(wordOrder("hello world")).to.eql(["hello", "world"]);
  });
  
});
