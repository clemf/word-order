var WordCount = function(word, count) {
  this.word = word;
  this.count = count;
};

WordCount.prototype = new WordCount();

var wordOrder = function(input) {

  var wordSplit = input.toLowerCase().replace(/[!-@]/g, "").split(/\s+/);
  var uniqueWords = [];

  var wordSearch = function(word) {
    for(var i = 0; i < uniqueWords.length; i++) {
      if(uniqueWords[i].word == word) {
        return i;
      }
    }
    return -1
  }

  wordSplit.forEach(function(word) {
    var uniqueId = wordSearch(word);
    if(uniqueId === -1) {
      uniqueWords.push(new WordCount(word, 1));
    } else {
      uniqueWords[uniqueId].count += 1;
    }
  });

  var sorted = uniqueWords.sort(function(a,b) {
    return b.count - a.count;
  });

  var result = [];

  sorted.forEach(function(object) {
    result.push(object.word);
  });

  return result;
};

$(document).ready(function() {
  $("form#word-order").submit(function(event) {
    var input = $("input#input").val()
    var orderedWords = wordOrder(input);

    orderedWords.forEach(function(word) {
      $("#word").append("<li>" + word + "</li>");
    });

    event.preventDefault();
  });
});
