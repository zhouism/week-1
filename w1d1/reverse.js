var myArgs = process.argv.slice(2);
function reverse(string){
  if (typeof myArgs === 'string' || myArgs instanceof String){
    var arr = string.split('');
    var arr2 = [];
    var j = 0 ;
    for (var i = arr.length - 1; i >= 0; i --) {
        arr2[j] = arr[i];
        j++;
      }
   return arr2.join("");

}
console.log(reverse(myArgs));