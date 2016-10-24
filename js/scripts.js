var suits = ["spades", "hearts", "diamonds", "clubs"];
var ranks = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
var deck = [];
$(document).ready(function(){
  suits.forEach(function(suit){
    ranks.forEach(function(rank){
      $(".output").append("<li>"+rank + " of " + suit+"</li>");
    });
  });
});
