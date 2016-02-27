exports.greet = function( player ) {
    echo( player, 'Hi ' + player.name);
}

exports.getScore = function(player){
  return scoreboard[ player ];
}
function main(){
var d = box( blocks.oak )
          .up()
          .box( blocks.oak ,3,1,3)
          .down()
          .fwd(2)
          .box( blocks.oak )
          .turn()
          .fwd(2)
          .box( blocks.oak )
          .turn()
          .fwd(2)
          .box( blocks.oak );
}
