load(__folder + "drone.js")
//
// constructs an igloo
//
Drone.extend('igloo', function () {
 this.chkpt('igloo');
 //make basic structure
 this.hemisphere0(blocks.snow, 7, 'north');
 this.right(2).down(2);
 //clear door
 this.back();
 this.right(4);
 this.up(2);
 this.box(0, 2, 3, 2);
 return this.move('igloo');
});
