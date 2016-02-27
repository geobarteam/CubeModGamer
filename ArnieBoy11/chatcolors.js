function chat_color( params, sender ){
  var color = params[0];
  if (colorCodes[color]){
    chat.setColor(sender,color);
  }else{
    echo(sender, color + ' is not a valid color');
    echo(sender, 'valid colors: ' + colors.join(', '));
  }
}
command(chat_color, colors);
