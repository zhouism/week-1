//NOT WORKING

var fs = require("fs");

fs.readFile('test_async.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString() + process.argv.slice(3));
});

// console.log("Going to open an existing file");
// fs.open('test_async.txt', 'r+', function(err, fd) {
//    if (err) {
//       return console.error(err);
//    }
//    console.log("File opened successfully!");
//    console.log("Going to read the file");
//    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
//       if (err){
//          console.log(err);
//       }
//       console.log(bytes + " bytes read");

//       // Print only read bytes to avoid junk.
//       if(bytes > 0){
//          console.log(buf.slice(0, bytes).toString());
//       }
//    });
//    console.log(process.argv.slice(2);
// });