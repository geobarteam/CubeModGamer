exports.flightStatus = function( player ) {
  if ( player.onGround ) { 
    echo(player, 'You are not flying!' );
  } else {
    echo(player, 'Hey, You are flying!' );
  }
}
