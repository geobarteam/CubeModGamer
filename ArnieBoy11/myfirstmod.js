
exports.myfirstmod=function(){
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
