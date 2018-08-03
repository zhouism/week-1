var myArgs = process.argv.slice(2);
function obfuscates(password){
  var arr = password.split('');
  for(var i = 0; i < arr.length; i ++) {
    if (arr[i] == 'a') {
      arr[i] = '4';
    }
    else if (arr[i] == 'e') {
      arr[i] = '3';
    }
    else if (arr[i] == "o") {
      arr[i] = "0";
    }
    else if (arr[i] == "l") {
      arr[i] = "1";
    }
  }
   return arr.join("");

}
console.log(obfuscates(myArgs[0]));