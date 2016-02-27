exports.greet = function( player ) {
    echo( player, 'Hi ' + player.name);
}

exports.getScore = function(player){
  return scoreboard[ player ];
}
