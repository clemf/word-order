describe('wordOrder', function() {

  it('takes a word returns an array containing the word', function() {
    expect(wordOrder("hello")).to.eql(["hello"]);
  });

  it('takes two words and returns them in an array', function() {
    expect(wordOrder("hello world")).to.eql(["hello", "world"]);
  });

  it('returns words ordered by number of appearances', function() {
    expect(wordOrder("hello world world")).to.eql(["world", "hello"]);
  });

  it('ignores case of input', function() {
    expect(wordOrder("Hello hello")).to.eql(["hello"]);
  });
  
});
