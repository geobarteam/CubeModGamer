exports.flightStatus = function( player ) {
  if ( player.onGround ) { 
    echo(player, 'You are not flying dude!' );
  } else {
    echo(player, 'Hey, You are flying dude!' );
  }
}
