// Generated by CoffeeScript 1.6.3
var Foxglove;

Foxglove = (function() {
  function Foxglove() {}

  Foxglove.prototype.generate = function() {
    var nouns;
    nouns = DictionaryAPI.pull('nouns', 2);
    return this.result = smash(nouns);
  };

  Foxglove.prototype.smash = function(nouns) {
    return nouns.join('');
  };

  return Foxglove;

})();
