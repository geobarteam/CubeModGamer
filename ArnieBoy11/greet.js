exports.greet = function( player ) {
    echo( player, 'Hi ' + player.name);
}

function getScore(player){
  return scoreboard[ player ];
}
