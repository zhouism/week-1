var myArgs = process.argv.slice(2)[0].split('');
function obfuscates(password){
  switch (arr) {
    case "a":
      return "4";
      break;
    case "e":
      return "3";
      break;
    case "o":
      return "0";
      break;
    case "l":
      return "1";
    default:
     return arr
      break;
  }
  // for(var i = 0; i < arr.length; i ++) {
  //   if (arr[i] == 'a') {
  //     arr[i] = '4';
  //   }
  //   else if (arr[i] == 'e') {
  //     arr[i] = '3';
  //   }
  //   else if (arr[i] == "o") {
  //     arr[i] = "0";
  //   }
  //   else if (arr[i] == "l") {
  //     arr[i] = "1";
  //   }
  // }
   return arr.join("");

}
console.log(obfuscates(myArgs));