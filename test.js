//var Jimp = require("jimp");
var gp = require("./gp.js");


// var newimage = new Jimp(1600,1600,0x00000000,(err,newimg)=>{
//   newimg.write( "out.png", (err,res)=>{console.log("OK");} )
// });


// Jimp.read("D:\\Project\\radar_nck_process\\base_bg.jpg", function (err, img) {
//     // do stuff with the image (if no exception)
//     img.write( "out.png", (err,res)=>{console.log("OK");} )
// });
//
// Jimp.read("D:\\Project\\radar_nck_process\\obj.jpg", function (err, img) {
//     // do stuff with the image (if no exception)
//     img.write( "out2.png", (err,res)=>{console.log("OK2");} )
// });
// var img = new Jimp("D:\\Project\\radar_nck_process\\base_bg.jpg");
// img.write( "out.png", (err,res)=>{console.log("OK");} )

gp.report_img({},(err,res)=>{
  console.log(res)
})

// Jimp.read(prm_bg, (err, image) => {
//   if (err){
//       return cb(err)
//   }
  
//   Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(font32b => {
//       Jimp.loadFont(Jimp.FONT_SANS_64_WHITE).then(font64w => {
//               Jimp.loadFont(Jimp.FONT_SANS_32_WHITE).then(font32w => {
//                   //date
//                   image.print(font32b, 769, 170, '01 . 06 . 2564');
//                   //todayCase
//                   image.print(font64w, 148, 440, '+ 2230');
//                   //case
//                   image.print(font32w, 414,472, '162022');
//                   //todayDeath
//                   image.print(font64w, 644, 440, '+ 38');
//                   //alldeath
//                   image.print(font32w, 832,472, '1069');
//                   //active
//                   image.print(font64w, 152, 710, '49218');
//                   //critical
//                   image.print(font32w, 414, 740, '1169');
//                   //recover
//                   image.print(font64w, 646, 710, '111735');

//                   //image.write('out.png')
//                   image.getBuffer(Jimp.MIME_PNG, cb)
//           });
//       });
//   });
// });