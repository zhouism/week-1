

function countLetters(string) {

  var letterObj = {};
  console.log(letterObj);

  for (var i = 0; i < string.length; i++){
    if (string[i] === " "){
      continue;
    }
    if (string[i] in letterObj){
      letterObj[string[i]]++;
    } else {
      letterObj[string[i]] = 1;
    }
  }
  return letterObj;
}
console.log(countLetters('lighthouse in the house'))


function findPosition(string){
  var array = string.split('');
  for (var p = 0; p < string.length; p++) {

    }
  return position;
  }
console.log(findPosition('lighthouse in the house'))
